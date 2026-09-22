import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
console.log('Found files:', files.length);
