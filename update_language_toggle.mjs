import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/imports/**/index.tsx');
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
