const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/, filter: 'blur\(10px\)'/g, '');
content = content.replace(/, filter: 'blur\(0px\)'/g, '');
fs.writeFileSync('src/App.tsx', content);
