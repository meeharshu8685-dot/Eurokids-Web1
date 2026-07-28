const fs = require('fs');

const fix = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/Explore Activities/g, 'Explore Life at School');
  content = content.replace(/Tour our campus/g, 'Explore Life at School');
  content = content.replace(/View all programs/g, 'View Our Programs');
  content = content.replace(/Programs for every stage\./g, 'Our Programs for every stage.');
  fs.writeFileSync(filePath, content);
};

fix('src/pages/HomePage.tsx');
