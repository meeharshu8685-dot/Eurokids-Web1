const fs = require('fs');

const enhancePage = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add hover effects to cards
  content = content.replace(/className="bg-white rounded-\[30px\] p-8 lg:p-12 border border-\[#ECE6DE\]"/g, 'whileHover={{ y: -10 }}\n                className="bg-white rounded-[30px] p-8 lg:p-12 border border-[#ECE6DE] hover:shadow-xl transition-all"');
  
  // Add hover effects to images
  content = content.replace(/className="w-full h-full object-cover"/g, 'className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"');
  
  fs.writeFileSync(filePath, content);
};

enhancePage('src/pages/ProgramsPage.tsx');
enhancePage('src/pages/AboutPage.tsx');
