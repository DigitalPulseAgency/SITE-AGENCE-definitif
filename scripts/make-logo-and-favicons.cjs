/**
 * Convertit /public/logo.png (fond noir opaque) en version transparente
 * et génère les favicons aux tailles standards.
 *
 * Usage : node scripts/make-logo-and-favicons.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.resolve(__dirname, '..', 'public');

/**
 * Retire le fond noir d'un PNG : tout pixel proche du noir devient transparent.
 * Bande de transition douce pour éviter les bords crénelés.
 */
async function blackToTransparent(inputPath, outputPath, { t1 = 10, t2 = 70 } = {}) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ch = info.channels; // 4

  for (let i = 0; i < data.length; i += ch) {
    const m = Math.max(data[i], data[i + 1], data[i + 2]);
    if (m <= t1) {
      data[i + 3] = 0;
    } else if (m < t2) {
      data[i + 3] = Math.round(((m - t1) / (t2 - t1)) * 255);
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

(async () => {
  // 1) Logo full transparent
  const fullLogo = path.join(PUBLIC, 'logo.png');
  const fullTransparent = path.join(PUBLIC, 'logo-transparent.png');
  await blackToTransparent(fullLogo, fullTransparent);
  console.log('✓ logo-transparent.png');

  // 2) Crop icône (diamant + cerveau, sans le texte) depuis logo.png
  //    Image source : 1536 x 1024. L'icône est centrée horizontalement,
  //    et occupe environ y=20 -> y=720 (le bas est le texte).
  const meta = await sharp(fullLogo).metadata();
  const cropSize = Math.min(720, meta.height);
  const cropX = Math.round((meta.width - cropSize) / 2);
  const cropY = 20;

  const iconRaw = path.join(PUBLIC, '_icon-raw.png');
  const iconTransparent = path.join(PUBLIC, '_icon-transparent.png');

  await sharp(fullLogo)
    .extract({ left: cropX, top: cropY, width: cropSize, height: cropSize })
    .toFile(iconRaw);

  await blackToTransparent(iconRaw, iconTransparent, { t1: 12, t2: 80 });
  console.log('✓ icône extraite + transparente');

  // 3) Génère les favicons à partir de l'icône transparente
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    await sharp(iconTransparent)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toFile(path.join(PUBLIC, name));
    console.log(`✓ ${name} (${size}x${size})`);
  }

  // Cleanup tmp
  fs.unlinkSync(iconRaw);
  fs.unlinkSync(iconTransparent);

  console.log('\nDone.');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
