import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';
import { siteConfig } from '@/config/site';

export const metadata = buildMetadata(
  'Haircut in Pine Bush, NY | Healthy shaping by Anjali',
  'Haircut in Pine Bush, NY focused on healthy shaping, soft texture, and low-maintenance grow-out for Hudson Valley humidity. Join the waitlist while licensure finalizes.',
  '/services/haircut-pine-bush-ny'
);

export default function HaircutPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Haircut in Pine Bush, NY</h1>
          <p className="text-gray-700 text-lg">
            Your haircut should keep up with Pine Bush humidity, Hudson Valley wind, and real life schedules. Anjali blends
            precision sectioning with soft razor finishing so hair air-dries beautifully and grows out with intention.
          </p>
          <p className="text-gray-700">
            Because New York licensure is in progress, you can join the waitlist now and receive your appointment options as soon
            as the license is finalized. Until then, virtual consultations cover goals, routine, and home care so your first cut
            is already mapped.
          </p>
        </header>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">What this service is</h2>
          <p className="text-gray-700">
            Haircuts are designed for movement and longevity. We consider how your hair reacts to Pine Bush well water, how often
            you heat style, and how your layers fall under hats or wedding veils. Anjali favors soft, blended layers, precise
            one-length bases when needed, and fringe detailing that frames your features without fighting cowlicks.
          </p>
          <p className="text-gray-700">
            Every appointment begins with a scalp check and mini detox to clear mineral buildup common across Walden and
            Montgomery. This helps the shape sit cleaner and keeps color shining longer if you combine services.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Who it’s for</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Busy Hudson Valley professionals who want polished wash-and-wear hair between Metro-North commutes.</li>
            <li>Pine Bush parents needing quick styling before school drop-off and weekend sports.</li>
            <li>Bridal clients prepping their base cut before trials and extensions.</li>
            <li>Anyone recovering from a heavy cut who needs movement restored without losing length.</li>
          </ul>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Anjali’s approach</h2>
          <p className="text-gray-700">
            Expect a collaborative consult with photos of how your hair behaves on humid Pine Bush mornings versus dry winter
            days. Anjali sets a plan for where layers begin, how weight is balanced, and whether hidden undercutting will remove
            bulk without sacrificing fullness. Cutting is done on clean, hydrated hair, then detailed on dry hair to see natural
            fall.
          </p>
          <p className="text-gray-700">
            Education is woven throughout—Anjali shows you a two-product styling routine that works whether you air-dry or blow
            out. She keeps tools gentle and avoids aggressive thinning so the grow-out stays healthy until your next visit.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Timing + maintenance</h2>
          <p className="text-gray-700">
            Haircuts typically run 60–75 minutes including a clarifying cleanse and moisture reset to counter well-water
            minerals. Most clients in Pine Bush and Montgomery maintain their shape every 8–12 weeks. Fringe detailing can be
            refreshed sooner and is included in your maintenance plan.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">How to prepare</h2>
          <p className="text-gray-700">
            Arrive with dry hair in its natural texture so Anjali can study movement and density. If you live in a hard-water
            area of Pine Bush, avoid heavy oils the week prior so detoxing is easier. Bring photos of your hair on humid and dry
            days plus inspiration that feels realistic for your lifestyle. A short intake form before your visit keeps the
            consult concise and focused on your goals.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">At-home care</h2>
          <p className="text-gray-700">
            You will leave with a simple routine tailored to your schedule. Most Pine Bush clients thrive with a chelating wash
            every other week, a lightweight leave-in for frizz control, and a soft-hold cream for air-drying. Heat styling tips
            include low tension, medium heat, and a cool shot to seal cuticles. Seasonal adjustments are provided so winter air
            and summer humidity do not undo your shape.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Price range</h2>
          <p className="text-gray-700">
            Haircuts are {siteConfig.pricing.haircut}. Prices stay transparent and adjust only if extra time is needed for
            significant restyles or added treatments. You will approve any changes before booking.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">FAQs</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <h3 className="font-semibold text-brand-dark">Can I combine a haircut with color?</h3>
              <p>
                Yes. Many Pine Bush clients schedule shaping after a gloss or balayage so ends are polished. We’ll plan timing to
                protect hair health and keep your day efficient.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">Do you cut curls?</h3>
              <p>
                Absolutely. Curls are cut with hydration and minimal tension to respect your pattern. Anjali shares product
                combos that fight Hudson Valley humidity without crunch.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark">What if my hair is damaged?</h3>
              <p>
                We prioritize strength first: chelating, bond support, and micro-trims to rebuild. Anjali will never overpromise
                length if it risks integrity.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book" label="Join the Pine Bush waitlist" />
          <CTAButton href="/services" label="Back to services" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
