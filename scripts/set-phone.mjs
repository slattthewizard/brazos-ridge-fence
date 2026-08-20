#!/usr/bin/env node
/**
 * Swap the business phone number everywhere in one command.
 *
 *   node scripts/set-phone.mjs "(254) 555-0142"
 *
 * The layout, schema, and all pages added after the Aug 2026 SEO pass read the
 * number from src/config/site.ts. The original hand-authored service and
 * location pages, plus blog prose, still carry it as literal text -- this
 * script updates those too, and rewrites the config so the two stay in sync.
 *
 * Pass --dry to preview without writing.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const arg = process.argv.slice(2).filter((a) => a !== '--dry');
const dry = process.argv.includes('--dry');

if (arg.length !== 1) {
  console.error('Usage: node scripts/set-phone.mjs "(254) 555-0142" [--dry]');
  process.exit(1);
}

const display = arg[0].trim();
const digits = display.replace(/\D/g, '');
if (digits.length !== 10) {
  console.error(`Expected 10 digits, got ${digits.length} from "${display}"`);
  process.exit(1);
}
const href = `tel:+1${digits}`;
const e164 = `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;

// Current values, read from the config so this script never needs editing.
const cfgPath = 'src/config/site.ts';
const cfg = readFileSync(cfgPath, 'utf8');
const oldDisplay = cfg.match(/phoneDisplay:\s*'([^']+)'/)[1];
const oldHref = cfg.match(/phoneHref:\s*'([^']+)'/)[1];
const oldE164 = cfg.match(/phoneE164:\s*'([^']+)'/)[1];

if (oldDisplay === display) {
  console.log(`Already set to ${display}. Nothing to do.`);
  process.exit(0);
}

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (['.astro', '.md', '.ts', '.json'].includes(extname(p))) out.push(p);
  }
  return out;
};

const files = [...walk('src'), 'public/robots.txt'].filter((f) => {
  try { statSync(f); return true; } catch { return false; }
});

let touched = 0;
let hits = 0;
for (const f of files) {
  const before = readFileSync(f, 'utf8');
  let after = before
    .split(oldDisplay).join(display)
    .split(oldHref).join(href)
    .split(oldE164).join(e164);
  // Also catch the bare-digit tel: form if it appears without the config value.
  after = after.split(`tel:+1${oldHref.replace(/\D/g, '')}`).join(href);
  if (after !== before) {
    const n = before.split(oldDisplay).length - 1;
    hits += n;
    touched++;
    if (!dry) writeFileSync(f, after);
    console.log(`  ${dry ? '[dry] ' : ''}${f}  (${n} display mentions)`);
  }
}

console.log(
  `\n${dry ? 'Would update' : 'Updated'} ${touched} files, ${hits} visible mentions.` +
  `\n  ${oldDisplay} -> ${display}` +
  `\n  ${oldHref} -> ${href}`
);
if (!dry) console.log('\nNext: npm run build, then commit.');
