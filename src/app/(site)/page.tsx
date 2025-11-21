import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { ImageWithAlt } from '@/components/ImageWithAlt';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  'Hairstylist in Pine Bush, NY | Hair by Anjali',
  'Hairstylist in Pine Bush, NY delivering soft lived-in color, healthy haircuts, and bridal styles with a warm Hudson Valley touch. Join the waitlist for appointments as licensure finalizes.',
  '/'
);

const services = [
  {
    title: 'Haircut & healthy shaping',
    href: '/services/haircut-pine-bush-ny',
    description: 'Tailored cuts that respect your texture and grow out softly between Pine Bush seasons.'
  },
  {
    title: 'Hair color & gray blending',
    href: '/services/hair-color-pine-bush-ny',
    description: 'Glossy, scalp-respecting formulas that stay true against Hudson Valley well water.'
  },
  {
    title: 'Balayage & lived-in light',
    href: '/services/balayage-pine-bush-ny',
    description: 'Sunlit dimension that looks natural at Walden farmers markets and school pick-ups.'
  },
  {
    title: 'Bridal hair across the Hudson Valley',
    href: '/services/bridal-hair-hudson-valley',
    description: 'Calm, organized styling for barns, vineyards, and Catskill-view ceremonies.'
  }
];

const townsServed = ['Pine Bush', 'Montgomery', 'Walden', 'Bloomingburg', 'Middletown', 'Campbell Hall'];

export default function HomePage() {
  return (
    <div>
      <section className="section bg-brand-secondary/60">
        <div className="container-box grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="badge mb-3 w-fit">Hudson Valley stylist</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">Hairstylist in Pine Bush, NY</h1>
            <p className="mt-4 text-lg text-gray-700">
              Based in Pine Bush and serving Montgomery, Walden, and the nearby Hudson Valley, Anjali specializes in soft
              lived-in color, healthy haircutting, and calm bridal styling. Booking opens as soon as New York licensure is
              finalized—join the waitlist now so your appointment is first in line.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/book" label="Join waitlist / request appointment" />
              <CTAButton href="/services" label="Explore services" variant="ghost" />
            </div>
            <p className="mt-3 text-sm text-gray-600">Clean, truthful beauty with a Pine Bush heartbeat.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="overflow-hidden rounded-2xl shadow-soft">
                <ImageWithAlt
                  src={`/images/gallery-${num}.svg`}
                  width={360}
                  height={240}
                  descriptiveAlt={`Pine Bush hair transformation ${num}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-box">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brand-dark">Services crafted for Hudson Valley lifestyles</h2>
              <p className="text-gray-700 mt-1">
                Every service is customized for Pine Bush humidity, well water, and the way you move through the Hudson Valley.
              </p>
            </div>
            <CTAButton href="/services" label="View all services" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="card block hover:-translate-y-0.5 transition">
                <h3 className="text-xl font-semibold text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-gray-700">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-secondary/60">
        <div className="container-box grid gap-8 md:grid-cols-2 items-start">
          <div className="card">
            <h3 className="text-xl font-semibold text-brand-dark">Before & after highlights</h3>
            <p className="text-gray-700 mt-2">
              Gentle lightening balanced with bond care means shine that lasts through Pine Bush summers. Swipe through recent
              transformations and imagine what a tailored plan could do for you.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((num) => (
                <ImageWithAlt
                  key={num}
                  src={`/images/before-after-${num}.svg`}
                  width={240}
                  height={200}
                  descriptiveAlt={`Before and after hair color in Pine Bush ${num}`}
                  className="rounded-xl"
                />
              ))}
            </div>
          </div>
          <div className="card space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark">Why Pine Bush clients choose Anjali</h3>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                <li>Careful consultations that respect your lifestyle, maintenance budget, and hair health.</li>
                <li>Formulas designed for Hudson Valley well water and humid summers.</li>
                <li>Transparent communication—no overpromising while licensure finalizes.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-dark">Towns served</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {townsServed.map((town) => (
                  <span key={town} className="badge">
                    {town}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-brand-dark">Testimonials</h4>
              <div className="space-y-3 text-gray-700">
                <p className="border-l-4 border-brand-primary pl-3 text-sm">
                  “Anjali listened to my hair history and gave me the softest grow-out. Worth the drive from Montgomery.” — L.
                </p>
                <p className="border-l-4 border-brand-primary pl-3 text-sm">
                  “The bridal trial felt like a calm rehearsal. She thought about humidity and wind at our Shawangunk overlook.” —
                  M.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-box grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-brand-dark">Healthy hair philosophy</h3>
            <p className="mt-3 text-gray-700">
              Hair by Anjali blends technical precision with gentle ingredients. From chelating well-water minerals to layer-by-
              layer lightening, every step is designed to keep hair touchable. Clients across Pine Bush, Walden, and Bloomingburg
              rely on easy-to-follow routines that work whether you are hiking Minnewaska or heading into the city.
            </p>
            <p className="mt-3 text-gray-700">
              Pricing is transparent and listed as starting rates: haircuts {siteConfig.pricing.haircut}; color services
              {siteConfig.pricing.color}; balayage {siteConfig.pricing.balayage}; bridal hair {siteConfig.pricing.bridal}. Final
              quotes are customized once the consultation confirms timing and product needs.
            </p>
            <div className="mt-4 flex gap-3">
              <CTAButton href="/book" label="Hold my spot" />
              <CTAButton href="/reviews" label="Read reviews" variant="ghost" />
            </div>
          </div>
          <div className="card space-y-3">
            <h4 className="font-semibold text-brand-dark">Quick FAQs</h4>
            <details className="rounded-lg border border-gray-200 p-3 bg-white" open>
              <summary className="font-medium">When will booking open?</summary>
              <p className="mt-2 text-gray-700 text-sm">
                Booking opens as soon as New York licensure is finalized. Join the waitlist and you will receive first access to
                Pine Bush appointment slots.
              </p>
            </details>
            <details className="rounded-lg border border-gray-200 p-3 bg-white">
              <summary className="font-medium">Do you travel for weddings?</summary>
              <p className="mt-2 text-gray-700 text-sm">
                Yes—Hudson Valley venues from Montgomery barns to Catskill overlooks are in range. Travel quotes are clear and
                scheduled to keep mornings calm.
              </p>
            </details>
            <details className="rounded-lg border border-gray-200 p-3 bg-white">
              <summary className="font-medium">Is this salon licensed?</summary>
              <p className="mt-2 text-gray-700 text-sm">
                Licensure is in progress. Until it is finalized, Anjali provides education, consults, and plans so you are ready
                to book legally and confidently.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
