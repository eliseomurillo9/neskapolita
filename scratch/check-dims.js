import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesToCheck = [
  '146d43f51e15479edc5b6567ca17c752c93c098a.webp', // 16
  '1a3d1e56d1305cc21af19544fb8fab9094a03110.webp', // 17
  '5df5da27dcee43241fc35f4a3e842b4708328f40.webp', // 02
  'c06fcb3e51191a325985054ce1370bf867d176ef.webp', // 01
  '7a4368b70120d47e02aec91da9b968e1f2acd65c.webp', // Logo
  '4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.webp', // Entrance
  '6f13b43bff73692f3535ad9ee71e65d34379edcf.webp', // Casa Flores
  '851cd36c23ad4da155b6cf0f50ec6693c5ab0088.webp', // Casa Volcan
  '2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.webp', // Casa Mochila
  '6c88d1ade3e7b7f98af20a56562688e565b1e477.webp'  // Casa Nieves
];

function findFiles(dir, matchFiles, found = []) {
  if (!fs.existsSync(dir)) return found;
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath, matchFiles, found);
    } else {
      if (matchFiles.includes(item)) {
        found.push(fullPath);
      }
    }
  }
  return found;
}

const found = findFiles('src', filesToCheck);

async function run() {
  for (const f of found) {
    const meta = await sharp(f).metadata();
    console.log(`${path.basename(f)}: ${meta.width}x${meta.height}`);
  }
}
run();
