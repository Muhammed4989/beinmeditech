const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const manifest = require('../assets/site-refresh/prompts.json');
const sharp = require(require.resolve('sharp', { paths: [process.env.SHARP_MODULE_ROOT || root] }));
async function prepare() {
  for (const asset of [...manifest.assets, { ...manifest.logo, name: 'bein-meditech-logo' }]) {
    const source = path.join(process.argv[2], asset.source);
    const output = path.join(root, asset.output);
    const original = path.join(root, manifest.originalDirectory, asset.name + '.png');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.mkdirSync(path.dirname(original), { recursive: true });
    fs.copyFileSync(source, original);
    if (asset === manifest.logo || asset.name === 'bein-meditech-logo') {
      await sharp(source).resize({ width: 480, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(output);
      if (!(await sharp(output).metadata()).hasAlpha) throw new Error('Logo must retain transparency');
    } else {
      await sharp(source).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toFile(output);
    }
    const metadata = await sharp(output).metadata();
    const bytes = fs.statSync(output).size;
    if (bytes > 200000) throw new Error('Image exceeds performance budget: ' + asset.output);
    console.log(JSON.stringify({ file: asset.output, width: metadata.width, height: metadata.height, bytes }));
  }
}
prepare().catch((error) => { console.error(error); process.exitCode = 1; });
