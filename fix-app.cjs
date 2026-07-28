const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import React, { useState } from 'react';",
  "import React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';"
);

content = content.replace(
  /<main className="flex-1">([\s\S]*?)<\/main>/m,
  `<main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            {activeView === 'home' && (
              <HomePage
                setActiveView={setActiveView}
                onOpenBookVisit={handleOpenBookVisit}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {activeView === 'about' && (
              <AboutPage
                onOpenBookVisit={handleOpenBookVisit}
                setActiveView={setActiveView}
              />
            )}
            {activeView === 'programs' && (
              <ProgramsPage
                onOpenBookVisit={handleOpenBookVisit}
              />
            )}
            {activeView === 'admissions' && (
              <AdmissionsPage
                onOpenBookVisit={handleOpenBookVisit}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {activeView === 'campus' && (
              <CampusPage
                onOpenBookVisit={handleOpenBookVisit}
              />
            )}
            {activeView === 'gallery' && (
              <GalleryPage />
            )}
            {activeView === 'contact' && (
              <ContactPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>`
);

fs.writeFileSync('src/App.tsx', content);
