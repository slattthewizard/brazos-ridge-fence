/**
 * Long-form content for the service pages added in the Aug 2026 niche pass.
 *
 * These five services were already being sold in body copy across the town
 * pages -- "Horse-Safe Net Wire Fencing" on China Spring, "Net Wire for Sheep
 * and Goats" and "Cedar Clearing" on Clifton, "Working Pens and Corrals" on
 * Marlin -- with no page of their own to rank. Each one now has one.
 *
 * The five original service pages (game fence, pipe, entrances, barbed wire,
 * repair) remain hand-authored .astro files. New services go here and render
 * through src/components/ServiceTemplate.astro.
 *
 * Cannibalisation note: /barbed-wire-fence-waco/ and /pipe-fence-waco/ used to
 * carry the net-wire and corral sections respectively. Those sections were
 * trimmed to short pointers when these pages shipped, so the long-form
 * treatment lives in exactly one place per topic.
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  /** URL slug, without slashes. Must match the entry in config/site.ts. */
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  heroSubtitle: string;
  /** Hero image basename in /public/images (expects a `-800` variant too). */
  image: string;
  /** Two opening paragraphs (HTML allowed). */
  intro: string[];
  /** Six cards under "What's Included in Every Visit". */
  cards: { heading: string; body: string }[];
  /** Long-form body sections (HTML allowed). */
  sections: { heading: string; body: string[] }[];
  faqs: ServiceFaq[];
  /** Related blog posts, shown at the foot of the page. */
  guides: { href: string; label: string }[];
  ctaHeading: string;
  contactHeading: string;
}

export const serviceContent: Record<string, ServiceContent> = {
  'net-wire-fence-waco': {
    slug: 'net-wire-fence-waco',
    h1: 'Net Wire and Field Fence Installation in Waco, TX',
    metaTitle: 'Net Wire & Field Fence in Waco, TX | Brazos Ridge Fence',
    metaDescription:
      'Net wire and field fence around Waco, $3.50 to $8 per foot. Fixed-knot and hinge-joint woven wire for goats, sheep, horses, and calves. Free estimates.',
    serviceType: 'Fence Installation',
    heroSubtitle:
      'Woven field fence that holds what barbed wire lets through. Fixed-knot and hinge-joint in 32, 39, and 47 inch heights, stretched tight and braced to stay that way.',
    image: 'tile-1',
    intro: [
      'If barbed wire is not holding what you are running, net wire is usually the answer. Brazos Ridge Fence Co. installs woven field fence across McLennan, Bosque, and Falls counties, from a 32-inch cattle-tight perimeter to 47-inch fixed-knot that keeps goats in and coyotes out. Most net wire around Waco runs <strong>$3.50 to $8 per linear foot installed</strong>, depending on wire class, mesh spacing, and how rough the ground is.',
      'Net wire is a different animal from barbed wire to build. It comes in 330-foot rolls that weigh a few hundred pounds, it has to be stretched evenly across the full height or the bottom goes slack first, and it pulls harder on a corner than five strands ever will. Our guide on <a href="/blog/barbed-wire-vs-net-wire/">barbed wire vs net wire</a> covers which one fits your livestock. This page covers what we build, how we build it, and what it costs.',
    ],
    cards: [
      {
        heading: 'Fixed-Knot and Hinge-Joint',
        body: 'Fixed-knot wire holds tension for decades and shrugs off an animal hitting it at speed. Hinge-joint costs less and gives a little. We quote both so the difference shows up in dollars instead of adjectives.',
      },
      {
        heading: '32, 39, and 47 Inch Heights',
        body: 'Height comes from what you are keeping in. Thirty-two inches for a cattle-tight perimeter, 39 for calves and sheep, 47 where you have goats or predator pressure. Barbed strands on top add height cheaply.',
      },
      {
        heading: 'Graduated Mesh Spacing',
        body: 'Openings tight at the bottom and wider toward the top, so a calf or a kid cannot slip under while the fence stays affordable across the full height. Six-inch stays where the stock warrants it.',
      },
      {
        heading: 'Class 3 Galvanized Wire',
        body: 'Class 3 coating carries roughly three times the zinc of Class 1. On a fence you intend to build once and leave alone, it is the cheapest real upgrade on the bid.',
      },
      {
        heading: 'Proper Stretching and Bracing',
        body: 'In-line strainers, dead-men on the long runs, and H-braces sized for the pull. Net wire that sags along the bottom was almost always stretched wrong rather than built wrong.',
      },
      {
        heading: 'Barbed Top and Bottom Wire',
        body: 'A barbed strand above keeps cattle from leaning the fence over, and one below keeps hogs from rooting under it. Both are cheap insurance on a woven fence.',
      },
    ],
    sections: [
      {
        heading: 'What Net Wire Fence Costs Around Waco',
        body: [
          'Most net wire and field fence in Central Texas runs <strong>$3.50 to $8 per linear foot installed</strong>. That works out to roughly $18,000 to $42,000 per mile. Where you land depends on four things, in about this order of importance.',
          '<ul><li><strong>Wire type.</strong> Hinge-joint field fence sits at the bottom of the range. Fixed-knot high-tensile sits at the top, and it is worth the difference on any fence you expect to outlive your truck.</li><li><strong>Height and mesh.</strong> A 47-inch roll with 6-inch stays uses considerably more steel than a 32-inch roll with 12-inch stays, and the price follows the steel.</li><li><strong>Posts.</strong> T-posts on 12-foot centers are the economical build. Pipe line posts cost more and are the right call on a fence you are tying into a <a href="/pipe-fence-waco/">pipe frontage</a>.</li><li><strong>Ground.</strong> Rock west of the Bosque River means drilling instead of driving. Blackland clay near Marlin means setting corners deep enough that summer cracks do not work them loose.</li></ul>',
          'Corners, gates, and <a href="/fence-line-clearing-waco/">clearing</a> are quoted as separate line items rather than smeared across the per-foot number, so you can see what the fence costs and what the site work costs. Our <a href="/ranch-fence-cost/">ranch fence cost guide</a> puts net wire side by side with barbed wire, pipe, and game fence if you are still deciding.',
        ],
      },
      {
        heading: 'Fixed-Knot vs Hinge-Joint: What You Are Actually Paying For',
        body: [
          'Hinge-joint field fence is what most people picture when they hear "net wire." The vertical stays wrap around the horizontal line wires, and that joint is designed to flex. When a cow leans into it, the fence gives and springs back. When a cow leans into it every day for six years, the joint stops springing back and you get a permanent belly in the fence.',
          'Fixed-knot wire uses a separate piece of wire tied at every intersection. Nothing hinges, so nothing works loose. It is high-tensile steel, which means it holds tension through heat and cold instead of going slack every August, and it takes an impact without deforming. It is the same construction we use on <a href="/game-fence-installation-waco/">8-foot game fence</a>, for the same reason.',
          'The practical rule: if the fence is a cross fence you might move in five years, hinge-joint is fine and the savings are real. If it is a perimeter, or it is going somewhere you do not want to walk again for twenty years, buy fixed-knot. The wire is maybe a third more; the labor to build it is identical, which is why the total difference is smaller than people expect.',
        ],
      },
      {
        heading: 'Stretching Net Wire on Rolling Ground',
        body: [
          'Flat ground is easy. Almost nothing around here is flat. Net wire has to follow the contour of the land without leaving a gap at every low spot, and the way you get that is with more posts through the dips and rises, not with more tension.',
          'We stretch in runs between braced ends, pulling the whole roll evenly with a stretcher bar rather than yanking on individual wires. Pulling one line wire tight and the rest loose is how you get a fence that is tight at the top and useless at the bottom, which is exactly where goats, calves, and hogs test it. On long runs we set in-line braces so no single stretch is carrying more than it should.',
          'Where a line crosses a draw or a creek, we build a water gap that is meant to be rehung rather than a stretch of fence meant to hold. Anything else washes out the first real rain and takes a hundred feet of good fence with it. On the rocky ground west of Valley Mills and Meridian, post holes get drilled; our notes on <a href="/blog/fence-posts-in-rocky-ground/">setting posts in rocky ground</a> and <a href="/blog/fence-posts-in-clay-soil/">setting posts in clay</a> explain why the same fence gets built two different ways depending on which side of the river you are on.',
        ],
      },
      {
        heading: 'What Net Wire Holds That Barbed Wire Does Not',
        body: [
          'Barbed wire works by discomfort. An animal touches it, decides against it, and stays put. That works well on mature cattle and works poorly on anything smaller, faster, or more determined.',
          'Net wire works by physically not having a hole. That matters for <a href="/goat-sheep-fence-waco/">goats and sheep</a>, which will walk through a five-strand fence without slowing down; for young calves, which slip under the bottom wire and then panic on the wrong side; for <a href="/horse-fence-waco/">horses</a>, where the safety argument runs the other direction and no-climb mesh is what you want instead of barbs; and for keeping things out, including coyotes and, with a tight bottom, feral hogs.',
          'Plenty of places end up with both. A cattle perimeter in barbed wire, a net wire trap near the house for the smaller stock, and a hot wire offset where the bulls lean. We build all of it, and we would rather tell you which sections genuinely need woven wire than sell you woven wire around the whole place.',
        ],
      },
      {
        heading: 'Net Wire Crews Serving Waco and Central Texas',
        body: [
          'We build net wire and field fence within about an hour of Waco, across McLennan, Bosque, and Falls counties. That covers the small acreage and horse places around <a href="/fence-builder-china-spring/">China Spring</a>, <a href="/fence-builder-lorena/">Lorena</a>, and <a href="/fence-builder-hewitt/">Hewitt</a>, the goat and sheep country around <a href="/fence-builder-clifton/">Clifton</a> and <a href="/fence-builder-meridian/">Meridian</a>, and the farm ground north and south toward <a href="/fence-builder-west/">West</a> and <a href="/fence-builder-marlin/">Marlin</a>.',
          'Estimates are free and come in writing, with the wire class and mesh spacing spelled out so you can compare our bid against anyone else on the same terms. Call and we will come walk the line.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does net wire fence cost per foot around Waco?',
        answer:
          'Most net wire and field fence runs $3.50 to $8 per linear foot installed, or roughly $18,000 to $42,000 per mile. Hinge-joint on T-posts sits at the low end; 47-inch fixed-knot on pipe posts sits at the high end. Clearing and gates are quoted separately. We give you an exact written number after we walk the line.',
      },
      {
        question: 'What height of net wire do I need?',
        answer:
          'It depends on the animal. Thirty-two inches is a cattle-tight perimeter and will not hold much else. Thirty-nine inches handles calves and most sheep. Forty-seven inches is what you want for goats, for predator pressure, or anywhere you plan to add barbed strands on top for extra height. Deer and exotics need 8 feet, which is a game fence rather than field fence.',
      },
      {
        question: 'Is fixed-knot really worth the extra money?',
        answer:
          'On a perimeter, yes. Fixed-knot holds tension through Texas heat and cold instead of going slack, and it takes an animal hitting it without permanently deforming. The wire costs about a third more but the labor is identical, so the difference on the total bid is smaller than people expect. On a temporary cross fence, hinge-joint is a reasonable way to save money.',
      },
      {
        question: 'Can you put net wire on my existing fence posts?',
        answer:
          'Sometimes. If the posts are sound and spaced right, we can pull the old wire and hang net wire on them, which saves real money. What almost never carries over is the corners. Net wire pulls far harder than barbed wire, and old corner assemblies built for five strands will lean the first season. We look at the corners first and tell you honestly what can be reused.',
      },
      {
        question: 'Will net wire keep hogs out?',
        answer:
          'It helps a great deal, but hogs go under rather than through. A tight bottom wire, a barbed strand run low, or a buried apron is what actually stops them. Our post on <a href="/blog/feral-hog-fence-damage/">feral hog fence damage</a> covers what works and what people waste money on.',
      },
    ],
    guides: [
      { href: '/blog/barbed-wire-vs-net-wire/', label: 'Barbed Wire vs Net Wire Fence: Which One Fits Your Livestock?' },
      { href: '/blog/class-3-galvanized-wire/', label: 'Class 1 vs Class 3 Galvanized Fence Wire: Which One Outlasts the Other?' },
      { href: '/blog/cattle-panels-vs-net-wire/', label: 'Cattle Panel Fence vs Net Wire: Strength, Cost, and Best Uses' },
      { href: '/blog/fence-post-spacing/', label: 'Fence Post Spacing for Barbed Wire, Net Wire, and Pipe Fence' },
    ],
    ctaHeading: 'Get a Written Per-Foot Price on Net Wire.',
    contactHeading: 'Tell Us What You Are Keeping In. We Will Spec the Wire.',
  },

  'horse-fence-waco': {
    slug: 'horse-fence-waco',
    h1: 'Horse Fence Builder in Waco, TX',
    metaTitle: 'Horse Fence Builder in Waco, TX | Brazos Ridge Fence Co.',
    metaDescription:
      'Horse fencing around Waco, $6 to $28 per foot. No-climb mesh, pipe, and pipe-top builds that hold a horse without cutting it. Free written estimates.',
    serviceType: 'Fence Installation',
    heroSubtitle:
      'Fence built so a spooked horse hits something solid instead of something sharp. No-climb mesh, welded pipe, and pipe-top-with-mesh across Central Texas.',
    image: 'tile-2',
    intro: [
      'Horses are the one animal where the cheapest fence is genuinely the wrong fence. Brazos Ridge Fence Co. builds horse fencing across McLennan, Bosque, and Falls counties, from a five-acre trap behind the house to a full boarding operation. As a general Central Texas market range, expect <strong>$6 to $28 per linear foot installed</strong>, depending on whether you are running no-climb mesh, welded pipe, or the pipe-top-with-mesh combination most people land on.',
      'The reason horse fence costs more is not upsell, it is anatomy. A horse that hits a fence at speed does not bounce off it the way a cow does, and a horse that gets a leg through a fence will fight until something tears. Our post on <a href="/blog/best-fence-for-horses/">the best fence for horses</a> makes the case in detail. This page is what we build and what it costs.',
    ],
    cards: [
      {
        heading: 'No-Climb 2x4 Mesh',
        body: 'Woven mesh with openings too small for a hoof to pass through. It is the safest wire fence you can put a horse behind, and it will not let a foal roll under the bottom either.',
      },
      {
        heading: 'Welded Pipe Fence',
        body: 'Drill-stem pipe in three or four rails. Nothing to cut, nothing to break, nothing that rots. It is the most expensive option and the one people never regret on a frontage or a stallion pen.',
      },
      {
        heading: 'Pipe Top With Mesh Below',
        body: 'A pipe top rail gives the horse a visible line to respect, and no-climb mesh underneath closes the gaps. This combination is what most Central Texas horse places end up with.',
      },
      {
        heading: 'Heights That Match the Horse',
        body: 'Sixty inches is the working standard. We go taller for stallions and for traps small enough that a horse can build up speed toward the fence, and we set the bottom close enough to the ground that a leg cannot go under.',
      },
      {
        heading: 'Gates That Swing Clear',
        body: 'Wide, smooth-latching gates hung on posts set in concrete, sized for a tractor and a trailer. A gate that drags is a gate somebody eventually leaves open.',
      },
      {
        heading: 'Cross Fencing and Traps',
        body: 'Rotating even two pastures beats grazing one flat, and a small catch trap near the barn saves an hour every time you need to bring one in. We lay both out with the arena and run-in shed in mind.',
      },
    ],
    sections: [
      {
        heading: 'Why Barbed Wire and Horses Do Not Mix',
        body: [
          'This is the conversation we have most often, usually with somebody who has just bought acreage that came with an existing cattle fence. The fence is not wrong for cattle. It is wrong for what is standing behind it now.',
          'A cow leans into barbed wire, feels the barb, and backs off. A horse spooks, runs, and either goes through the fence or gets tangled in it. The damage from a tangled horse is not a scratch. It is a wire wrapped around a pastern, a horse that fights the wire until the wire wins, and a vet bill that will pay for a good deal of fence. The risk goes up as the trap gets smaller, because a horse in a five-acre pen can hit a corner at a dead run before it has anywhere to turn.',
          'The other issue is visibility. A single strand of wire is nearly invisible at dusk to an animal built to run first. A pipe top rail, a wide top board, or a strand of sight-wire tape gives the horse something to see. That is why the pipe-top-with-mesh build shows up so often around Waco: the pipe is the part the horse sees, and the mesh is the part that closes the gaps.',
        ],
      },
      {
        heading: 'What Horse Fencing Costs in Central Texas',
        body: [
          'The range is wide because the builds are genuinely different from one another.',
          '<p>These are general Central Texas market ranges; the written estimate after we walk your line is the real number.</p><ul><li><strong>No-climb 2x4 mesh on wood or T-posts: $6 to $10 per foot.</strong> The economical safe option, and the right call for perimeter and larger pastures.</li><li><strong>No-climb mesh with a pipe top rail: $12 to $18 per foot.</strong> Visibility plus containment. This is the most common build we do for horse places.</li><li><strong>Full welded pipe, three or four rail: $12 to $28 per foot.</strong> Priced by pipe diameter and rail count. See our <a href="/blog/pipe-fence-cost/">pipe fence cost breakdown</a> for the detail.</li></ul>',
          'Two things move those numbers more than anything else. Gates, because a horse operation needs more of them than a cattle place and they need to be wider. And corners, because every change of direction is a brace assembly, and a small trap with six corners costs more per foot than a straight quarter-mile run. If you are pricing a whole place, the <a href="/ranch-fence-cost/">ranch fence cost guide</a> shows how horse fence compares with the rest.',
        ],
      },
      {
        heading: 'Building for Small Acreage South and West of Waco',
        body: [
          'A lot of our horse work is on places between two and forty acres, out toward <a href="/fence-builder-lorena/">Lorena</a>, <a href="/fence-builder-hewitt/">Hewitt</a>, <a href="/fence-builder-woodway/">Woodway</a>, and <a href="/fence-builder-china-spring/">China Spring</a>. Small acreage changes the math in ways that surprise people.',
          'The perimeter is a smaller share of the total, and the gates, cross fences, and catch pen are a bigger one. Fence per acre goes up sharply as the place gets smaller, which is why a five-acre place can cost nearly as much to fence as a twenty-acre one. Our guide to <a href="/blog/small-acreage-fencing-waco/">small acreage fencing around Waco</a> runs the numbers.',
          'Ground matters too. These places are mostly Houston Black clay, which grows good grass and holds a post poorly once August opens cracks in it. We set corner and brace posts deep and tamp in lifts rather than trusting a collar of concrete at the top, because on a small place every corner is close enough to the house that you will watch it lean. Our note on <a href="/blog/fence-posts-in-clay-soil/">setting posts in clay soil</a> covers the why.',
        ],
      },
      {
        heading: 'Arenas, Round Pens, and Barn Lots',
        body: [
          'Fence around a working area is a different spec from fence around a pasture. In an arena or round pen, the horse is close to the rail and moving, so nothing can protrude on the inside face. We weld rails on the inside of the posts and grind the joints, so there is nothing for a knee or a stirrup to catch.',
          'Barn lots and turnout traps get the same treatment plus attention to the corners, which is where a horse gets pinned. Rounded or filled corners are worth the extra material in any pen small enough for one horse to run another into one.',
          'If you are also running cattle, we build the <a href="/corrals-working-pens-waco/">corrals and working pens</a> for that side of the operation, and a horse-safe fence line where the two share a boundary. One crew, matching heights, braces that tie together.',
        ],
      },
      {
        heading: 'Horse Fence Builders Around Waco and Central Texas',
        body: [
          'We build horse fencing within about an hour of Waco, covering McLennan, Bosque, and Falls counties. Estimates are free, written, and specific about wire class, pipe size, and rail count, so you can compare bids on the same terms instead of guessing.',
          'We also run a 24/7 line for <a href="/fence-repair-waco/">fence repair</a>. A tree through a horse fence is not a Monday problem, and neither is a gate somebody left open.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the safest fence for horses?',
        answer:
          'No-climb 2x4 woven mesh with a visible top rail. The mesh openings are too small for a hoof to pass through, and the top rail, usually pipe around here, gives the horse something to see at a distance. Welded pipe alone is also very safe and lasts longer, but costs more and gives a horse nothing soft to hit.',
      },
      {
        question: 'How much does horse fencing cost per foot near Waco?',
        answer:
          'As general market ranges, no-climb mesh runs about $6 to $10 per foot installed. Adding a pipe top rail puts it at $12 to $18. Full welded pipe fence runs $12 to $28 depending on pipe size and rail count. Gates and corners are quoted separately because a small horse trap needs a lot more of both per foot than a long pasture run.',
      },
      {
        question: 'How tall does a horse fence need to be?',
        answer:
          'Sixty inches is the working standard for most horses. Go taller for stallions, for horses that have already learned to jump out, and for small traps where an animal can build speed toward the fence. Just as important is the bottom: keep it close enough to the ground that a leg cannot go under, which is usually 8 to 12 inches.',
      },
      {
        question: 'Can I put horses behind the field fence that is already on the place?',
        answer:
          'Look at the mesh openings first. Standard field fence with 6-inch openings is the one to worry about, because it is exactly the size to catch a hoof and then hold it. Cattle-tight net wire with a barbed top strand is also a problem, since the barbs are at chest height. Sometimes the fix is pulling the barbed strand and adding a top rail rather than rebuilding, and we will tell you when that is the case.',
      },
      {
        question: 'Do you build arena and round pen fencing?',
        answer:
          'Yes. Arenas and round pens are welded pipe with the rails on the inside face of the posts and the joints ground smooth, so nothing protrudes where a horse or a rider passes close. We also build barn lots, turnout traps, and the gates between them.',
      },
    ],
    guides: [
      { href: '/blog/best-fence-for-horses/', label: "The Best Fence for Horses (and Why It's Not Barbed Wire)" },
      { href: '/blog/small-acreage-fencing-waco/', label: 'Small Acreage Fencing Around Waco: What Hobby Farms Really Need' },
      { href: '/blog/t-post-vs-wood-post/', label: 'T-Post vs Wood Post: Where Each One Belongs on Your Fence Line' },
      { href: '/blog/pipe-fence-cost/', label: 'What Pipe Fencing Really Costs Per Foot in the Waco Area' },
    ],
    ctaHeading: 'Get a Written Price on Horse-Safe Fence.',
    contactHeading: 'Tell Us About the Horses. We Will Build the Fence Around Them.',
  },

  'goat-sheep-fence-waco': {
    slug: 'goat-sheep-fence-waco',
    h1: 'Goat and Sheep Fence Installation in Waco, TX',
    metaTitle: 'Goat & Sheep Fence in Waco, TX | Brazos Ridge Fence Co.',
    metaDescription:
      'Goat and sheep fencing around Waco, $3.50 to $8 per foot. Four-inch mesh, tight bottoms, and offset hot wire that holds goats in and keeps coyotes out.',
    serviceType: 'Fence Installation',
    heroSubtitle:
      'Fence sized for the animal that finds every hole. Four-inch mesh, a bottom tight to the ground, and hot wire where the goats have already made their point.',
    image: 'tile-3',
    intro: [
      'There is an old line about goats and fence: if it will not hold water, it will not hold a goat. It is closer to true than most people find comfortable. Brazos Ridge Fence Co. builds goat and sheep fencing across McLennan, Bosque, and Falls counties, mostly in the cedar and limestone country west of the Bosque River. Expect <strong>$3.50 to $8 per linear foot installed</strong>.',
      'Sheep and goats fail fences in two different directions. Goats go through, over, and under, and they will spend all day working on it. Sheep mostly stay put until a coyote gives them a reason not to, which makes predator exclusion the bigger part of the job. A fence built for one is not automatically right for the other, and our guide on <a href="/blog/fence-for-goats-and-sheep/">the best fence for goats and sheep</a> walks through the difference.',
    ],
    cards: [
      {
        heading: 'Four-Inch Mesh',
        body: 'Four-inch openings are small enough that a horned goat cannot get its head through and then panic. Six-inch field fence is exactly the wrong size, and it is how most stuck goats happen.',
      },
      {
        heading: '47-Inch and Taller',
        body: 'Forty-seven inches is the working height for goats. We add a barbed or electric strand on top where you have climbers, which most herds eventually produce.',
      },
      {
        heading: 'A Bottom Tight to the Ground',
        body: 'Goats go under before they go over. We follow the contour with extra posts through the dips rather than leaving a gap at every low spot, and we run a bottom strand where the ground is uneven.',
      },
      {
        heading: 'Offset Hot Wire',
        body: 'A single hot wire at nose height on the inside stops leaners and climbers before they start. It costs very little and it is the cheapest fix for a herd that has already learned bad habits.',
      },
      {
        heading: 'Predator Exclusion',
        body: 'Coyotes and loose dogs are the real threat to sheep around here. A tight bottom, a hot wire low on the outside, and no gaps at gates and water crossings is what actually keeps them out.',
      },
      {
        heading: 'Cedar Clearing Included',
        body: 'Goat country in Bosque County is cedar country. We clear the line before we build so the fence goes in straight and you can walk it later. Clearing is quoted as its own line item.',
      },
    ],
    sections: [
      {
        heading: 'What Goat and Sheep Fence Costs Around Waco',
        body: [
          'Most goat and sheep fencing runs <strong>$3.50 to $8 per linear foot installed</strong>. Fixed-knot 47-inch wire with 4-inch spacing is at the top of that range, and it is what we recommend for a perimeter you do not want to think about again. Hinge-joint field fence with wider stays is cheaper and is a reasonable choice for interior cross fence.',
          'The two costs people do not budget for on goat ground are clearing and corners. In the cedar country around <a href="/fence-builder-clifton/">Clifton</a>, <a href="/fence-builder-meridian/">Meridian</a>, and <a href="/fence-builder-valley-mills/">Valley Mills</a>, <a href="/fence-line-clearing-waco/">clearing the line</a> can run $1 to $3 per foot (roughly $5,300 to $15,800 a mile) on its own before a post goes in. And rough ground means more direction changes, and every change of direction is a braced corner.',
          'Add a hot wire and an energizer if you have any history of climbers, which is most herds after the first year. The materials are cheap and it protects the rest of the investment. Our <a href="/ranch-fence-cost/">ranch fence cost guide</a> puts these numbers next to the other fence types if you are budgeting a whole place.',
        ],
      },
      {
        heading: 'Why Four-Inch Mesh, Specifically',
        body: [
          'This is the single most important decision on a goat fence and the one that gets made wrong most often, usually by buying whatever field fence the farm store had on the trailer.',
          'Standard field fence has 6-inch openings. A horned goat puts its head through a 6-inch opening easily, turns its head, and then cannot get the horns back out. Now you have a goat standing in a fence line in August, and if you do not find it, a predator will. It is the most common non-predator loss we hear about from goat producers, and it is entirely a fencing decision.',
          'Four-inch mesh solves it by not letting the head through in the first place. It costs more per roll because it is more steel, and the difference across a mile of fence is real money. It is still less than losing animals, and far less than the labor of walking the fence twice a day looking for a stuck goat. If your herd is disbudded or polled the pressure is lower, but a mixed herd or one you plan to buy into over time will end up with horns eventually.',
        ],
      },
      {
        heading: 'Keeping Coyotes Out, Which Is the Sheep Problem',
        body: [
          'Sheep are relatively easy to contain and relatively hard to protect. Most sheep producers we work with are not worried about the flock leaving, they are worried about what comes in overnight.',
          'A coyote does not climb a 47-inch fence if there is any alternative, and there almost always is: a washed-out low spot, a gap where a gate meets a post, a water crossing left open, or a place where the ground has settled under the bottom wire. Closing those is more effective than building the fence taller. We walk the line for exactly those spots.',
          'Where pressure is heavy, a hot wire six inches off the ground and six inches outside the fence is the standard addition. It hits a coyote in the nose right where it starts to dig, and it takes one lesson. A second hot wire at the top handles anything that decides to climb. None of this replaces guardian animals, and most of the producers around here run both.',
        ],
      },
      {
        heading: 'Building Fence in Bosque County Cedar and Rock',
        body: [
          'West of the Bosque River the blackland gives out and you are into limestone, cedar, and steep little draws. That is goat country for a reason: goats do well on browse that will not carry a cow. It is also the hardest ground in our service area to fence.',
          'Post holes get drilled rather than augered, and a rock bit turns a fast day into a slow one. We price rock honestly rather than hiding it in the per-foot number, and our note on <a href="/blog/fence-posts-in-rocky-ground/">setting posts in rocky ground west of Waco</a> explains what actually holds in shallow soil over rock.',
          'The cedar is the other half. Ashe juniper along an old fence line has to come out before you can stretch new wire, and it does not resprout from the stump the way mesquite does, which makes clearing here a one-time job rather than an annual one. We handle it as part of the fence bid or as <a href="/fence-line-clearing-waco/">standalone clearing</a>.',
        ],
      },
      {
        heading: 'Goat and Sheep Fencing Across Central Texas',
        body: [
          'We build across McLennan, Bosque, and Falls counties, with most of our small-ruminant work in the western half of that range. Estimates are free and written, and they spell out mesh size, wire class, and height, because those three numbers are the whole fence and a bid that leaves them out is not comparable to anything.',
          'If you already have fence and it is not holding, call before you replace it. Sometimes the answer is a hot wire and a hundred feet of repair rather than a new perimeter, and we would rather tell you that than sell you a mile of wire you did not need.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best fence for goats in Central Texas?',
        answer:
          'Forty-seven-inch woven wire with 4-inch mesh openings, stretched tight with the bottom close to the ground, plus an offset hot wire at nose height on the inside. The 4-inch mesh is the part that matters most, because 6-inch field fence lets a horned goat get its head through and stick.',
      },
      {
        question: 'How much does goat fence cost per foot around Waco?',
        answer:
          'Most goat and sheep fencing runs $3.50 to $8 per linear foot installed. Fixed-knot 47-inch wire with 4-inch spacing sits at the top of that range. In the cedar country west of the river, clearing the fence line is a separate cost of roughly $1 to $3 per foot (roughly $5,300 to $15,800 a mile).',
      },
      {
        question: 'Do I need a different fence for sheep than for goats?',
        answer:
          'The fence itself can be the same, but the priorities differ. Goats test the fence constantly, so mesh size, height, and a hot wire matter most. Sheep mostly stay put, so the job shifts to keeping predators out, which means a tight bottom, no gaps at gates and water crossings, and often a hot wire low on the outside.',
      },
      {
        question: 'Will electric fence alone hold goats?',
        answer:
          'Sometimes, and rarely for long. Multi-strand electric is cheaper to put up and works well on trained animals in a rotational setup, but a goat with a thick winter coat may not feel it, and one power outage or shorted-out weed can undo the training. We build electric as an addition to woven wire rather than a replacement for a perimeter.',
      },
      {
        question: 'Can you clear cedar off the fence line before building?',
        answer:
          'Yes, and on most Bosque County jobs we have to. It is quoted as its own line item, usually $1 to $3 per foot (roughly $5,300 to $15,800 a mile) depending on how heavy the cedar is. Ashe juniper does not resprout from the stump, so clearing a line here is largely a one-time job.',
      },
    ],
    guides: [
      { href: '/blog/fence-for-goats-and-sheep/', label: 'The Best Fence for Goats and Sheep on Central Texas Land' },
      { href: '/blog/cattle-panels-vs-net-wire/', label: 'Cattle Panel Fence vs Net Wire: Strength, Cost, and Best Uses' },
      { href: '/blog/fence-posts-in-rocky-ground/', label: 'Setting Fence Posts in Rocky Ground West of Waco: What Actually Works' },
      { href: '/blog/clearing-fence-line-brush/', label: 'Clearing a Fence Line: Brush, Trees, and Right-of-Way Basics' },
    ],
    ctaHeading: 'Get a Written Price on Goat-Tight Fence.',
    contactHeading: 'Tell Us What the Goats Are Getting Away With.',
  },

  'corrals-working-pens-waco': {
    slug: 'corrals-working-pens-waco',
    h1: 'Cattle Corrals and Working Pens Built in Waco, TX',
    metaTitle: 'Cattle Corrals & Working Pens in Waco, TX | Brazos Ridge',
    metaDescription:
      'Cattle corrals and working pens around Waco, $6,000 to $30,000. Crowding tubs, bud boxes, alleys, and loading chutes laid out to work cattle alone.',
    serviceType: 'Construction',
    heroSubtitle:
      'Pens, alleys, and chute setups laid out so one person and a dog can work the whole herd. Welded pipe, built to the ground you actually have.',
    image: 'service-3',
    intro: [
      'A fence keeps cattle in. A corral lets you do something with them. Brazos Ridge Fence Co. builds working pens, sorting corrals, crowding setups, and loading chutes across McLennan, Bosque, and Falls counties. As a general market range, a complete working facility usually lands between <strong>$6,000 and $30,000</strong>, driven by head count, layout, and how much of the equipment you already own.',
      'Most of the corral calls we get come from the same place: somebody has been catching cattle in a corner of the pasture with panels and a lot of shouting, and has finally had enough. A pen laid out correctly changes that job from a four-person Saturday into something one person can do on a Tuesday morning. That is what we are actually selling here, and it is worth more than the pipe.',
    ],
    cards: [
      {
        heading: 'Holding and Sorting Pens',
        body: 'Sized at roughly 20 square feet per head for cows, more for pairs. Enough pens to sort into, because a facility with one pen only lets you gather, not sort.',
      },
      {
        heading: 'Crowding Tub or Bud Box',
        body: 'Both work. A tub uses continuous motion, a bud box uses the cattle turning back past you. We build either and will tell you which fits your ground, your herd, and how you like to work.',
      },
      {
        heading: 'Alleys Sized to the Animal',
        body: 'Twenty-six to thirty inches wide for mature cows, adjustable or sheeted sides for calves. Too wide and they turn around; too narrow and they jam. This is the measurement that makes or breaks a facility.',
      },
      {
        heading: 'Chute and Headgate Mounting',
        body: 'A squeeze chute anchored to concrete or to a pipe frame that does not move when a cow hits it. We set yours if you have one and build the approach if you do not.',
      },
      {
        heading: 'Loading Chute for a Gooseneck',
        body: 'Built to trailer deck height with a solid ramp and sheeted sides, positioned so you can back a gooseneck to it without a spotter and without unhitching.',
      },
      {
        heading: 'Gates You Can Work Alone',
        body: 'Sorting gates hung to swing both ways and latch from either side, with man-passes at the corners. Every gate you can work from where you already are is a trip you do not make.',
      },
    ],
    sections: [
      {
        heading: 'What a Working Pen Costs Around Waco',
        body: [
          'As general market ranges, a small setup for 20 to 30 head, meaning a holding pen, one sorting pen, a short alley, and a headgate, generally runs <strong>$6,000 to $12,000</strong>. A full facility for 100-plus head with a crowding tub, multiple sorting pens, a loading chute, and a mounted squeeze chute runs <strong>$18,000 to $30,000</strong> and up.',
          'The variables, roughly in order of how much they move the number:',
          '<ul><li><strong>Head count and pen count.</strong> More cattle means more square footage, and more sorting means more gates, which are the expensive part per foot.</li><li><strong>Pipe versus continuous panel.</strong> Welded drill-stem pipe is stronger and permanent. Bolted continuous panels cost less and can be moved. Most of what we build is pipe, because a corral takes abuse a fence never sees.</li><li><strong>Your equipment or ours.</strong> If you already own a squeeze chute, we build around it. If not, the chute itself is a significant line item and you buy it, not us.</li><li><strong>Ground and drainage.</strong> A pen that holds water is a pen you cannot work in February. Sometimes there is dirt work before there is pipe.</li></ul>',
          'We quote the pens, the alley, the chute mount, and the loading chute as separate items so you can build in stages. Plenty of operations start with a solid holding pen and alley and add the tub two years later.',
        ],
      },
      {
        heading: 'Laying It Out So One Person Can Work Cattle',
        body: [
          'Layout is the whole job. The pipe is just pipe.',
          'Cattle move well when they are going where they can see, moving toward other cattle, and turning the way they came from. They move badly toward a dark shed, into a dead end, or against a crowd. A good facility uses those tendencies instead of fighting them, which is why the same herd will flow through one setup and wreck another.',
          'Practical things that matter more than people expect: solid sides on the alley and the tub, so cattle look forward instead of at you. A man-pass at every corner, so you never have to climb. Gates that latch from both sides. And enough curve or angle that an animal in the alley cannot see the chute until it is committed.',
          'We lay the pen out on the ground with you before we weld anything, walking through a working day out loud. Where do the cattle come from, where do they go after, where is the trailer parked, which way does the wind blow the dust. That conversation costs nothing and it is the difference between a pen you like and a pen you tolerate.',
        ],
      },
      {
        heading: 'Crowding Tub or Bud Box?',
        body: [
          'This is the one people argue about, and both camps are right about their own operation.',
          'A <strong>crowding tub</strong> is a curved pen with a sweep gate that funnels cattle into the alley. It handles larger groups with less thinking, works well when several people are helping, and is what most commercial facilities use. It costs more to build and takes more room.',
          'A <strong>bud box</strong> is a simple rectangular pen where cattle walk in, then turn back past the handler into the alley. It is cheaper, smaller, and works beautifully when it is built to the right dimensions and the handler knows how to position. It is unforgiving when either of those is off.',
          'Our honest read: if you work cattle mostly alone and you are willing to learn the positioning, a bud box gives you more facility per dollar. If several different people will be using it, including neighbors and hired help who have never seen it before, a tub is more forgiving of whoever is standing in the wrong place.',
        ],
      },
      {
        heading: 'Pipe, Panels, and What Survives a Corral',
        body: [
          'A corral takes punishment a fence line never does. Cattle push against it under stress, they hit it, and they do it in the same three places every time. That is why almost everything we build for working facilities is welded drill-stem pipe rather than wire or wood.',
          'Pipe corners in a pen get set deeper than fence corners and are usually filled or sleeved where the abuse concentrates. The rails go on the inside face of the posts so there is nothing protruding into the pen, and joints get ground smooth. Same principle as an arena: nothing that can hook a hip or a hide.',
          'Continuous panel is the reasonable alternative when you want the option to move things later, and it is genuinely cheaper. We build with it when that is what you want, and we say so on the bid rather than quietly substituting. Either way, the setup ties into your existing <a href="/pipe-fence-waco/">pipe fence</a> and <a href="/ranch-entrance-gates-waco/">ranch entrance</a> if we built those too, so the heights match and the braces work together.',
        ],
      },
      {
        heading: 'Corral Builders Serving Waco and Central Texas',
        body: [
          'We build working pens and corrals across McLennan, Bosque, and Falls counties, including the working cattle country around <a href="/fence-builder-crawford/">Crawford</a>, <a href="/fence-builder-mcgregor/">McGregor</a>, and <a href="/fence-builder-marlin/">Marlin</a>, and the smaller operations closer in around <a href="/fence-builder-lorena/">Lorena</a> and <a href="/fence-builder-hewitt/">Hewitt</a>.',
          'Come out and walk your place with us. Bring the trailer, tell us how you like to work, and we will draw the pen on the dirt before anyone quotes a number. Estimates are free and in writing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does a cattle working pen cost to build?',
        answer:
          'As general market ranges, a small setup for 20 to 30 head, meaning a holding pen, a sorting pen, a short alley, and a headgate, runs about $6,000 to $12,000. A full facility for 100-plus head with a crowding tub, multiple pens, a loading chute, and a mounted squeeze chute runs $18,000 to $30,000 and up. We quote each piece separately so you can build it in stages.',
      },
      {
        question: 'How wide should a cattle alley be?',
        answer:
          'Twenty-six to thirty inches for mature cows. Narrower and animals jam; wider and they turn around, which is how people get hurt. If you run calves through the same alley, we build adjustable or sloped sides so one alley handles both without a compromise that works badly for each.',
      },
      {
        question: 'Is a bud box or a crowding tub better?',
        answer:
          'A bud box is cheaper, smaller, and excellent when the handler knows how to position and works mostly alone. A crowding tub costs more and takes more room but is more forgiving of whoever happens to be helping that day. If several different people will use the facility, we usually recommend the tub.',
      },
      {
        question: 'How much space do cattle need in a holding pen?',
        answer:
          'Figure roughly 20 square feet per head for mature cows in a holding pen, and more for pairs, since a calf needs somewhere to be that is not under a cow. Crowding pens are deliberately tighter than that, but nothing should hold cattle at crowding density for longer than the few minutes it takes to work them.',
      },
      {
        question: 'Can you build a corral that ties into my existing fence?',
        answer:
          'Yes, and it is usually the right way to do it, because the pen wants to sit where the cattle already come to. We tie into existing pipe or wire, match heights, and add braces where a fence corner is suddenly carrying corral loads it was never built for.',
      },
    ],
    guides: [
      { href: '/blog/cattle-getting-out-of-fence/', label: 'Cattle Keep Getting Out of Fence? 7 Problems to Check First' },
      { href: '/blog/pipe-fence-cost/', label: 'What Pipe Fencing Really Costs Per Foot in the Waco Area' },
      { href: '/blog/fix-sagging-ranch-gate/', label: "How to Fix a Sagging Gate That Drags or Won't Latch" },
      { href: '/blog/h-brace-fence-corners/', label: 'H Brace Fence Basics: Why Fence Corners Fail Without Them' },
    ],
    ctaHeading: 'Let Us Draw Your Pen on the Dirt First.',
    contactHeading: 'Tell Us How You Work Cattle. We Will Lay Out the Pen.',
  },

  'fence-line-clearing-waco': {
    slug: 'fence-line-clearing-waco',
    h1: 'Fence Line and Cedar Clearing in Waco, TX',
    metaTitle: 'Fence Line & Cedar Clearing in Waco, TX | Brazos Ridge',
    metaDescription:
      'Fence line clearing around Waco, $1 to $3 per foot. Cedar, mesquite, and brush cleared into a workable lane, with or without a fence job attached.',
    serviceType: 'Land Clearing',
    heroSubtitle:
      'Cedar, mesquite, and brush cleared into a lane you can build a fence in and walk later. Sold as part of a fence job or entirely on its own.',
    image: 'tile-4',
    intro: [
      'Half the fence jobs we bid in Bosque County are really clearing jobs with a fence at the end. Brazos Ridge Fence Co. clears fence lines across McLennan, Bosque, and Falls counties, cutting cedar, mesquite, and brush into a working lane. Most clearing runs <strong>$1 to $3 per foot (roughly $5,300 to $15,800 a mile)</strong>, and heavy cedar brakes can run past that.',
      'You do not have to buy a fence to get it. Plenty of the clearing we do is on lines that already have good wire on them, where twenty years of regrowth has swallowed the fence and nobody can walk it, let alone fix it. That is its own service and it is priced on its own.',
    ],
    cards: [
      {
        heading: 'A 10 to 15 Foot Working Lane',
        body: 'Wide enough for the crew to stretch wire properly and for you to get a truck or a side-by-side down it afterward. A fence you cannot reach is a fence you will not maintain.',
      },
      {
        heading: 'Cedar and Ashe Juniper',
        body: 'The dominant problem west of the Bosque River. Cedar does not resprout from the stump, so clearing a line here is largely a one-time job rather than an annual fight.',
      },
      {
        heading: 'Mesquite and Huisache',
        body: 'These do come back from the stump and the root. We cut low and treat the stump so you are not looking at the same brush in three years.',
      },
      {
        heading: 'Mulching or Piling',
        body: 'Mulched in place is cheapest and leaves the material on the ground as cover. Piled and burned or hauled costs more and leaves the lane clean. Both get quoted so you can choose.',
      },
      {
        heading: 'Clearing Overgrown Existing Fence',
        body: 'Regrowth pulled off a fence that is still sound, so you can see the wire, find the breaks, and get to it. Often the cheapest thing you can do for an old fence.',
      },
      {
        heading: 'Priced as Its Own Line Item',
        body: 'Never buried in the per-foot fence price. Clearing varies more than any other part of a fence job, and hiding it in the bid is how surprise change orders happen.',
      },
    ],
    sections: [
      {
        heading: 'What Fence Line Clearing Costs Around Waco',
        body: [
          'Clearing runs <strong>$1 to $3 per foot (roughly $5,300 to $15,800 a mile)</strong> for a typical fence lane, and the spread is enormous because the brush is. Light regrowth on a maintained line is a fast day with a skid steer. A quarter mile of mature cedar brake on a Bosque County hillside is a different job entirely, and it can run past the top of that range.',
          'What drives the number:',
          '<ul><li><strong>Density and species.</strong> Scattered mesquite in a pasture is cheap. Solid cedar where the canopy has closed is not.</li><li><strong>Stem size.</strong> Anything a mulcher can take in one pass is fast. Trunks that need a saw or a dozer are slow.</li><li><strong>Terrain.</strong> Steep, rocky sidehills west of Valley Mills slow equipment down and limit which machine can go where.</li><li><strong>What happens to the material.</strong> Mulching in place is the cheapest. Piling and burning costs more. Hauling off costs the most.</li></ul>',
          'When clearing is part of a fence job, it appears on the estimate as its own line rather than folded into the per-foot number. That is deliberate. It is the single most variable cost on a fence bid, and a contractor who averages it across the whole job is either overcharging the easy sections or is going to come back asking for more money on the hard ones.',
        ],
      },
      {
        heading: 'Why the Lane Width Matters More Than People Think',
        body: [
          'Ten to fifteen feet is what we clear for a new build, and it is not arbitrary. The crew needs room to run a stretcher, work a post driver, and get a trailer of wire alongside the line. Cut it narrower and the build slows down, which costs more than the clearing saved.',
          'The bigger argument is what happens afterward. A fence you can drive is a fence you check. A fence buried in regrowth is a fence you find out about when the cattle are on the road. Six to eight feet of maintained lane is enough for a side-by-side, and keeping it open is dramatically cheaper than clearing it again in fifteen years.',
          'There is also the fence itself. Limbs over a line drop on it in every ice storm and every wind event, and a tree growing against a wire will eventually swallow it. Our post on <a href="/blog/storm-damaged-fence-repair/">storm damaged fence repair</a> covers what that looks like when it goes wrong. Most of the trees we cut out of fences were saplings somebody decided to leave.',
        ],
      },
      {
        heading: 'Cedar, Mesquite, and What Comes Back',
        body: [
          'The two brush problems in our service area behave completely differently, and knowing which one you have changes what the job is worth.',
          '<strong>Ashe juniper</strong>, what everyone here calls cedar, does not resprout from a cut stump. Cut it below the lowest green limb and that tree is finished. This is genuinely good news: clearing a cedar line is close to permanent, and what returns comes from seed over many years rather than from the stumps you left. It is why cedar clearing on the limestone country around <a href="/fence-builder-clifton/">Clifton</a> and <a href="/fence-builder-meridian/">Meridian</a> is worth doing properly once.',
          '<strong>Mesquite and huisache</strong> resprout aggressively from the stump and from the root crown, and cutting alone will give you a denser thicket than you started with. Those get cut low and the stump treated, or they come back multi-stemmed and worse. Anyone who quotes you mesquite clearing without mentioning the stumps has not thought about year three.',
          'One thing worth checking before you clear mature cedar in Bosque County: stands of older Ashe juniper mixed with oak can be golden-cheeked warbler habitat, and that bird is federally listed. The nesting season runs roughly March through July. If you are clearing a substantial amount of mature juniper woodland rather than a fence lane through regrowth, it is worth a call to a wildlife biologist or the local Fish and Wildlife office first. Clearing outside nesting season, and keeping a fence lane narrow, generally keeps you well clear of the issue.',
        ],
      },
      {
        heading: 'Clearing Without a Fence Attached',
        body: [
          'Not every clearing job has a fence at the end of it, and we take those calls too.',
          'The most common one is an old fence line that is still sound under twenty years of brush. Nobody has walked it in a decade, the cattle have been getting out somewhere, and you cannot even see where. Clearing that line so you can inspect it is frequently the cheapest useful thing you can do, and about half the time the fence turns out to need a few hundred feet of work rather than replacement.',
          'The others are pasture and pen access, opening a road to a water trough or a back gate, and clearing around a <a href="/corrals-working-pens-waco/">working pen</a> so you can get a trailer to it. We quote all of it by the job after walking it, because brush is impossible to price from a photograph.',
        ],
      },
      {
        heading: 'Clearing Crews Across McLennan, Bosque, and Falls Counties',
        body: [
          'We clear within about an hour of Waco. Most of the heavy cedar work is out west toward <a href="/fence-builder-valley-mills/">Valley Mills</a>, <a href="/fence-builder-clifton/">Clifton</a>, and <a href="/fence-builder-meridian/">Meridian</a>. Mesquite and bottomland brush runs more toward <a href="/fence-builder-marlin/">Marlin</a> and the Brazos bottoms south of town.',
          'Winter is the better season for it: the brush is dormant, the ground is firmer than you would think, and it is out of nesting season. But we clear year round, and if you are building fence in the spring, the clearing has to happen when it happens.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does fence line clearing cost per mile?',
        answer:
          'Most fence lanes run $1 to $3 per foot (roughly $5,300 to $15,800 a mile). Light regrowth on a maintained line is at the bottom of that; mature cedar brake on a rocky hillside can run past the top. We walk it before quoting, because brush genuinely cannot be priced from a satellite photo.',
      },
      {
        question: 'How wide should a cleared fence line be?',
        answer:
          'Ten to fifteen feet for a new build, which gives the crew room to stretch wire and get equipment alongside. After that, keeping six to eight feet open is enough to drive a side-by-side down, and a fence you can drive is a fence you actually check.',
      },
      {
        question: 'Will the cedar grow back after you clear it?',
        answer:
          'Not from the stump. Ashe juniper does not resprout once it is cut below the lowest green limb, so clearing a cedar line is close to a one-time job. What comes back comes from seed over many years. Mesquite and huisache are the opposite and will resprout aggressively unless the stumps are treated, which we do.',
      },
      {
        question: 'Do you clear fence lines without building the fence?',
        answer:
          'Yes. A good share of our clearing work is on lines that already have sound wire on them and just cannot be reached or inspected. We also open access to troughs, back gates, and working pens. It is quoted by the job after we walk it.',
      },
      {
        question: 'Is there a best time of year to clear?',
        answer:
          'Winter, generally. The brush is dormant, the ground carries equipment better than the summer cracks suggest, and it falls outside the spring nesting season, which matters if you are clearing mature juniper woodland in Bosque County. That said, we clear year round, and fence schedules do not always wait for January.',
      },
    ],
    guides: [
      { href: '/blog/clearing-fence-line-brush/', label: 'Clearing a Fence Line: Brush, Trees, and Right-of-Way Basics' },
      { href: '/blog/storm-damaged-fence-repair/', label: 'Storm Damaged Fence Repair: What to Do in the First 24 Hours' },
      { href: '/blog/ranch-fence-maintenance-checklist/', label: 'The Annual Ranch Fence Maintenance Checklist Every Central Texas Rancher Needs' },
      { href: '/blog/fence-posts-in-rocky-ground/', label: 'Setting Fence Posts in Rocky Ground West of Waco: What Actually Works' },
    ],
    ctaHeading: 'Get a Real Number on Your Fence Line.',
    contactHeading: 'Send Us the Line. We Will Come Look at the Brush.',
  },
};
