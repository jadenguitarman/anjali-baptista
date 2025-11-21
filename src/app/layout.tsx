import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { navigation, siteConfig } from '@/config/site';
import Link from 'next/link';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { CTAButton } from '@/components/CTAButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hairstylist in Pine Bush, NY | Hair by Anjali',
  description:
    'Pine Bush hairstylist crafting soft lived-in color, healthy haircuts, and modern bridal styling for Hudson Valley clients.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Hairstylist in Pine Bush, NY | Hair by Anjali',
    description:
      'Pine Bush hairstylist crafting soft lived-in color, healthy haircuts, and modern bridal styling for Hudson Valley clients.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}${siteConfig.defaultImage}`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hairstylist in Pine Bush, NY | Hair by Anjali',
    description:
      'Pine Bush hairstylist crafting soft lived-in color, healthy haircuts, and modern bridal styling for Hudson Valley clients.',
    images: [`${siteConfig.url}${siteConfig.defaultImage}`]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="container-box flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold text-brand-dark">
              {siteConfig.name}
            </Link>
            <nav className="flex items-center gap-4 text-sm md:gap-6">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand-primary">
                  {item.label}
                </Link>
              ))}
              <CTAButton href="/book" label="Join waitlist" />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-brand-secondary mt-12">
          <div className="container-box py-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-brand-dark">{siteConfig.name}</h3>
              <p className="mt-3 text-sm text-gray-700">{siteConfig.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-dark">Contact</h4>
              <p className="text-sm text-gray-700 mt-2">{siteConfig.address.street}</p>
              <p className="text-sm text-gray-700">{`${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`}</p>
              <p className="text-sm text-gray-700 mt-2">{siteConfig.contact.phone}</p>
              <p className="text-sm text-gray-700">{siteConfig.contact.email}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-brand-dark">Follow + book</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href={siteConfig.socials.instagram}>Instagram</Link>
                <Link href={siteConfig.socials.tiktok}>TikTok</Link>
                <Link href={siteConfig.socials.facebook}>Facebook</Link>
              </div>
              <CTAButton href="/book" label="Request appointment" />
            </div>
          </div>
          <div className="container-box pb-8 text-xs text-gray-600">
            <p>
              Anjali is now building a Pine Bush clientele. Booking opens once New York licensure is finalized. No false
              claims—just honest, healthy hair.
            </p>
          </div>
        </footer>
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
