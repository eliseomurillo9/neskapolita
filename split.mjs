import fs from 'fs';

const code = fs.readFileSync('src/app/App.main.tsx', 'utf8');
const lines = code.split('\n');

const getLines = (startStr, endStr) => {
  const startIdx = lines.findIndex(l => l.includes(startStr));
  let endIdx = -1;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].includes(endStr)) {
      endIdx = i;
      break;
    }
  }
  return lines.slice(startIdx, endIdx).join('\n') + '\n';
};

const homePage = getLines('export default function HomePage(', '// ─── Ruta Flores Page');
const rutaFloresPage = getLines('export default function RutaFloresPage(', '// ─── Root');

const hpOld = fs.readFileSync('src/app/views/HomePage.tsx', 'utf8');
const rpOld = fs.readFileSync('src/app/views/RutaFloresPage.tsx', 'utf8');

const updateView = (oldContent, newBody, functionStartStr) => {
    const importPart = oldContent.split(functionStartStr)[0];
    return importPart + newBody;
};

fs.writeFileSync('src/app/views/HomePage.tsx', updateView(hpOld, homePage, 'export default function HomePage('));
fs.writeFileSync('src/app/views/RutaFloresPage.tsx', updateView(rpOld, rutaFloresPage, 'export default function RutaFloresPage('));
