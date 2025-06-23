const https = require('https');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const images = {
  'hero.jpg': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop',
  'about-1.jpg': 'https://images.unsplash.com/photo-1593871075120-982e042088d8?q=80&w=1974&auto=format&fit=crop',
  'about-2.jpg': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1470&auto=format&fit=crop',
  'about-3.jpg': 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop',
  'about-4.jpg': 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1480&auto=format&fit=crop',
  'logo.png': 'https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/24/outline/heart.png',
  'eyes.png': 'https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/24/outline/eye.png'
};

Object.entries(images).forEach(([filename, url]) => {
  const filepath = path.join(publicDir, filename);
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 