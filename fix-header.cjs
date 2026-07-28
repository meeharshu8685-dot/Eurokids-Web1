const fs = require('fs');
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Replace colors
header = header.replace(/#FCFAF7/g, '#FFFDF8');
header = header.replace(/#F4F0EA/g, '#F7F4EE');
header = header.replace(/#264653/g, '#1F3A5F');
header = header.replace(/#2B2B2B/g, '#252525');
header = header.replace(/#ECE8E1/g, '#ECE6DE');
header = header.replace(/#6B6B6B/g, '#6E6E6E');

fs.writeFileSync('src/components/Header.tsx', header);

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/#2B2B2B/g, '#252525');
fs.writeFileSync('src/components/Footer.tsx', footer);

