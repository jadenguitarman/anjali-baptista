export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'hudson-valley-hair-care-tips',
    title: 'Hudson Valley hair care tips for humid summers',
    description: 'Local strategies to keep color glossy and frizz-free in Pine Bush humidity.',
    date: '2024-07-15',
    content:
      'Hudson Valley summers bring thick air and surprise thunderstorms. To keep color luminous, rinse with cool water, add a weekly chelating wash to clear minerals from well water, and seal ends with a light serum. Clients near Pine Bush and Walden often commute or spend time outdoors; a silk scrunchie and UV protectant spray preserve brightness without buildup. When your schedule is slammed, book a gloss refresh before festival season—Anjali keeps formulas gentle so hair stays healthy while you enjoy the Bashakill sunsets.'
  },
  {
    slug: 'wedding-hair-timeline-hudson-valley',
    title: 'Wedding hair timeline for Hudson Valley brides',
    description: 'A stress-free bridal hair checklist for venues across Pine Bush, Montgomery, and beyond.',
    date: '2024-05-20',
    content:
      'Start bridal hair planning six months out if you are hosting at a Hudson Valley barn or vineyard. Book a consultation as soon as Anjali is ready to accept trial appointments; share veil details, weather plans, and photos taken around Pine Bush golden hour to match the tone. Two months before, align color and trim so your ends are polished but not overtextured. The week of, use lightweight moisture masks and clarify 48 hours before the style. On wedding day, Anjali builds humidity-resistant foundations and arrives early so your bridal party enjoys a calm, organized timeline.'
  },
  {
    slug: 'low-maintenance-color-for-busy-moms',
    title: 'Best low-maintenance color for busy moms in Pine Bush',
    description: 'Soft grow-out strategies that match school drop-offs, rec games, and office commutes.',
    date: '2024-06-10',
    content:
      'Pine Bush moms juggle school pickups, soccer at Benedict Park, and quick Target runs in Middletown. Lived-in balayage or rich espresso glosses give dimension without six-week touchups. Anjali formulas emphasize bond care and gentle developers to keep hair strong even when you skip weekly treatments. Ask for a face-framing refresh every 10–12 weeks and a seasonal gloss to keep tones balanced against Hudson Valley well water. The result: polished, approachable color that fits your life and still photographs beautifully.'
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
