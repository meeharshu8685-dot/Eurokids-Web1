const fs = require('fs');

const fixColors = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/#FAF8F5/g, '#FFFDF8'); // using base
  content = content.replace(/#183153/g, '#1F3A5F'); // primary
  content = content.replace(/#D4A017/g, '#F4B400'); // accent
  content = content.replace(/#2B2B2B/g, '#252525'); // text
  content = content.replace(/#4A4A4A/g, '#6E6E6E'); // muted text
  content = content.replace(/#FCFAF7/g, '#FFFDF8'); 
  content = content.replace(/#E8E4DB/g, '#ECE6DE'); // border
  content = content.replace(/#F4F0EA/g, '#F7F4EE'); // secondary
  content = content.replace(/#A7B89B/g, '#8CBF8F'); // sage/accent2
  content = content.replace(/#264653/g, '#1F3A5F'); // primary
  fs.writeFileSync(filePath, content);
};

fixColors('src/components/BookVisitModal.tsx');
fixColors('src/components/EnquiryDrawer.tsx');
