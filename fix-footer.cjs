const fs = require('fs');

const updateLabels = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    />Our Story<\/button>/g,
    ">About Us</button>"
  );
  content = content.replace(
    />Programs<\/button>/g,
    ">Our Programs</button>"
  );
  content = content.replace(
    />Campus<\/button>/g,
    ">Life at School</button>"
  );
  
  fs.writeFileSync(filePath, content);
};

updateLabels('src/components/Footer.tsx');
