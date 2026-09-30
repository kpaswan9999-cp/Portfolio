import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\kpasw\\.gemini\\antigravity-ide\\brain\\5178a1b4-20ca-4f8b-96e1-752db0e71bb6\\.user_uploaded';
const destDir = 'd:\\Portfolio\\public\\certificates';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  { src: 'media_1790770175372.png', dest: 'ai-for-bharat-certificate.png' },
  { src: 'media_1790770184782.png', dest: 'imarticus-data-science-certificate.png' },
  { src: 'media_1790770196179.pdf', dest: 'far-away-hackathon-certificate.pdf' },
  { src: 'media_1790770203180.jpg', dest: 'nebulon-hackathon-certificate.jpg' }
];

for (const f of filesToCopy) {
  const srcPath = path.join(srcDir, f.src);
  const destPath = path.join(destDir, f.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.src} -> ${f.dest}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
}
