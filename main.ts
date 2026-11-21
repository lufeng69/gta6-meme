// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post named in POST.json: a GTA 6 launch-week
// meme, posted from a public account with make.fun linked and the
// entrant's play code in its text. The house reads the post from X, so
// this program only has to hand the gate what it needs: it checks that
// POST.json really names an x.com post, then copies POST.json and the
// meme picture into the output directory.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const postPath = join(BOT_DIR, 'POST.json');
const memePath = join(BOT_DIR, 'meme.png');

if (!existsSync(postPath)) {
  fail(`POST.json not found in ${BOT_DIR}`);
}
if (!existsSync(memePath)) {
  fail(`meme.png not found in ${BOT_DIR}`);
}

let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !url.startsWith('https://x.com/')) {
  fail(`POST.json must name an x.com post URL, got: ${JSON.stringify(url)}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
  copyFileSync(memePath, join(OUTPUT_DIR, 'meme.png'));
  writeFileSync(
    join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify({ post_url: url, files: ['POST.json', 'meme.png'] }, null, 2) + '\n',
    'utf8',
  );
} catch (err) {
  fail(`could not write entry files to ${OUTPUT_DIR}: ${(err as Error).message}`);
}

console.log(`entry ready: ${url}`);
