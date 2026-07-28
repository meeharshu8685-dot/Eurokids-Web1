const fs = require('fs');
let gallery = fs.readFileSync('src/pages/GalleryPage.tsx', 'utf8');
gallery = gallery.replace(/img\.url/g, 'img.image');
fs.writeFileSync('src/pages/GalleryPage.tsx', gallery);
