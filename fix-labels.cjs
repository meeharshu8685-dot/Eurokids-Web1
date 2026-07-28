const fs = require('fs');

const updateLabels = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Header Nav Items
  content = content.replace(
    /\{ id: 'about', label: 'About' \}/g,
    "{ id: 'about', label: 'About Us' }"
  );
  content = content.replace(
    /\{ id: 'programs', label: 'Programs' \}/g,
    "{ id: 'programs', label: 'Our Programs' }"
  );
  content = content.replace(
    /\{ id: 'campus', label: 'Campus' \}/g,
    "{ id: 'campus', label: 'Life at School' }"
  );
  content = content.replace(
    /\{ id: 'contact', label: 'Contact' \}/g,
    "{ id: 'contact', label: 'Contact Us' }"
  );
  
  fs.writeFileSync(filePath, content);
};

updateLabels('src/components/Header.tsx');
