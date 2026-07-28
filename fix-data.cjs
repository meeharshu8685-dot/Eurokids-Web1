const fs = require('fs');

let content = fs.readFileSync('src/data/schoolData.ts', 'utf8');

content = content.replace("Where Curious Minds Bloom with Distinction", "A happy place where little minds grow.");
content = content.replace("Nurturing Sensory Discovery & Social Bonding", "A gentle introduction to learning.");
content = content.replace("Building Neural Architecture through Active Play", "Developing curiosity and confidence.");
content = content.replace("Fostering Early Literacy & Reggio-Inspired Wonder", "Learning through exploration and play.");
content = content.replace("Preparing for Global Education with Emotional Intelligence", "Getting ready for big school.");

fs.writeFileSync('src/data/schoolData.ts', content);
