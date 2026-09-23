// Generates llms.txt (curated index) and llms-full.txt (whole-site text dump).
//
// Runs as `postbuild`, not `prebuild`, because it reads the built HTML in dist/
// rather than the source. That is deliberate: most of this site's page copy
// lives inside .astro markup (the six hand-authored town pages, the five
// original service pages) rather than in markdown, so parsing dist/ is the only
// way to capture every page without maintaining a second copy of the content.
//
// Output goes to dist/ (what actually deploys) and to public/ (so the files are
// committed and visible in dev). The page list comes from walking dist/, so a
// new page is picked up with no edit here.

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PUBLIC = join(ROOT, 'public');
const SITE = 'https://brazosridgefence.com';

const PHONE = grabConfig(/phoneDisplay:\s*'([^']+)'/);
const EMAIL = grabConfig(/email:\s*'([^']+)'/);

function grabConfig(re) {
  const src = readFileSync(join(ROOT, 'src/config/site.ts'), 'utf8');
  const m = src.match(re);
  return m ? m[1] : '';
}

/** Slugs, in nav order, pulled from the two arrays in config/site.ts. */
function slugsFrom(exportName) {
  const src = readFileSync(join(ROOT, 'src/config/site.ts'), 'utf8');
  const block = src.split(`export const ${exportName} = [`)[1].split('] as const;')[0];
  return [...block.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

const serviceSlugs = slugsFrom('services');
const areaSlugs = slugsFrom('serviceAreas');

// ---------------------------------------------------------------------------
// HTML -> text
// ---------------------------------------------------------------------------

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'",
  '&nbsp;': ' ', '&mdash;': '—', '&ndash;': '–', '&rarr;': '->', '&#8594;': '->',
  '&hellip;': '...', '&times;': 'x',
};

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]+;|&#39;/gi, (e) => (e in ENTITIES ? ENTITIES[e] : e));
}

function textOf(html) {
  return decode(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

/**
 * The page body, as markdown-ish plain text.
 *
 * Layout.astro brackets the page slot with <!-- PAGE CONTENT --> and
 * <!-- FOOTER -->, so slicing between them drops the nav, the footer, and the
 * sticky call bar without having to guess at selectors.
 */
function bodyText(html) {
  let s = html;
  const start = s.indexOf('<!-- PAGE CONTENT -->');
  const end = s.indexOf('<!-- FOOTER -->');
  if (start !== -1 && end !== -1 && end > start) s = s.slice(start, end);

  s = s
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<form[\s\S]*?<\/form>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  // Headings and list items become markdown before the tags are stripped.
  s = s
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, i) => `\n\n# ${textOf(i)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, i) => `\n\n## ${textOf(i)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, i) => `\n\n### ${textOf(i)}\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, i) => `\n\n#### ${textOf(i)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, i) => `\n- ${textOf(i)}`)
    .replace(/<\/(p|div|section|tr|ul|ol|blockquote)>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n');

  return decode(s.replace(/<[^>]+>/g, ' '))
    .replace(/[ \t ]+/g, ' ')
    // Inline tags (<strong>, <a>) leave a space before the punctuation that
    // followed them; close it up so the dump reads as prose.
    .replace(/ +([,.;:!?)])/g, '$1')
    .replace(/\( +/g, '(')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ---------------------------------------------------------------------------
// Page inventory, read from the built output
// ---------------------------------------------------------------------------

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name === 'index.html') out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('dist/ not found -- run `astro build` first.');
  process.exit(1);
}

const pages = walk(DIST).map((file) => {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(DIST.length).replace(/\\/g, '/').replace(/index\.html$/, '');
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1];
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1];
  return {
    path: rel,
    url: SITE + rel,
    title: decode(title).replace(/\s*\|\s*Brazos Ridge.*$/i, '').trim(),
    fullTitle: decode(title).trim(),
    description: decode(desc).trim(),
    heading: textOf(h1),
    body: bodyText(html),
  };
});

const byPath = new Map(pages.map((p) => [p.path, p]));
const pick = (slug) => byPath.get(`/${slug}/`);

const blog = pages
  .filter((p) => p.path.startsWith('/blog/') && p.path !== '/blog/')
  .sort((a, b) => a.title.localeCompare(b.title));

const home = byPath.get('/');
const servicesHub = byPath.get('/services/');
const areasHub = byPath.get('/service-areas/');
const costGuide = byPath.get('/ranch-fence-cost/');
const about = byPath.get('/about/');

const servicePages = serviceSlugs.map(pick).filter(Boolean);
const areaPages = areaSlugs.map(pick).filter(Boolean);

const INTRO =
  `Brazos Ridge Fence Co. builds farm and ranch fence across McLennan, Bosque, and Falls counties in Central Texas, ` +
  `working out of Waco. Game and high fence, pipe fence, net wire and field fence, horse fencing, goat and sheep fencing, ` +
  `corrals and working pens, ranch entrances and gates, barbed wire, fence line clearing, and 24-hour fence repair. ` +
  `Phone: ${PHONE}. Email: ${EMAIL}.`;

// ---------------------------------------------------------------------------
// llms.txt -- the curated index
// ---------------------------------------------------------------------------

// First matching rule wins, so the specific patterns come first. Every post
// lands in exactly one section, with a catch-all at the end, and the script
// fails the build if any post goes unlisted.
const SECTIONS = [
  ['Costs and Pricing', /cost|price|quote|budget|exemption|liability|diy-/],
  ['Fence Problems and Repairs', /sagging|leaning|rot|rusted|getting-out|not-working|damage|drought|repair|fix-|clog|storm|hog/],
  ['Choosing a Fence Type', /vs-|-vs|best-fence|panels|strands|electric|which|compare/],
  ['Posts, Wire, and Materials', /post|wire|gauge|galvaniz|brace|cedar|pine|t-post/],
  ['Livestock and Land Management', /cattle|goat|sheep|horse|open-range|hog|acreage|clearing/],
  ['Rules, Neighbors, and Property Lines', /property-line|neighbor|texas|law|permit|who-pays/],
];
const CATCH_ALL = 'More Fencing Guides';

function sectionFor(post) {
  const key = post.path.replace('/blog/', '').replace(/\/$/, '').toLowerCase();
  for (const [name, pattern] of SECTIONS) if (pattern.test(key)) return name;
  return CATCH_ALL;
}

const grouped = new Map([...SECTIONS.map(([n]) => [n, []]), [CATCH_ALL, []]]);
for (const p of blog) grouped.get(sectionFor(p)).push(p);

const idx = [];
idx.push('# Brazos Ridge Fence Co.');
idx.push('');
idx.push(`> ${INTRO}`);
idx.push('');
idx.push('## Services');
idx.push('');
if (servicesHub) idx.push(`- [All Services](${servicesHub.url}): ${servicesHub.description}`);
for (const s of servicePages) idx.push(`- [${s.heading || s.title}](${s.url}): ${s.description}`);
idx.push('');
idx.push('## Service Area');
idx.push('');
idx.push(
  'Brazos Ridge Fence Co. builds within about an hour of Waco, Texas, covering McLennan, Bosque, and Falls counties. ' +
    'Each town below has a dedicated local page covering ground conditions and pricing there.'
);
idx.push('');
if (areasHub) idx.push(`- [All Service Areas](${areasHub.url}): ${areasHub.description}`);
for (const a of areaPages) idx.push(`- [${a.heading || a.title}](${a.url}): ${a.description}`);
idx.push('');
idx.push('## Pricing Reference');
idx.push('');
if (costGuide) idx.push(`- [${costGuide.heading || costGuide.title}](${costGuide.url}): ${costGuide.description}`);
idx.push('- Barbed wire fence: $2.50 to $5.50 per linear foot installed.');
idx.push('- Net wire and field fence: $3.50 to $8 per linear foot installed.');
idx.push('- Game and high fence (8 ft): $4.50 to $10 per linear foot installed.');
idx.push('- Welded drill-stem pipe fence: $12 to $28 per linear foot installed.');
idx.push('- Horse fencing: $6 to $28 per linear foot depending on build.');
idx.push('- Corrals and working pens: $6,000 to $30,000 for a complete facility.');
idx.push('- Fence line clearing: $1,200 to $6,000 per mile, quoted separately from the fence.');
idx.push('');

for (const [name, list] of grouped) {
  if (!list.length) continue;
  idx.push(`## Blog: ${name}`);
  idx.push('');
  for (const p of list) idx.push(`- [${p.title}](${p.url})`);
  idx.push('');
}

idx.push('## Optional');
idx.push('');
idx.push(`- [Full Site Content (llms-full.txt)](${SITE}/llms-full.txt): Single-file dump of every page for AI assistants that need full content without crawling.`);
if (about) idx.push(`- [About Brazos Ridge Fence Co.](${about.url})`);
idx.push(`- [Full Blog Index](${SITE}/blog/)`);
idx.push(`- [Contact](${SITE}/contact/)`);
idx.push(`- [XML Sitemap](${SITE}/sitemap-index.xml)`);
idx.push(`- [Privacy Policy](${SITE}/privacy/)`);
idx.push(`- [Terms of Service](${SITE}/terms/)`);
idx.push('');

// ---------------------------------------------------------------------------
// llms-full.txt -- every page, in full
// ---------------------------------------------------------------------------

const out = [];
out.push('# Brazos Ridge Fence Co. -- Full Content');
out.push('');
out.push(`> Full text of every page on ${SITE}, intended for AI assistants. ${INTRO}`);
out.push('');
out.push('## Contact and Service Info');
out.push('');
out.push('- Business name: Brazos Ridge Fence Co.');
out.push(`- Phone: ${PHONE}`);
out.push(`- Email: ${EMAIL}`);
out.push(`- Website: ${SITE}`);
out.push('- Based in: Waco, Texas');
out.push('- Service area: McLennan, Bosque, and Falls counties, Texas -- roughly an hour around Waco');
out.push('- Hours: Mon-Sat 7am-6pm, with a 24/7 emergency line for storm damage and cattle-out calls');
out.push('- Estimates: free and in writing, priced per linear foot, after walking the fence line');
out.push('');
out.push('---');
out.push('');

function dump(label, page) {
  if (!page) return;
  out.push(`## ${page.heading || page.title} (${page.url})`);
  if (page.description) {
    out.push('');
    out.push(`> ${page.description}`);
  }
  out.push('');
  out.push(page.body);
  out.push('');
  out.push('---');
  out.push('');
}

out.push('# Home');
out.push('');
dump('Home', home);

out.push('# Service Pages');
out.push('');
dump('Services hub', servicesHub);
for (const s of servicePages) dump(s.path, s);
dump('Cost guide', costGuide);

out.push('# Service Area Pages');
out.push('');
dump('Service areas hub', areasHub);
for (const a of areaPages) dump(a.path, a);

out.push('# About');
out.push('');
dump('About', about);

out.push('# Blog Posts');
out.push('');
for (const p of blog) dump(p.path, p);

// ---------------------------------------------------------------------------

const index = idx.join('\n');
const full = out.join('\n');

for (const dir of [DIST, PUBLIC]) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'llms.txt'), index, 'utf8');
  writeFileSync(join(dir, 'llms-full.txt'), full, 'utf8');
}

const listed = [...grouped.values()].reduce((n, l) => n + l.length, 0);
console.log('Wrote llms.txt and llms-full.txt to dist/ and public/');
console.log(`  ${servicePages.length} service pages, ${areaPages.length} area pages, ${blog.length} blog posts`);
console.log(`  llms.txt ${(Buffer.byteLength(index, 'utf8') / 1024).toFixed(1)} KB, llms-full.txt ${(Buffer.byteLength(full, 'utf8') / 1024).toFixed(1)} KB`);

if (servicePages.length !== serviceSlugs.length) {
  console.error(`  !! ${serviceSlugs.length - servicePages.length} service page(s) in config have no built page`);
  process.exit(1);
}
if (areaPages.length !== areaSlugs.length) {
  console.error(`  !! ${areaSlugs.length - areaPages.length} area page(s) in config have no built page`);
  process.exit(1);
}
if (listed !== blog.length) {
  console.error(`  !! ${blog.length - listed} blog post(s) missing from llms.txt`);
  process.exit(1);
}
