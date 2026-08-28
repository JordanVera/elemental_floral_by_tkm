export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  metaDescription: string;
  headline: string;
  intro: string;
  body: string;
  highlights: string[];
  popularVenues: string[];
  services: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'houston',
    name: 'Houston',
    region: 'Central Houston',
    heroImage: '/hero/hero-1.webp',
    metaDescription:
      'Custom wedding and event florals in Houston, TX. Elemental Floral By TKM Designs creates bridal bouquets, ceremony installations, and reception centerpieces across Inner Loop and Greater Houston.',
    headline: 'Houston Wedding & Event Florals',
    intro:
      'From downtown loft weddings to ballroom celebrations in River Oaks and Montrose, Houston couples trust Elemental Floral By TKM Designs to bring bold, personalized florals to every part of the city. Led by Tawnya Morse, our studio designs for the full event — ceremony arches, bridal party flowers, reception tablescapes, and statement installations.',
    body:
      'Houston\'s diverse venue landscape means no two celebrations look the same, and that\'s exactly how we like it. Whether you\'re planning an intimate garden ceremony in the Heights or a grand reception near the Galleria, we tailor every stem, palette, and texture to your vision. Delivery, setup, and strike are included so you can focus on the moment — not the logistics.',
    highlights: [
      'Full-service wedding florals across Inner Loop Houston',
      'Ceremony arches, aisle petals, and altar installations',
      'Reception centerpieces and lounge floral styling',
      'Corporate events, galas, and milestone celebrations',
      'Consultations available at our Houston studio',
    ],
    popularVenues: [
      'The Houstonian Hotel',
      'The Corinthian',
      'The Astorian',
      'Hotel ZaZa Houston Museum District',
      'The Post Oak Hotel',
    ],
    services: [
      'Bridal & bridesmaid bouquets',
      'Ceremony design & installations',
      'Reception centerpieces',
      'Event florals & corporate design',
    ],
  },
  {
    slug: 'katy',
    name: 'Katy',
    region: 'West Houston / Katy',
    heroImage: '/hero/hero-2.webp',
    metaDescription:
      'Wedding florist serving Katy, TX and surrounding communities. Custom floral design for Katy weddings, rehearsal dinners, and celebrations from Fulshear to Cinco Ranch.',
    headline: 'Katy Wedding Florals',
    intro:
      'Katy couples deserve florals as thoughtful as their celebrations — and Elemental Floral By TKM Designs has been designing weddings across Katy, Fulshear, and Cinco Ranch for years. From romantic garden-style bouquets to dramatic ceremony backdrops, we create cohesive floral stories that photograph beautifully and feel unmistakably yours.',
    body:
      'Many of our Katy clients choose venues with expansive outdoor spaces and natural light, and we lean into that with lush, organic arrangements and seasonal blooms. We travel throughout the Katy area for venue walkthroughs, delivery, and full setup — so whether your event is at a country club, a barn venue, or a backyard celebration, your florals arrive fresh and styled to perfection.',
    highlights: [
      'Wedding florals throughout Katy and Fulshear',
      'Garden-style and classic romantic design expertise',
      'On-site delivery, setup, and breakdown',
      'Rehearsal dinner and welcome party florals',
      'Flexible design revisions leading up to your date',
    ],
    popularVenues: [
      'The Springs Events — Katy',
      'Maison Picha',
      'The Bell Tower on 34th',
      'The Farmhouse',
      'Katy-area country clubs & private estates',
    ],
    services: [
      'Wedding bouquets & personal flowers',
      'Outdoor ceremony florals',
      'Reception table design',
      'Rehearsal dinner arrangements',
    ],
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    region: 'Northwest Houston',
    heroImage: '/hero/hero-3.webp',
    metaDescription:
      'Cypress, TX wedding florist for custom bridal flowers, ceremony design, and reception installations. Serving Northwest Houston couples and event hosts.',
    headline: 'Cypress Wedding & Event Florals',
    intro:
      'Northwest Houston is home to some of the area\'s most beautiful wedding venues — and Elemental Floral By TKM Designs is proud to serve Cypress, Fairfield, and surrounding communities with full-service floral design. Tawnya Morse works closely with each couple to translate their aesthetic into florals that feel elevated, personal, and perfectly suited to the venue.',
    body:
      'Cypress weddings often blend rustic charm with modern elegance, and our designs reflect that balance. Think soft garden roses paired with architectural greenery, or bold statement pieces for open-air ceremonies under Texas skies. We handle every detail from the first consultation through final installation, ensuring your flowers look as stunning at the end of the night as they did at the start.',
    highlights: [
      'Serving Cypress, Fairfield, and Northwest Houston',
      'Rustic, garden, and modern floral styles',
      'Ceremony and reception packages available',
      'Coordination with Cypress-area planners & photographers',
      'Seasonal bloom guidance for Texas weddings',
    ],
    popularVenues: [
      'The Falls Event Venue',
      'The Springs Events — Cypress',
      'The Red Barn',
      'Northwest Houston country clubs',
      'Private estates & backyard venues',
    ],
    services: [
      'Custom wedding floral design',
      'Ceremony arches & aisle decor',
      'Reception centerpieces & garlands',
      'Bridal party flowers',
    ],
  },
  {
    slug: 'the-woodlands',
    name: 'The Woodlands',
    region: 'North Houston',
    heroImage: '/hero/hero-4.webp',
    metaDescription:
      'The Woodlands wedding florist for luxury floral design. Bridal bouquets, ceremony installations, and reception florals for Woodlands weddings and events.',
    headline: 'The Woodlands Wedding Florals',
    intro:
      'The Woodlands sets a high bar for elegance — and your florals should meet it. Elemental Floral By TKM Designs creates refined, luxurious arrangements for Woodlands weddings at country clubs, waterfront venues, and boutique event spaces throughout the community. Every design is built around your palette, venue architecture, and the atmosphere you want guests to feel.',
    body:
      'From cascading bridal bouquets to towering ceremony installations, we specialize in florals that complement The Woodlands\' natural beauty and upscale venue settings. Our team travels north from Houston for site visits and full event-day service, bringing the same attention to detail that has earned us glowing reviews from couples across Greater Houston.',
    highlights: [
      'Luxury wedding florals for The Woodlands',
      'Waterfront and country club venue experience',
      'Large-scale ceremony installations',
      'Cohesive bridal party and reception design',
      'Full delivery, setup, and strike included',
    ],
    popularVenues: [
      'The Woodlands Resort',
      'The Woodlands Country Club',
      'The Springs Events — The Woodlands',
      'The Grogan\'s Mill area venues',
      'Private Woodlands estates',
    ],
    services: [
      'Luxury bridal florals',
      'Statement ceremony pieces',
      'Reception centerpieces & tablescapes',
      'Corporate & social event design',
    ],
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    region: 'Fort Bend County',
    heroImage: '/hero/hero-1.webp',
    metaDescription:
      'Sugar Land, TX wedding florist offering custom bridal flowers, ceremony design, and reception florals. Serving Fort Bend County celebrations.',
    headline: 'Sugar Land Wedding Florals',
    intro:
      'Sugar Land and Fort Bend County couples choose Elemental Floral By TKM Designs for florals that feel both polished and deeply personal. Whether you\'re celebrating at a historic venue, a modern hotel ballroom, or an outdoor garden setting, we design cohesive floral packages that tie your entire event together — from the first look to the last dance.',
    body:
      'Fort Bend weddings often bring together families from across Houston, and we love designing florals that honor tradition while still feeling fresh and contemporary. Our Sugar Land clients appreciate our flexible consultation process, transparent communication, and ability to adapt designs as plans evolve — a must when coordinating multi-day celebrations.',
    highlights: [
      'Wedding florals throughout Sugar Land & Fort Bend',
      'Multi-cultural and fusion wedding experience',
      'Hotel ballroom and garden venue styling',
      'Welcome party and rehearsal dinner florals',
      'Personalized consultations with Tawnya Morse',
    ],
    popularVenues: [
      'Sugar Land Marriott Town Square',
      'The Springs Events — Brookshire',
      'Fort Bend country clubs',
      'Historic Sugar Land venues',
      'Private home & garden celebrations',
    ],
    services: [
      'Full wedding floral packages',
      'Ceremony & reception design',
      'Bridal party flowers',
      'Event & milestone celebration florals',
    ],
  },
  {
    slug: 'pearland',
    name: 'Pearland',
    region: 'South Houston',
    heroImage: '/hero/hero-2.webp',
    metaDescription:
      'Pearland, TX wedding florist for custom floral design. Bridal bouquets, ceremony flowers, and reception installations for South Houston weddings.',
    headline: 'Pearland Wedding & Event Florals',
    intro:
      'South Houston couples in Pearland and nearby communities turn to Elemental Floral By TKM Designs for wedding florals that are vibrant, romantic, and expertly executed. We design for every scale — from intimate gatherings to large receptions — with the same care and creativity that defines our work across the metro area.',
    body:
      'Pearland\'s growing venue scene offers wonderful options for couples who want a celebration close to home without sacrificing style. We partner with local planners and photographers to ensure florals complement your overall design, and our delivery team knows the South Houston corridor well — so your flowers arrive on time and installation runs smoothly.',
    highlights: [
      'Serving Pearland and South Houston',
      'Intimate and large-scale wedding experience',
      'Bright, romantic, and classic design styles',
      'Reliable delivery throughout the south corridor',
      'Flexible packages for every budget tier',
    ],
    popularVenues: [
      'Pearland-area event venues',
      'South Houston country clubs',
      'Backyard & garden weddings',
      'Church and chapel ceremonies',
      'Reception halls throughout Pearland',
    ],
    services: [
      'Wedding bouquet design',
      'Ceremony florals & pew arrangements',
      'Reception centerpieces',
      'Delivery & professional setup',
    ],
  },
  {
    slug: 'spring',
    name: 'Spring',
    region: 'North Houston',
    heroImage: '/hero/hero-3.webp',
    metaDescription:
      'Spring, TX wedding florist serving North Houston. Custom bridal flowers, ceremony installations, and reception design for Spring and Klein area weddings.',
    headline: 'Spring Wedding Florals',
    intro:
      'The Spring and Klein area is one of Greater Houston\'s most active wedding markets — and Elemental Floral By TKM Designs is here with full-service floral design for every celebration. From romantic soft palettes to bold, dramatic installations, we create florals that reflect your personality and elevate your venue.',
    body:
      'North Houston venues range from rustic barn settings to elegant ballrooms, and our portfolio spans all of them. We take pride in listening closely during consultations, offering honest guidance on bloom selection and seasonality, and delivering designs that exceed expectations on the day of your event. Travel to Spring is seamless from our Houston studio.',
    highlights: [
      'Wedding florals in Spring, Klein, and North Houston',
      'Barn, ballroom, and outdoor venue expertise',
      'Seasonal Texas bloom recommendations',
      'Ceremony-to-reception cohesive design',
      'Trusted by North Houston planners & couples',
    ],
    popularVenues: [
      'The Springs Events — Klein',
      'North Houston barn venues',
      'Champions area country clubs',
      'Church ceremonies with off-site receptions',
      'Private North Houston estates',
    ],
    services: [
      'Complete wedding floral design',
      'Ceremony backdrops & aisle decor',
      'Reception styling & centerpieces',
      'Bridal party & family flowers',
    ],
  },
  {
    slug: 'memorial-west-houston',
    name: 'Memorial & West Houston',
    region: 'West Houston / Energy Corridor',
    heroImage: '/hero/hero-4.webp',
    metaDescription:
      'Memorial and West Houston wedding florist near the Energy Corridor. Custom wedding florals, ceremony design, and event flowers for West Houston celebrations.',
    headline: 'Memorial & West Houston Florals',
    intro:
      'Based on Park Row Drive in West Houston, Elemental Floral By TKM Designs is deeply rooted in the Memorial, Energy Corridor, and Westchase communities. Couples in this area benefit from our proximity — easy studio visits, quick venue walkthroughs, and a team that knows West Houston\'s premier wedding venues inside and out.',
    body:
      'Memorial-area weddings often feature sophisticated, classic aesthetics — think timeless whites and greens, lush garden roses, and refined tablescapes that feel both luxurious and inviting. As a local West Houston studio, we offer a level of accessibility and personal service that out-of-area florists simply can\'t match. Stop by for a consultation and see why couples across the corridor choose Tawnya Morse for their most important day.',
    highlights: [
      'Local West Houston studio on Park Row Drive',
      'Memorial, Energy Corridor & Westchase service',
      'In-person consultations at our showroom',
      'Classic, luxe, and garden-inspired design',
      'Fast response times for West Houston clients',
    ],
    popularVenues: [
      'Memorial-area country clubs',
      'Energy Corridor hotels & ballrooms',
      'West Houston private clubs',
      'The Galleria-area event spaces',
      'Backyard weddings in Memorial Villages',
    ],
    services: [
      'Wedding florals & event design',
      'In-studio design consultations',
      'Ceremony & reception packages',
      'Same-day coordination support',
    ],
  },
];

export const SERVICE_AREAS_INDEX = {
  label: 'Service Areas',
  href: '/service-areas',
};

export function getServiceArea(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export function getAdjacentServiceAreas(slug: string) {
  const index = SERVICE_AREAS.findIndex((area) => area.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const last = SERVICE_AREAS.length - 1;
  return {
    prev: SERVICE_AREAS[index === 0 ? last : index - 1],
    next: SERVICE_AREAS[index === last ? 0 : index + 1],
  };
}
