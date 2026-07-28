const fs = require('fs');
let content = fs.readFileSync('src/pages/ProgramsPage.tsx', 'utf8');
content = content.replace(/prog\.features/g, 'prog.keyOutcomes');
fs.writeFileSync('src/pages/ProgramsPage.tsx', content);
