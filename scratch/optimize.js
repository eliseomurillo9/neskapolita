import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS_TO_SEARCH = ['src', 'public'];
const IMAGE_EXTS = ['.png', '.jpg', '.jpeg'];
const TEXT_EXTS = ['.tsx', '.ts', '.jsx', '.js', '.html', '.css'];

function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, '/', file));
        }
    });

    return arrayOfFiles;
}

async function processImages() {
    let allFiles = [];
    DIRS_TO_SEARCH.forEach(dir => {
        if (fs.existsSync(dir)) {
            allFiles = allFiles.concat(getAllFiles(dir));
        }
    });

    // Add index.html if it exists in root
    if (fs.existsSync('index.html')) {
        allFiles.push('index.html');
    }

    const imageFiles = allFiles.filter(file => IMAGE_EXTS.includes(path.extname(file).toLowerCase()));
    const textFiles = allFiles.filter(file => TEXT_EXTS.includes(path.extname(file).toLowerCase()));

    const conversionMap = [];

    console.log(`Found ${imageFiles.length} images to convert.`);

    for (const imgPath of imageFiles) {
        const ext = path.extname(imgPath);
        const newPath = imgPath.slice(0, -ext.length) + '.webp';
        
        try {
            console.log(`Converting ${imgPath} -> ${newPath}`);
            await sharp(imgPath).webp({ quality: 80 }).toFile(newPath);
            fs.unlinkSync(imgPath); // Delete old image
            
            // We'll store just the basenames or relative paths if we want exact matching, 
            // but for safety in code replacement, we can just replace the specific filename strings.
            // Actually, replacing global extensions in the source might be easier, but let's 
            // map exact filenames to avoid accidental replacements.
            const oldName = path.basename(imgPath);
            const newName = path.basename(newPath);
            conversionMap.push({ oldName, newName });
        } catch (error) {
            console.error(`Error processing ${imgPath}:`, error);
        }
    }

    console.log(`\nUpdating source files...`);
    // Update all text files
    for (const txtPath of textFiles) {
        let content = fs.readFileSync(txtPath, 'utf8');
        let modified = false;

        for (const { oldName, newName } of conversionMap) {
            // A simple string replace all for the filename. 
            // We use split/join as a simple "replace all" for strings.
            if (content.includes(oldName)) {
                content = content.split(oldName).join(newName);
                modified = true;
            }
        }
        
        // Also manually catch things like .png, .jpg in case they were referenced without full basename (unlikely but possible),
        // Wait, replacing oldName with newName (e.g. "image.png" -> "image.webp") is the safest.

        if (modified) {
            fs.writeFileSync(txtPath, content, 'utf8');
            console.log(`Updated references in ${txtPath}`);
        }
    }

    console.log('Done!');
}

processImages();
