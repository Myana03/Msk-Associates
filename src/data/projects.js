/**
 * Centralised project catalogue for the "Projects" section.
 *
 * Images live under public/projects/<category>/<slug>/ as web-optimised JPEGs
 * (cover.jpg for cards, NN.jpg for the lightbox). The UI renders entirely from
 * this data — add a project here and it appears in the gallery + filters.
 *
 * These are the firm's own on-site photographs documenting real structural
 * work (foundations → RCC frames → structures). Titles are generic and
 * professional; completionYear is derived from the photo dates, omitted where
 * the source didn't carry reliable dates.
 */

// Build an explicit gallery array from the sequential NN.jpg files.
const g = (bp, n) =>
  Array.from({ length: n }, (_, i) => `${bp}/${String(i + 1).padStart(2, '0')}.jpg`);

const base = (cat, slug) => `/projects/${cat}/${slug}`;

// Category metadata — order defines filter order.
export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'coming-soon', label: 'Coming Soon' },
];

export const projects = [
  {
    id: 'triplex-residence',
    title: 'Triplex Residence',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'triplex-residence')}/cover.jpg`,
    gallery: g(base('residential', 'triplex-residence'), 6),
    description:
      'A three-storey triplex home — RCC frame, cantilevered floors, and staged brickwork executed under continuous site supervision.',
    featured: true,
    completionYear: 2024,
  },
  {
    id: 'apartment-tower',
    title: 'Apartment Tower',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'apartment-tower')}/cover.jpg`,
    gallery: g(base('residential', 'apartment-tower'), 6),
    description:
      'A multi-storey apartment tower taken from foundation to a fully framed structure — column-line planning and slab casting to IS-code standards.',
    featured: true,
  },
  {
    id: 'modern-residence',
    title: 'Modern Residence',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'modern-residence')}/cover.jpg`,
    gallery: g(base('residential', 'modern-residence'), 6),
    description:
      'An independent family home — structural design, foundation, and RCC framing delivered from first drawing to finished shell.',
    featured: true,
    completionYear: 2025,
  },
  {
    id: 'apartment-residences',
    title: 'Apartment Residences',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'apartment-residences')}/cover.jpg`,
    gallery: g(base('residential', 'apartment-residences'), 6),
    description:
      'A residential apartment development — deep foundations, retaining works, and repetitive floor-plate framing across a tight urban plot.',
    featured: false,
    completionYear: 2024,
  },
  {
    id: 'row-houses',
    title: 'Row Houses',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'row-houses')}/cover.jpg`,
    gallery: g(base('residential', 'row-houses'), 6),
    description:
      'A terrace of matched row houses — shared structural grid and party-wall detailing built to a single, consistent standard.',
    featured: true,
    completionYear: 2024,
  },
  {
    id: 'contemporary-residence',
    title: 'Contemporary Residence',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'contemporary-residence')}/cover.jpg`,
    gallery: g(base('residential', 'contemporary-residence'), 6),
    description:
      'A private residence documented through active slab concreting — every pour supervised for quality and alignment.',
    featured: false,
    completionYear: 2026,
  },
  {
    id: 'duplex-home',
    title: 'Duplex Home',
    category: 'residential',
    location: 'Warangal, Telangana',
    coverImage: `${base('residential', 'duplex-home')}/cover.jpg`,
    gallery: g(base('residential', 'duplex-home'), 3),
    description:
      'A duplex residence — foundation and structural assessment adjacent to existing built context on a constrained site.',
    featured: false,
    completionYear: 2025,
  },
  {
    id: 'commercial-complex',
    title: 'Commercial Complex',
    category: 'commercial',
    location: 'Warangal, Telangana',
    coverImage: `${base('commercial', 'commercial-complex')}/cover.jpg`,
    gallery: g(base('commercial', 'commercial-complex'), 6),
    description:
      'A large-span commercial complex — extensive propped slabs and long clear spans engineered for open retail floor plates.',
    featured: true,
    completionYear: 2023,
  },
  {
    id: 'mixed-use-commercial',
    title: 'Mixed-Use Commercial',
    category: 'commercial',
    location: 'Warangal, Telangana',
    coverImage: `${base('commercial', 'mixed-use-commercial')}/cover.jpg`,
    gallery: g(base('commercial', 'mixed-use-commercial'), 6),
    description:
      'A mixed-use commercial build — excavation and foundation works threaded carefully between neighbouring structures.',
    featured: false,
    completionYear: 2024,
  },
  {
    id: 'commercial-development',
    title: 'Commercial Development',
    category: 'commercial',
    location: 'Warangal, Telangana',
    coverImage: `${base('commercial', 'commercial-development')}/cover.jpg`,
    gallery: g(base('commercial', 'commercial-development'), 6),
    description:
      'A commercial development — foundation layout, column starters, and material logistics coordinated across an active site.',
    featured: false,
    completionYear: 2026,
  },
  {
    id: 'commercial-block',
    title: 'Commercial Block',
    category: 'commercial',
    location: 'Warangal, Telangana',
    coverImage: `${base('commercial', 'commercial-block')}/cover.jpg`,
    gallery: g(base('commercial', 'commercial-block'), 6),
    description:
      'A commercial block with basement — deep excavation, shoring, and reinforced retaining walls against adjacent buildings.',
    featured: false,
    completionYear: 2022,
  },
  {
    id: 'fuel-station',
    title: 'Fuel Station',
    category: 'commercial',
    location: 'Warangal, Telangana',
    coverImage: `${base('commercial', 'fuel-station')}/cover.jpg`,
    gallery: g(base('commercial', 'fuel-station'), 6),
    description:
      'A fuel-station forecourt — isolated column footings and canopy foundations set out across a wide, open site.',
    featured: false,
  },
];

// Upcoming work — rendered as elegant placeholder cards under "Coming Soon".
export const comingSoon = [
  { id: 'cs-residential-enclave', title: 'Residential Enclave', typeLabel: 'Residential', location: 'Warangal, Telangana', completionYear: 2026 },
  { id: 'cs-corporate-workspace', title: 'Corporate Workspace', typeLabel: 'Commercial', location: 'Hanamakonda, Telangana', completionYear: 2026 },
  { id: 'cs-institutional-campus', title: 'Institutional Campus', typeLabel: 'Institutional', location: 'Telangana', completionYear: 2027 },
];

// Categories surfaced as filters: 'all' + any category that has real projects,
// plus 'coming-soon' (always shown, backed by placeholder cards).
export const activeCategories = CATEGORIES.filter(
  (c) => c.id === 'all' || c.id === 'coming-soon' || projects.some((p) => p.category === c.id)
);

export const featuredProjects = projects.filter((p) => p.featured);
