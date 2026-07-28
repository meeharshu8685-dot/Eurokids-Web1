const fs = require('fs');

// Fix AboutPage
let about = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');
about = about.replace('FACULTY', 'FACULTY_MEMBERS');
about = about.replace('FACULTY_MEMBERS.map', 'FACULTY_MEMBERS.map');
fs.writeFileSync('src/pages/AboutPage.tsx', about);

// Fix GalleryPage
let gallery = fs.readFileSync('src/pages/GalleryPage.tsx', 'utf8');
gallery = gallery.replace('import { GALLERY_CATEGORIES, GALLERY_IMAGES } from \'../data/schoolData\';', 
    'import { GALLERY_ITEMS } from \'../data/schoolData\';');
gallery = gallery.replace('const filteredImages = activeCategory === \'All\' \n    ? GALLERY_IMAGES \n    : GALLERY_IMAGES.filter(img => img.category === activeCategory);',
    'const GALLERY_CATEGORIES = Array.from(new Set(GALLERY_ITEMS.map(i => i.category)));\n  const filteredImages = activeCategory === \'All\' \n    ? GALLERY_ITEMS \n    : GALLERY_ITEMS.filter(img => img.category === activeCategory);');
fs.writeFileSync('src/pages/GalleryPage.tsx', gallery);

