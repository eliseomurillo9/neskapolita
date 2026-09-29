import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const numberBadges = [
  '146d43f51e15479edc5b6567ca17c752c93c098a', // 16
  '1a3d1e56d1305cc21af19544fb8fab9094a03110', // 17
  '5df5da27dcee43241fc35f4a3e842b4708328f40', // 02
  'c06fcb3e51191a325985054ce1370bf867d176ef', // 01
];

const logos = [
  '7a4368b70120d47e02aec91da9b968e1f2acd65c'
];

const heroImages = [
  '4ee5ecf8eb8baa6d95d45aecc608f95006973ad4'
];

const roomImages = [
  '6f13b43bff73692f3535ad9ee71e65d34379edcf', // Casa Flores
  '851cd36c23ad4da155b6cf0f50ec6693c5ab0088', // Casa Volcan
  '2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628', // Casa Mochila
  '6c88d1ade3e7b7f98af20a56562688e565b1e477'  // Casa Nieves
];

function findFiles(dir, found = []) {
  if (!fs.existsSync(dir)) return found;
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath, found);
    } else if (fullPath.endsWith('.webp')) {
      found.push(fullPath);
    }
  }
  return found;
}

const allWebp = findFiles('src');

async function processImage(f, targetWidth) {
    const meta = await sharp(f).metadata();
    if (meta.width > targetWidth) {
        console.log(`Resizing ${path.basename(f)} from ${meta.width} to ${targetWidth}`);
        const temp = f + '.tmp.webp';
        await sharp(f).resize({ width: targetWidth }).webp({ quality: 80 }).toFile(temp);
        fs.renameSync(temp, f);
    }
}

async function run() {
  for (const f of allWebp) {
    const base = path.basename(f, '.webp');
    
    if (numberBadges.includes(base)) {
        await processImage(f, 108); // 54 * 2
    } else if (logos.includes(base)) {
        await processImage(f, 500); // 250 * 2
    } else if (heroImages.includes(base)) {
        await processImage(f, 1920); 
    } else if (roomImages.includes(base)) {
        await processImage(f, 600); 
    } else if (f.includes('302c2113c9e9de6558ff52e0df271ec24307bdf2')) {
        // Also mentioned in lighthouse as div.w-full > section > img
        await processImage(f, 600);
    }
  }
  console.log('Done resizing!');
}
run();
