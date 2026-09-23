/**
 * Single source of truth for business identity (NAP), hours, and profiles.
 *
 * Everything that appears in visible copy, tel: links, and JSON-LD reads from
 * here, so changing the phone number or adding an address is a one-line edit
 * instead of a find-and-replace across 50+ pages.
 */

export const site = {
  name: 'Brazos Ridge Fence Co.',
  url: 'https://brazosridgefence.com',
  legalName: 'Brazos Ridge Fence Co.',
  description:
    'Farm and ranch fencing for Waco and Central Texas. Game fence, pipe fence, barbed wire, and custom ranch entrances built to last.',

  // Own Twilio whisper line since 23 Sept 2026 (brazos-lead-router). Older hand-authored
  // pages and blog prose carry the number as literal text too, so change it everywhere.
  phoneDisplay: '(254) 870-8898',
  phoneHref: 'tel:+12548708898',
  phoneE164: '+1-254-870-8898',

  email: 'info@brazosridgefence.com',

  // TODO(GBP): a real street address + ZIP is required to verify a Google
  // Business Profile, even when it is hidden publicly as a service-area
  // business. Fill these two in and the PostalAddress in schema fills itself.
  streetAddress: '',
  postalCode: '',
  addressLocality: 'Waco',
  addressRegion: 'TX',
  addressCountry: 'US',
  geo: { latitude: 31.5493, longitude: -97.1467 },

  // Shown in the footer and emitted as openingHoursSpecification.
  hoursDisplay: 'Mon–Sat 7am–6pm',
  emergencyDisplay: '24/7 Emergency Line',
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
  ],

  // TODO(E-E-A-T): once a Google Business Profile and directory listings exist,
  // add their URLs here. They are emitted as `sameAs`, which is how Google ties
  // this website to the business entity behind the map pack.
  sameAs: [] as string[],

  // TODO(E-E-A-T): competitors lead with a founding year and a named owner.
  // Fill these in to switch blog authorship from Organization to a real Person
  // and to surface credentials on the about page.
  founder: '',
  foundingYear: '',

  formEndpoint: 'https://formspree.io/f/xjgnpvyj',
  priceRange: '$$',
  ogImage: 'https://brazosridgefence.com/images/og-image.webp',
} as const;

/**
 * Cities we publish a dedicated service-area page for.
 *
 * `county` and `blurb` are read by /service-areas/, which groups the towns by
 * county. Adding a town here puts it in the nav, the footer, the hub, and the
 * Organization areaServed list in one edit.
 */
export const serviceAreas = [
  { name: 'China Spring', slug: 'fence-builder-china-spring', county: 'McLennan County', blurb: 'River-bottom acreage and small horse places along the Bosque, plus pipe frontage fence on the paved roads out of Waco.' },
  { name: 'Crawford', slug: 'fence-builder-crawford', county: 'McLennan County', blurb: 'Working cattle country west of Waco. Barbed wire perimeters, cross fence, and corrals on places running 40 acres and up.' },
  { name: 'McGregor', slug: 'fence-builder-mcgregor', county: 'McLennan County', blurb: 'Blackland pasture and hay ground southwest of Waco, where posts have to be set for clay that swells and cracks.' },
  { name: 'Valley Mills', slug: 'fence-builder-valley-mills', county: 'Bosque County', blurb: 'Where the blackland gives way to Bosque County limestone. Rock drilling, hill ground, and high fence for deer leases.' },
  { name: 'Lorena', slug: 'fence-builder-lorena', county: 'McLennan County', blurb: 'Small acreage and horse property south of Waco along the I-35 corridor. No-climb mesh and pipe are the usual answer here.' },
  { name: 'West', slug: 'fence-builder-west', county: 'McLennan County', blurb: 'Farm country north of Waco. Field fence, cattle-tight perimeters, and repairs on aging wire along the county roads.' },
  { name: 'Hewitt', slug: 'fence-builder-hewitt', county: 'McLennan County', blurb: 'The in-between places south of Waco, two to two hundred acres, where subdivisions run out and pasture starts.' },
  { name: 'Woodway', slug: 'fence-builder-woodway', county: 'McLennan County', blurb: 'Acreage homes and horse traps on the west side, where the fence has to hold stock and still look right from the road.' },
  { name: 'Robinson', slug: 'fence-builder-robinson', county: 'McLennan County', blurb: 'Brazos-bottom ground south of Waco. Water gaps, flood-prone lines, and cross fencing for small cattle operations.' },
  { name: 'Clifton', slug: 'fence-builder-clifton', county: 'Bosque County', blurb: 'Limestone hills, cedar, and goat and sheep country. Clearing is usually half the job before a post ever goes in.' },
  { name: 'Marlin', slug: 'fence-builder-marlin', county: 'Falls County', blurb: 'Falls County blackland and Brazos bottom. Deep clay, water gaps that wash, and long perimeters on row-crop and cattle ground.' },
  { name: 'Meridian', slug: 'fence-builder-meridian', county: 'Bosque County', blurb: 'Bosque County seat and hill country beyond it. High fence for deer management, rock drilling, and hard-to-reach lines.' },
] as const;

/**
 * Service pages, in nav order.
 *
 * `blurb` and `image` are read by /services/ so the hub never drifts from the
 * nav: add a service here and it appears in the dropdown, the footer, the hub
 * grid, and the Organization offer catalog at once.
 */
export const services = [
  {
    name: 'Game & High Fence Installation',
    slug: 'game-fence-installation-waco',
    offerName: 'Game & High Fence Installation',
    image: 'service-1',
    blurb:
      'Eight-foot net-wire high fence for whitetail and exotics, $4.50 to $10 per foot installed. Fixed-knot or hinge-joint, braced to hold a mile of stretched wire.',
  },
  {
    name: 'Cattle & Pipe Fencing',
    slug: 'pipe-fence-waco',
    offerName: 'Pipe Fence',
    image: 'service-2',
    blurb:
      'Welded 2-3/8 inch drill-stem pipe fence, $12 to $28 per foot. The frontage fence that outlasts wood by decades and never needs a staple.',
  },
  {
    name: 'Net Wire & Field Fencing',
    slug: 'net-wire-fence-waco',
    offerName: 'Net Wire & Field Fencing',
    image: 'tile-1',
    blurb:
      'Woven field fence that actually holds what barbed wire lets through, $3.50 to $8 per foot. Fixed-knot and hinge-joint in 32, 39, and 47 inch heights.',
  },
  {
    name: 'Horse Fencing',
    slug: 'horse-fence-waco',
    offerName: 'Horse Fencing',
    image: 'tile-2',
    blurb:
      'No-climb mesh, pipe, and pipe-top-with-mesh built so a spooked horse hits something solid instead of something sharp. $6 to $28 per foot.',
  },
  {
    name: 'Goat & Sheep Fencing',
    slug: 'goat-sheep-fence-waco',
    offerName: 'Goat & Sheep Fencing',
    image: 'tile-3',
    blurb:
      'Fence sized to the animal that finds every hole. Four-inch mesh, tight bottom wire, and offset hot wire for goats, hair sheep, and wool sheep.',
  },
  {
    name: 'Corrals & Working Pens',
    slug: 'corrals-working-pens-waco',
    offerName: 'Corrals & Working Pens',
    image: 'service-3',
    blurb:
      'Pens, alleys, crowding tubs, and chute setups laid out so one person can work cattle alone. $6,000 to $30,000 depending on head count and layout.',
  },
  {
    name: 'Ranch Entrances & Custom Gates',
    slug: 'ranch-entrance-gates-waco',
    offerName: 'Ranch Entrance Gates',
    image: 'service-3',
    blurb:
      'Pipe entrances, overhead spans, cattle guards, and gates sized for a truck and gooseneck. The first thing anyone sees of your place.',
  },
  {
    name: 'Barbed Wire Fencing',
    slug: 'barbed-wire-fence-waco',
    offerName: 'Barbed Wire Fencing',
    image: 'service-4',
    blurb:
      'Five-strand barbed wire on T-posts or pipe, $2.50 to $5.50 per foot. The working perimeter for cattle country and ag-exemption acreage.',
  },
  {
    name: 'Fence Line Clearing',
    slug: 'fence-line-clearing-waco',
    offerName: 'Fence Line & Cedar Clearing',
    image: 'tile-4',
    blurb:
      'Cedar, mesquite, and brush cleared into a workable lane before the fence goes in, $1 to $3 per foot. Also sold on its own.',
  },
  {
    name: 'Fence Repair & Emergency Service',
    slug: 'fence-repair-waco',
    offerName: 'Fence Repair & Emergency Service',
    image: 'tile-4',
    blurb:
      'Storm damage, cattle out, a tree through the line. We answer around the clock and get the gap closed before you lose stock.',
  },
] as const;

/** PostalAddress for JSON-LD. Omits empty fields so the schema stays valid. */
export function postalAddress() {
  const addr: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  };
  if (site.streetAddress) addr.streetAddress = site.streetAddress;
  if (site.postalCode) addr.postalCode = site.postalCode;
  return addr;
}

/**
 * The canonical Organization node. Emitted once sitewide from Layout.astro;
 * every other schema block references it by @id rather than repeating it.
 */
export function organizationSchema() {
  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'LocalBusiness'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: { '@type': 'ImageObject', url: site.ogImage },
    image: site.ogImage,
    priceRange: site.priceRange,
    telephone: site.phoneDisplay,
    email: site.email,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Waco', addressRegion: 'TX' },
      ...serviceAreas.map((a) => ({ '@type': 'City', name: a.name, addressRegion: 'TX' })),
    ],
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ranch Fencing Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.offerName, url: `${site.url}/${s.slug}/` },
      })),
    },
  };
  if (site.sameAs.length) org.sameAs = site.sameAs;
  if (site.foundingYear) org.foundingDate = site.foundingYear;
  if (site.founder) org.founder = { '@type': 'Person', name: site.founder };
  return org;
}

/** Author node for BlogPosting. Becomes a real Person once `founder` is set. */
export function authorSchema() {
  if (site.founder) {
    return {
      '@type': 'Person',
      name: site.founder,
      url: `${site.url}/about/`,
      worksFor: { '@id': `${site.url}/#organization` },
    };
  }
  return { '@type': 'Organization', name: site.name, url: `${site.url}/about/` };
}
