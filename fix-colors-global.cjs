const fs = require('fs');
const path = require('path');

const colorMap = {
  '#1F3A5F': '#4338CA', // Indigo
  '#8CBF8F': '#0EA5E9', // Sky Blue
  '#F4B400': '#F59E0B', // Amber
  '#F29979': '#EC4899', // Pink
  '#FFFDF8': '#FFFFFF', // White
  '#F7F4EE': '#F8FAFC', // Slate 50
  '#ECE6DE': '#E2E8F0', // Slate 200
  '#252525': '#0F172A', // Slate 900
  '#6E6E6E': '#475569', // Slate 600
  '#E8F0EA': '#EEF2FF', // Indigo 50
  '#1a3039': '#3730A3', // Darker Indigo for hover
  '#FCFAF7': '#FFFFFF', // App.tsx background
  '#F4F0EA': '#F8FAFC'  // Selection background
};

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.css')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    // Case insensitive global replace for hex colors
    const regex = new RegExp(oldColor, 'gi');
    content = content.replace(regex, newColor);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
  }
});
