const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'tempapidata.json');
const publicNftPath = path.join(__dirname, '..', 'public', 'nft');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const priorities = { 'png': 1, 'gif': 2, 'webp': 3 };

function getExtension(files, id) {
  const matching = files.filter(f => f.startsWith(`${id}.`));
  if (matching.length === 0) return 'png';
  const exts = matching.map(f => path.extname(f).slice(1));
  const sorted = exts.sort((a, b) => (priorities[a] || 4) - (priorities[b] || 4));
  return sorted[0];
}

let updated = 0;
let notFound = [];

for (const collection of ['collectibles', 'wearables']) {
  const folder = path.join(publicNftPath, collection);
  const files = fs.readdirSync(folder);
  for (const item of data[collection]) {
    const ext = getExtension(files, item.id);
    if (!item.image_extension || item.image_extension !== ext) {
      item.image_extension = ext;
      updated++;
    }
    if (ext === 'png' && !files.some(f => f.startsWith(`${item.id}.`))) {
      notFound.push(`${collection}:${item.id}`);
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Updated ${updated} items.`);
if (notFound.length > 0) {
  console.log(`Items not found: ${notFound.join(', ')}`);
}