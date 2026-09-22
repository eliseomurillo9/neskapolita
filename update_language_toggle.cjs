const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('index.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('src/imports');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes('function ButtonSwitchLanguage() {')) {
    if (!content.includes('useTranslation')) {
      content = 'import { useTranslation } from "react-i18next";\n' + content;
    }
    content = content.replace(
      'function ButtonSwitchLanguage() {',
      'function ButtonSwitchLanguage() {\n  const { i18n } = useTranslation();\n  const toggleLanguage = () => i18n.changeLanguage(i18n.language === "es" ? "en" : "es");\n'
    );
    content = content.replace(
      'data-name="Button - Switch language"',
      'data-name="Button - Switch language" onClick={toggleLanguage} style={{ cursor: "pointer" }}'
    );
    fs.writeFileSync(file, content);
  }
}
