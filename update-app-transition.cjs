const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
  /initial=\{\{ opacity: 0, y: 20 \}\}/g,
  "initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}"
);
content = content.replace(
  /animate=\{\{ opacity: 1, y: 0 \}\}/g,
  "animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}"
);
content = content.replace(
  /exit=\{\{ opacity: 0, y: -20 \}\}/g,
  "exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}"
);
content = content.replace(
  /transition=\{\{ duration: 0\.6, ease: \[0\.22, 1, 0\.36, 1\] \}\}/g,
  "transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}"
);
fs.writeFileSync('src/App.tsx', content);
