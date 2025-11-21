export const siteConfig = {
  name: 'Hair by Anjali',
  description:
    'Pine Bush hairstylist crafting soft lived-in color, healthy cuts, and wedding hair with a warm Hudson Valley touch.',
  url: 'https://hairbyanjali.com',
  defaultImage: '/images/og-default.svg',
  address: {
    street: 'Coming soon to Pine Bush, NY',
    city: 'Pine Bush',
    region: 'NY',
    postalCode: '12566'
  },
  contact: {
    phone: '(845) 555-2025',
    email: 'hello@hairbyanjali.com'
  },
  serviceAreas: ['Pine Bush', 'Montgomery', 'Walden', 'Bloomingburg', 'Hudson Valley'],
  socials: {
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
    facebook: 'https://www.facebook.com/'
  },
  booking: {
    waitlistUrl: 'https://formspree.io/f/maykyobe',
    calendly: 'https://calendly.com/'
  },
  googleBusinessProfileUrl: 'https://www.google.com/maps',
  pricing: {
    haircut: 'starting at $85',
    color: 'starting at $165',
    balayage: 'starting at $225',
    bridal: 'custom quotes for Hudson Valley weddings'
  }
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Book', href: '/book' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
];
