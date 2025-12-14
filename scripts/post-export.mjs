import { copyFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const outDir = path.resolve('out');

async function ensureNoJekyll() {
  await writeFile(path.join(outDir, '.nojekyll'), '', { flag: 'w' });
}

async function copyCname() {
  const cnameSource = path.resolve('public', 'CNAME');
  if (existsSync(cnameSource)) {
    await copyFile(cnameSource, path.join(outDir, 'CNAME'));
  }
}

await ensureNoJekyll();
await copyCname();
