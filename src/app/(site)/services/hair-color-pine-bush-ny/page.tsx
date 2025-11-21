import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';
import { siteConfig } from '@/config/site';

export const metadata = buildMetadata(
  'Hair color in Pine Bush, NY | Glosses & gray blending',
  'Hair color in Pine Bush, NY with scalp-safe formulas, gray blending, and shine that holds against Hudson Valley well water. Join the waitlist while licensure finalizes.',
  '/services/hair-color-pine-bush-ny'
);

export default function HairColorPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Hair color in Pine Bush, NY</h1>
          <p className="text-gray-700 text-lg">
            Healthy hair color should feel soft, look natural in Hudson Valley sunlight, and stay true even with Pine Bush well
            water. Anjali focuses on gentle formulas, thorough consultations, and aftercare that fits your schedule.
          </p>
          <p className="text-gray-700">
            Licensure is nearing completion—join the waitlist to be first in line once the license is finalized. Until then,
            consultations map your formula, maintenance, and timing so day one runs smoothly.
          </p>
        </header>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">What this service is</h2>
          <p className="text-gray-700">
            Custom color services include gray blending, luminous single-process coverage, toning and glossing, root tapping,
            and multi-dimensional color that complements Pine Bush sunsets. Formulas are chosen for scalp comfort and longevity,
            keeping hair silky even when humidity spikes or hats flatten your style.
          </p>
          <p className="text-gray-700">
            Water in Montgomery and Walden can deposit minerals that dull tone. Sessions start with a chelating pre-cleanse and
            end with a sealing glaze so your shine lasts longer between visits.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Who it’s for</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Professionals wanting soft gray blending without harsh grow-out lines.</li>
            <li>Clients sensitive to ammonia-heavy color who need scalp-aware options.</li>
            <li>Busy parents seeking low-maintenance shine with seasonal gloss refreshes.</li>
            <li>People new to color who want honest guidance and healthy-first pacing.</li>
          </ul>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Anjali’s approach</h2>
          <p className="text-gray-700">
            Expect a detailed consult with photos of your current color in Pine Bush daylight and indoor light. Anjali reviews
            your past formulas, scalp sensitivities, and styling habits. She formulates for softness first, using bond builders
            where needed and low-heat processing to protect integrity. Every gloss is tuned to Hudson Valley lighting so brunettes
            stay rich and blondes stay creamy—not brassy.
          </p>
          <p className="text-gray-700">
            Education includes a simple care plan: mineral filters for your shower, weekly gentle clarifying, and heat settings
            that won’t strip moisture. You leave knowing exactly when to return before tone shifts too far.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Typical timing + maintenance</h2>
          <p className="text-gray-700">
            Single-process or gray blending: 90–120 minutes with finish. Gloss refresh: 45–60 minutes. Most Pine Bush clients
            maintain every 6–10 weeks depending on grow-out speed and how bright they prefer to stay.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">How to prepare</h2>
          <p className="text-gray-700">
            Come with clean, dry hair and avoid heavy oils 24 hours before your appointment so color processes evenly. If you
            have well water, bring a list of any existing filters; Anjali may recommend a temporary clarifying routine to start
            removing minerals before your visit. Please share past formulas or photos so we can protect your hair history while
            moving toward your goal.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Aftercare for Pine Bush weather</h2>
          <p className="text-gray-700">
            To keep tone true between visits, use sulfate-free, pH-balanced shampoos and a mineral filter in your shower. Limit
            heat to medium settings, apply UV protection when spending the day outdoors near the Shawangunks, and schedule quick
            glosses before major events. A weekly moisture mask restores softness after time in the sun or when indoor heat dries
            the air.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Price range</h2>
          <p className="text-gray-700">
            Color services are {siteConfig.pricing.color}. Extra bowls or extended timing for transformative changes will be
            reviewed with you before booking so pricing remains transparent.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">FAQs</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-semibold text-brand-dark">Will my gray be fully covered?</h3>
              <p>
                Coverage and blending are customized. If you prefer a soft grow-out, we blend; if you want solid coverage, we
                formulate for that while protecting shine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">How do you prevent brass?</h3>
              <p>
                Chelating removes minerals, cool-gold mixes keep warmth refined, and take-home care includes pH-balanced shampoos
                that fight Hudson Valley water.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Is scalp sensitivity considered?</h3>
              <p>
                Absolutely. Anjali selects gentle developers, patch tests when needed, and keeps ventilation comfortable. Your
                comfort is prioritized alongside your color goals.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book" label="Request color waitlist" />
          <CTAButton href="/services" label="Back to services" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
