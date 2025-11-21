import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site';
import { CTAButton } from '@/components/CTAButton';

export const metadata = buildMetadata(
  'Hair services in Pine Bush, NY | Hair by Anjali',
  'Hair services in Pine Bush, NY including haircutting, color, balayage, and bridal styling designed for Hudson Valley lifestyles. Transparent pricing and a waitlist while licensure finalizes.',
  '/services'
);

const serviceCards = [
  {
    title: 'Haircut & healthy shaping',
    href: '/services/haircut-pine-bush-ny',
    description: 'Precision meets softness so your cut air-dries beautifully in Pine Bush humidity.',
    price: siteConfig.pricing.haircut
  },
  {
    title: 'Hair color & gray blending',
    href: '/services/hair-color-pine-bush-ny',
    description: 'Glosses and gray-blending tailored to Hudson Valley well water and busy commutes.',
    price: siteConfig.pricing.color
  },
  {
    title: 'Balayage & lived-in light',
    href: '/services/balayage-pine-bush-ny',
    description: 'Sunlit, low-maintenance dimension that grows out seamlessly between seasons.',
    price: siteConfig.pricing.balayage
  },
  {
    title: 'Bridal hair across the Hudson Valley',
    href: '/services/bridal-hair-hudson-valley',
    description: 'Calm, on-time styling for barns, vineyards, and Catskill-view ceremonies.',
    price: siteConfig.pricing.bridal
  }
];

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Hair services in Pine Bush, NY</h1>
          <p className="text-gray-700 text-lg">
            Each service is personalized for the way you live in Pine Bush, Montgomery, and Walden—considering humidity, well
            water, and how often you realistically return for maintenance. Booking officially opens when New York licensure is
            complete, and the waitlist ensures you are first to claim a seat.
          </p>
          <p className="text-gray-700">
            Pricing is listed as starting rates so you can plan transparently. During your consultation Anjali will map the plan,
            timeline, and home care so results stay shiny between visits whether you are commuting to Middletown or hiking
            Minnewaska.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceCards.map((card) => (
            <Link key={card.href} href={card.href} className="card block hover:-translate-y-0.5 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-brand-dark">{card.title}</h2>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
                <span className="badge">{card.price}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">Tap to read the full Pine Bush-specific process and FAQs.</p>
            </Link>
          ))}
        </div>
        <div className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">How appointments work</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Join the waitlist with your goals, photos, and schedule needs.</li>
            <li>Anjali replies with a consult time as licensure finalizes.</li>
            <li>We confirm the plan, timing, and budget before you commit.</li>
            <li>You receive a prep guide tailored to Pine Bush humidity and well water.</li>
          </ol>
          <CTAButton href="/book" label="Join the waitlist" />
        </div>
      </div>
    </div>
  );
}
