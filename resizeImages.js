const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets/images/');
const outputDir = path.join(__dirname, 'src/assets/images/thumbnails/');

const resizeImage = (folder, image) => {
  sharp(path.join(inputDir, folder, image))
    .resize(400) // Resize to width 200px (small thumbnail)
    .toFile(path.join(outputDir, folder, image), (err) => {
      if (err) {
        console.error(`Error resizing ${image}: `, err);
      } else {
        console.log(`${image} resized successfully`);
      }
    });
};

const folders = ['painting', 'graphic'];
folders.forEach(folder => {
  const images = fs.readdirSync(path.join(inputDir, folder));
  images.forEach(image => resizeImage(folder, image));
});