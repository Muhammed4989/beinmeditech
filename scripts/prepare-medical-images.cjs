// Mechanical asset preparation only: preserve originals, resize and encode WebP.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const manifestPath = path.resolve(root, process.argv[3] || 'assets/medical-photography/prompts.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Pass the directory containing the generated PNG files.');
const sharp = require(require.resolve('sharp', { paths: [process.env.SHARP_MODULE_ROOT || root] }));

async function prepare() {
  for (const asset of manifest.assets) {
    const source = path.join(sourceDirectory, asset.source);
    const output = path.join(root, asset.output);
    const original = path.join(root, manifest.originalDirectory || 'output/medical-photography/originals', asset.name + '.png');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.mkdirSync(path.dirname(original), { recursive: true });
    fs.copyFileSync(source, original);
    await sharp(source).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output);
    const { width, height, format } = await sharp(output).metadata();
    if (width !== 1200 || height !== 800 || format !== 'webp') throw new Error('Unexpected asset dimensions: ' + asset.output);
    const bytes = fs.statSync(output).size;
    if (bytes > 180000) throw new Error('Asset exceeds its performance budget: ' + asset.output);
    console.log(JSON.stringify({ file: asset.output, width, height, bytes }));
  }
}
prepare().catch((error) => { console.error(error); process.exitCode = 1; });
