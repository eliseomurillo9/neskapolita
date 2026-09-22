import fs from 'fs';
import parser from '@babel/parser';
import traverse from '@babel/traverse';
import generator from '@babel/generator';
import t from '@babel/types';

const fileContent = fs.readFileSync('src/app/App.tsx', 'utf-8');
const ast = parser.parse(fileContent, {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
});

const en = {};
const es = {};
let keyCounter = 1;

traverse.default(ast, {
  JSXText(path) {
    const text = path.node.value.trim();
    if (text && text.length > 1 && !/^[0-9\W]+$/.test(text)) {
      const key = 'text_' + keyCounter++;
      en[key] = text;
      es[key] = text + ' (ES)';
      
      path.replaceWith(
        t.jsxExpressionContainer(
          t.callExpression(t.identifier('t'), [t.stringLiteral(key)])
        )
      );
    }
  },
  StringLiteral(path) {
    // Only translate string literals in specific object properties (name, description, hoverDescription, tagline, type, label, highlights, title, items)
    if (path.parent.type === 'ObjectProperty') {
      const keyName = path.parent.key.name;
      if (['name', 'description', 'hoverDescription', 'tagline', 'type', 'label', 'highlights', 'title', 'items'].includes(keyName) || (path.parent.key.type === 'StringLiteral' && ['name', 'description'].includes(path.parent.key.value))) {
        const text = path.node.value.trim();
        if (text && text.length > 1) {
          const key = 'data_' + keyCounter++;
          en[key] = text;
          es[key] = text + ' (ES)';
          path.replaceWith(
            t.callExpression(t.identifier('t'), [t.stringLiteral(key)])
          );
        }
      }
    }
  }
});

fs.writeFileSync('src/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('src/es.json', JSON.stringify(es, null, 2));
fs.writeFileSync('src/app/App.tsx', generator.default(ast).code);

console.log('Done generating translations');
