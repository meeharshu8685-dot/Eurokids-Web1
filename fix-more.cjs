const fs = require('fs');

const fix = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/className="text-white\/80 font-sans font-light text-lg mb-12"/g, 'className="text-white/90 font-sans font-light text-lg mb-12"');
  fs.writeFileSync(filePath, content);
};

fix('src/pages/CampusPage.tsx');
