import fs from 'fs';

const code = fs.readFileSync('src/app/App.main.tsx', 'utf8');
const lines = code.split('\n');

const getLines = (startStr, endStrs) => {
  const startIdx = lines.findIndex(l => l.includes(startStr));
  let endIdx = -1;
  for (let i = startIdx + 1; i < lines.length; i++) {
    for (const endStr of endStrs) {
      if (lines[i].includes(endStr)) {
        endIdx = i;
        break;
      }
    }
    if (endIdx !== -1) break;
  }
  return lines.slice(startIdx, endIdx).join('\n') + '\n';
};

let homePage = getLines('function HomePage(', ['function RutaFloresPage(', '// ─── Ruta Flores Page']);
let rutaFloresPage = getLines('function RutaFloresPage(', ['export default function App(']);

homePage = homePage.replace('function HomePage(', 'export default function HomePage(');
rutaFloresPage = rutaFloresPage.replace('function RutaFloresPage(', 'export default function RutaFloresPage(');

const hpOld = fs.readFileSync('src/app/views/HomePage.tsx', 'utf8');
const rpOld = fs.readFileSync('src/app/views/RutaFloresPage.tsx', 'utf8');

const updateView = (oldContent, newBody) => {
    const importLines = [];
    const lines = oldContent.split('\n');
    for (const l of lines) {
        if (l.includes('export default function') || l.includes('function HomePage') || l.includes('function RutaFloresPage')) {
            break;
        }
        importLines.push(l);
    }
    return importLines.join('\n') + '\n' + newBody;
};

fs.writeFileSync('src/app/views/HomePage.tsx', updateView(hpOld, homePage));
fs.writeFileSync('src/app/views/RutaFloresPage.tsx', updateView(rpOld, rutaFloresPage));
