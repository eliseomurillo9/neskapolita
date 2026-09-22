import fs from 'fs';
import path from 'path';
import parser from '@babel/parser';
import traverse from '@babel/traverse';
import generator from '@babel/generator';
import t from '@babel/types';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const oldEn = JSON.parse(fs.readFileSync('src/en.json', 'utf-8'));
const oldEs = JSON.parse(fs.readFileSync('src/es.json', 'utf-8'));

// build a reverse lookup: string -> key
const stringToKey = {};
for (const [key, value] of Object.entries(oldEn)) {
  stringToKey[value] = key;
}

const en = { ...oldEn };
const es = { ...oldEs };
let keyCounter = 1;

const files = walk('src/app').concat(walk('src/imports'));

for (const file of files) {
  const fileContent = fs.readFileSync(file, 'utf-8');
  let hasChanges = false;
  
  const ast = parser.parse(fileContent, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse.default(ast, {
    JSXText(path) {
      const text = path.node.value.trim();
      if (text && text.length > 1 && !/^[0-9\W]+$/.test(text)) {
        let key = stringToKey[text];
        if (!key) {
          key = 'text_' + keyCounter++;
          en[key] = text;
          es[key] = text + ' (ES)';
        }
        hasChanges = true;
        path.replaceWith(
          t.jsxExpressionContainer(
            t.callExpression(t.identifier('t'), [t.stringLiteral(key)])
          )
        );
      }
    },
    StringLiteral(path) {
      if (path.parent.type === 'ObjectProperty') {
        const keyName = path.parent.key.name;
        if (['name', 'description', 'hoverDescription', 'tagline', 'type', 'label', 'highlights', 'title', 'items'].includes(keyName) || (path.parent.key.type === 'StringLiteral' && ['name', 'description'].includes(path.parent.key.value))) {
          const text = path.node.value.trim();
          if (text && text.length > 1) {
            let key = stringToKey[text];
            if (!key) {
               key = 'data_' + keyCounter++;
               en[key] = text;
               es[key] = text + ' (ES)';
            }
            hasChanges = true;
            path.replaceWith(
              t.callExpression(t.identifier('t'), [t.stringLiteral(key)])
            );
          }
        }
      }
    }
  });
  
  if (hasChanges) {
    fs.writeFileSync(file, generator.default(ast).code);
    
    // Auto import i18n
    let content = fs.readFileSync(file, 'utf-8');
    if (!content.includes('import i18n')) {
       let relPath = path.relative(path.dirname(file), 'src/i18n').replace(/\\/g, '/');
       if (!relPath.startsWith('.')) relPath = './' + relPath;
       content = `import i18n from "${relPath}";\nconst t = i18n.t.bind(i18n);\n` + content;
       fs.writeFileSync(file, content);
    }
  }
}

fs.writeFileSync('src/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/es.json', JSON.stringify(es, null, 2));
console.log('Done mapping AST with meaningful keys!');
