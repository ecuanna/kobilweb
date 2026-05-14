import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pagePath = path.join(process.cwd(), 'app', 'page.tsx');
const assetsDir = path.join(process.cwd(), 'public', 'assets');
await mkdir(assetsDir, { recursive: true });

let source = await readFile(pagePath, 'utf8');
const assetBlock = source.match(/const A = \{([\s\S]*?)\n\};/);

if (!assetBlock) {
  console.error('Asset object not found in app/page.tsx');
  process.exit(1);
}

const entries = [...assetBlock[1].matchAll(/\n\s*(\w+): '([^']+)'/g)];
const manifest = {};

function extFrom(contentType, bytes) {
  const type = contentType.toLowerCase();
  if (type.includes('svg') || bytes.slice(0, 200).toString('utf8').includes('<svg')) return 'svg';
  if (type.includes('png') || bytes[0] === 0x89) return 'png';
  if (type.includes('webp') || bytes.slice(0, 4).toString('ascii') === 'RIFF') return 'webp';
  if (type.includes('jpeg') || type.includes('jpg') || (bytes[0] === 0xff && bytes[1] === 0xd8)) return 'jpg';
  return 'svg';
}

for (const [, key, url] of entries) {
  if (!url.startsWith('http')) {
    manifest[key] = url;
    continue;
  }

  console.log(`Downloading ${key}...`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${key} download failed: ${res.status} ${res.statusText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  const bytes = Buffer.from(arrayBuffer);
  const ext = extFrom(res.headers.get('content-type') || '', bytes);
  const filename = `${key}.${ext}`;
  const publicPath = `/assets/${filename}`;

  await writeFile(path.join(assetsDir, filename), bytes);
  source = source.replaceAll(`'${url}'`, `'${publicPath}'`);
  manifest[key] = publicPath;
}

await writeFile(pagePath, source);
await writeFile(path.join(assetsDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Done. app/page.tsx now uses /assets/... paths.');
