import fs from 'fs';

const filesToUpdate = [
  'src/app/hooks/useTheme.ts',
  'src/app/App.tsx',
  'src/app/components/RoomModal.tsx',
  'src/app/components/RoomCard.tsx',
  'src/app/components/FigmaRoomCard.tsx',
  'src/app/views/HomePage.tsx',
  'src/app/views/RutaFloresPage.tsx'
];

for (const file of filesToUpdate) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf-8');

  if (file === 'src/app/hooks/useTheme.ts') {
    content = content.replace(/return \{([\s\S]*?)isDark,([\s\S]*?)t: isDark \? DARK : LIGHT,([\s\S]*?)toggleTheme([\s\S]*?)\};/, 'return {$1isDark,$2theme: isDark ? DARK : LIGHT,$3toggleTheme$4};');
  }

  // Replace prop definitions and usage
  // e.g. function RoomModal({ room, t, onClose }: { room: Room; t: Theme; onClose: () => void })
  content = content.replace(/t: Theme/g, 'theme: Theme');
  content = content.replace(/\{([\s\S]*?) t, ([\s\S]*?)\}/g, '{$1 theme, $2}');
  content = content.replace(/\{([\s\S]*?) t ([\s\S]*?)\}/g, '{$1 theme $2}');
  content = content.replace(/t=\{t\}/g, 'theme={theme}');
  
  // Replace t.someProperty with theme.someProperty
  content = content.replace(/\bt\./g, 'theme.');
  
  // Fix App.tsx destructuring
  content = content.replace(/const \{\s*isDark,\s*t,\s*toggleTheme\s*\} = useTheme\(\);/g, 'const { isDark, theme, toggleTheme } = useTheme();');

  fs.writeFileSync(file, content);
}

console.log('Renamed t to theme for useTheme!');
