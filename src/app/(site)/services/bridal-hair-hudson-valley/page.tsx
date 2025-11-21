import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';
import { siteConfig } from '@/config/site';

export const metadata = buildMetadata(
  'Bridal hair in the Hudson Valley | Calm, on-time styling',
  'Bridal hair in the Hudson Valley with calm, organized timelines for barns, vineyards, and mountain-view ceremonies. Join the Pine Bush waitlist while licensure finalizes.',
  '/services/bridal-hair-hudson-valley'
);

export default function BridalHairPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Bridal hair across the Hudson Valley</h1>
          <p className="text-gray-700 text-lg">
            Wedding mornings should feel calm. Anjali creates structured-yet-soft styles that hold through Hudson Valley humidity
            and dance floors, whether you marry in Pine Bush, Montgomery barns, or Catskill-view vineyards.
          </p>
          <p className="text-gray-700">
            Licensure is being finalized—reserve your spot on the waitlist so trials and timelines are ready as soon as the green
            light arrives.
          </p>
        </header>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">What this service is</h2>
          <p className="text-gray-700">
            Bridal styling includes consultation, inspiration curation, trial day, and wedding-day execution for you and your
            party. Looks range from clean buns with face-framing softness to boho braids that survive Hudson Valley breezes.
            Every style is built with humidity-resistant prep, secure pinning, and shine that photographs beautifully at golden
            hour.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Who it’s for</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Hudson Valley brides prioritizing a calm, punctual morning.</li>
            <li>Bridal parties with mixed textures seeking cohesive, flattering looks.</li>
            <li>Couples hosting at barns, vineyards, or mountaintop venues who need humidity-smart styling.</li>
            <li>Elopements that still want polished, camera-ready hair.</li>
          </ul>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Anjali’s approach</h2>
          <p className="text-gray-700">
            Anjali builds timelines backward from your photographer’s schedule, ensuring touch-ups happen before portraits. Trials
            include testing veil placement, hair accessories, and backup plans in case of rain or wind. She keeps a calm demeanor,
            quick hands, and an emergency kit with frizz control, pins, and mini touch-up tools.
          </p>
          <p className="text-gray-700">
            Communication is transparent: no overpromising on textures or longevity. If extensions or smoothing are needed, you’ll
            receive a clear recommendation with timing to protect hair health before the big day.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Timing + maintenance</h2>
          <p className="text-gray-700">
            Trials run 90–120 minutes so you can see and feel the style in Pine Bush lighting. Wedding-day timing depends on party
            size; expect 30–45 minutes per person with buffer built in so photos stay on schedule.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">How to prepare</h2>
          <p className="text-gray-700">
            Arrive to trials with clean, dry hair and bring your veil, accessories, or hair extensions if you plan to use them.
            Share venue details, ceremony timing, and photo locations so Anjali can plan for humidity, wind, or rain backup.
            Inspiration photos are welcome—she will translate them to your texture rather than copying blindly.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Day-of details</h2>
          <p className="text-gray-700">
            Expect an organized morning with a shared timeline for your party, buffer time before portraits, and touch-ups prior
            to walking down the aisle. Anjali travels across the Hudson Valley with a mobile kit including portable lighting,
            frizz control, and weather-ready products. She coordinates with your planner or photographer so you can enjoy the
            morning without watching the clock.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Price range</h2>
          <p className="text-gray-700">
            Bridal hair is {siteConfig.pricing.bridal}. Travel within Pine Bush, Montgomery, Walden, and nearby Hudson Valley
            venues is available with transparent fees confirmed before booking.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">FAQs</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-semibold text-brand-dark">Do you offer trials before licensure is finalized?</h3>
              <p>
                Trials are scheduled once licensure is complete to comply with New York regulations. You can still reserve your
                date and plan details now.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Can you coordinate with makeup?</h3>
              <p>
                Yes—Anjali happily partners with your makeup artist to keep the morning flowing. She builds the schedule with both
                teams to avoid bottlenecks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Do you work on-site?</h3>
              <p>
                Absolutely. On-site styling across Hudson Valley venues is available, with travel fees discussed upfront.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book" label="Hold my wedding date" />
          <CTAButton href="/services" label="Back to services" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
