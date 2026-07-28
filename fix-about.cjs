const fs = require('fs');
let content = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');
content = content.replace(/FACULTY_MEMBERS_MEMBERS/g, 'FACULTY_MEMBERS');
content = content.replace(/FACULTY\.map/g, 'FACULTY_MEMBERS.map');
fs.writeFileSync('src/pages/AboutPage.tsx', content);
