import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';
import { siteConfig } from '@/config/site';

export const metadata = buildMetadata(
  'Balayage in Pine Bush, NY | Lived-in highlights',
  'Balayage in Pine Bush, NY with sunlit, low-maintenance dimension tailored to Hudson Valley weather and well water. Waitlist now open while licensure finalizes.',
  '/services/balayage-pine-bush-ny'
);

export default function BalayagePage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Balayage in Pine Bush, NY</h1>
          <p className="text-gray-700 text-lg">
            Lived-in balayage keeps brightness where the Hudson Valley sun would naturally hit—cheeks, crown, and tips—without
            harsh grow-out lines. Anjali crafts tones that stay soft even through Pine Bush humidity and well water.
          </p>
          <p className="text-gray-700">
            Licensure is in progress. Join the waitlist now so your lightening plan is ready the moment appointments open.
          </p>
        </header>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">What this service is</h2>
          <p className="text-gray-700">
            Balayage sessions include hand-painted brightness, root tapping for seamless blending, glossing, and bond care. The
            goal is sunlit dimension that still looks polished at school pickups in Walden and date nights in New Paltz. Placement
            is customized to your haircut so layers and face-framing pieces pop without stripes.
          </p>
          <p className="text-gray-700">
            Every visit starts with a health check—if your hair needs strengthening, Anjali layers in bond builders and slower,
            gentler lifts to protect integrity.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Who it’s for</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Clients wanting bright yet believable lightness without six-week root touchups.</li>
            <li>Pine Bush parents juggling work and kids who need low-maintenance color that still photographs beautifully.</li>
            <li>Brides seeking soft dimension that supports updos across Hudson Valley venues.</li>
            <li>Anyone growing out older highlights who needs a reset with strategic placements.</li>
          </ul>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Anjali’s approach</h2>
          <p className="text-gray-700">
            Anjali paints in a mix of surface sweeps, babylights, and microfoils to control lift and avoid brass. She evaluates
            your natural undertone, skin tone, and favorite outfits—because the taupe sweater you wear to Pine Bush markets should
            harmonize with your hair. Each section is balanced with shadowed lows so the finish feels dimensional, not flat.
          </p>
          <p className="text-gray-700">
            After rinsing, a custom gloss seals tone and adds slip so frizz stays low even on humid Walden evenings. You’ll leave
            with a seasonal maintenance plan and a concise product list—no shelf clutter.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Timing + maintenance</h2>
          <p className="text-gray-700">
            Expect 2.5–3.5 hours depending on starting canvas and desired brightness. Most clients refresh face-framing pieces
            every 10–14 weeks, with a quick gloss at 6–8 weeks to keep tone creamy and healthy.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">How to prepare</h2>
          <p className="text-gray-700">
            Come with dry hair and avoid heavy oils for two days so lightener can work evenly. If you swim or use well water,
            clarify the week before your appointment to remove mineral buildup. Bring inspiration photos that reflect different
            lighting so we can tailor tone for both indoor and outdoor Hudson Valley settings.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Aftercare roadmap</h2>
          <p className="text-gray-700">
            Use a mineral filter, hydrate weekly, and protect hair from UV when enjoying summer hikes. Sleep on silk, keep heat
            tools on medium, and refresh glosses before big events. Anjali provides a seasonal schedule so your balayage stays
            reflective from Pine Bush winters to humid summers.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Price range</h2>
          <p className="text-gray-700">
            Balayage services are {siteConfig.pricing.balayage}. Exact quotes depend on density, length, and lift required. You
            will always approve the plan before booking.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">FAQs</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-semibold text-brand-dark">Will balayage damage my hair?</h3>
              <p>
                Anjali prioritizes slow, controlled lift with bond support and generous hydration. If hair needs a pre-treatment
                phase, she will outline it honestly before booking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">How do I fight brass at home?</h3>
              <p>
                Use mineral filters, limit hot water, and refresh with a gloss before brass appears. Anjali recommends gentle,
                pigment-safe shampoos to protect tone between Pine Bush appointments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Can balayage work for dark brunettes?</h3>
              <p>
                Yes—with thoughtful placement and controlled warmth, brunettes can enjoy dimensional ribbons without harsh lines.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book" label="Reserve balayage consult" />
          <CTAButton href="/services" label="Back to services" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
