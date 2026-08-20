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

  // TODO(NAP): (509) is a Spokane, WA area code on a Waco, TX business. Replacing
  // this with a 254 number is the single highest-impact local SEO fix available.
  //
  // The layout, schema, and every page added in the Aug 2026 SEO pass read these
  // values. Older hand-authored pages and blog prose still carry the number as
  // literal text, so change it with:
  //
  //     node scripts/set-phone.mjs "(254) 555-0142"
  //
  // which rewrites this file and all ~190 literal mentions together.
  phoneDisplay: '(509) 351-8404',
  phoneHref: 'tel:+15093518404',
  phoneE164: '+1-509-351-8404',

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

/** Cities we publish a dedicated service-area page for. */
export const serviceAreas = [
  { name: 'China Spring', slug: 'fence-builder-china-spring' },
  { name: 'Crawford', slug: 'fence-builder-crawford' },
  { name: 'McGregor', slug: 'fence-builder-mcgregor' },
  { name: 'Valley Mills', slug: 'fence-builder-valley-mills' },
  { name: 'Lorena', slug: 'fence-builder-lorena' },
  { name: 'West', slug: 'fence-builder-west' },
  { name: 'Hewitt', slug: 'fence-builder-hewitt' },
  { name: 'Woodway', slug: 'fence-builder-woodway' },
  { name: 'Robinson', slug: 'fence-builder-robinson' },
  { name: 'Clifton', slug: 'fence-builder-clifton' },
  { name: 'Marlin', slug: 'fence-builder-marlin' },
  { name: 'Meridian', slug: 'fence-builder-meridian' },
] as const;

/** Service pages, in nav order. */
export const services = [
  { name: 'Game & High Fence Installation', slug: 'game-fence-installation-waco' },
  { name: 'Cattle & Pipe Fencing', slug: 'pipe-fence-waco' },
  { name: 'Ranch Entrances & Custom Gates', slug: 'ranch-entrance-gates-waco' },
  { name: 'Barbed Wire & Field Fencing', slug: 'barbed-wire-fence-waco' },
  { name: 'Fence Repair & Emergency Service', slug: 'fence-repair-waco' },
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
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Game & High Fence Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Fence & Corrals' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Barbed Wire Fencing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ranch Entrance Gates' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fence Repair & Emergency Service' } },
      ],
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
