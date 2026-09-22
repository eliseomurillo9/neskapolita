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

let homePage = getLines('function HomePage(', '// ─── Ruta Flores Page');
let rutaFloresPage = getLines('function RutaFloresPage(', '// ─── Root');

homePage = homePage.replace('function HomePage(', 'export default function HomePage(');
rutaFloresPage = rutaFloresPage.replace('function RutaFloresPage(', 'export default function RutaFloresPage(');

const hpOld = fs.readFileSync('src/app/views/HomePage.tsx', 'utf8');
const rpOld = fs.readFileSync('src/app/views/RutaFloresPage.tsx', 'utf8');

const updateView = (oldContent, newBody, functionStartStr) => {
    // Keep everything before the function
    const importPart = oldContent.split(/export default function|function/)[0];
    return importPart + newBody;
};

fs.writeFileSync('src/app/views/HomePage.tsx', updateView(hpOld, homePage, 'HomePage'));
fs.writeFileSync('src/app/views/RutaFloresPage.tsx', updateView(rpOld, rutaFloresPage, 'RutaFloresPage'));
