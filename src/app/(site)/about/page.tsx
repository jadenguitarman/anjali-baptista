import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';

export const metadata = buildMetadata(
  'About Anjali | Pine Bush hairstylist',
  'Meet Anjali, a Pine Bush hairstylist building a Hudson Valley clientele with specialty color, healthy cuts, and calm bridal styling. Licensure finalizing soon—join the waitlist.',
  '/about'
);

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-dark">About Anjali</h1>
          <p className="text-gray-700 text-lg">
            I’m Anjali Baptista—a stylist who loves soft color, wearable cuts, and calm, detailed bridal mornings. After training
            in advanced color theory and assisting at a Hudson Valley salon, I’m settling into Pine Bush and finalizing my New
            York licensure so I can serve this community fully.
          </p>
          <p className="text-gray-700">
            I moved to Pine Bush for the slower pace and the chance to build long-term relationships with clients from Montgomery
            to Walden. I’m not claiming a finished salon seat yet—that will be announced once licensing is complete—but I’m ready
            to plan your look now so we hit the ground running.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {['Color specialty', 'Healthy hair first', 'Calm energy'].map((title, index) => (
            <div key={title} className="card">
              <h2 className="text-xl font-semibold text-brand-dark">{title}</h2>
              <p className="text-gray-700 mt-2">
                {index === 0 &&
                  'Lived-in blonding, gray blending, and rich brunettes tailored to Hudson Valley light so tones stay believable.'}
                {index === 1 &&
                  'Ingredient-conscious products, bond care, and realistic maintenance plans keep hair thriving between visits.'}
                {index === 2 &&
                  'My chair is a calm space—organized, communicative, and supportive so you can actually enjoy your appointment.'}
              </p>
            </div>
          ))}
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Credentials + continuing education</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced balayage and foil design courses focused on low-maintenance glow.</li>
            <li>Color theory training to neutralize Hudson Valley well-water brassiness.</li>
            <li>Bridal styling workshops emphasizing humidity-resistant prep and timing.</li>
            <li>Active study toward New York licensure—no services are claimed until it is finalized.</li>
          </ul>
          <p className="text-gray-700">
            I’m committed to ongoing education so Pine Bush clients always receive modern techniques and honest guidance.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="text-2xl font-semibold text-brand-dark">Why Pine Bush</h2>
          <p className="text-gray-700">
            Pine Bush offers the mix I love—open space, creative small businesses, and community pride. I want locals to have a
            stylist who respects their time, understands regional hair challenges, and celebrates the Hudson Valley aesthetic.
          </p>
          <p className="text-gray-700">
            When I’m not behind the chair, you’ll find me exploring local farm markets, testing hair routines after a hike, or
            building style guides that translate easily to everyday life.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book" label="Join the Pine Bush waitlist" />
          <CTAButton href="/services" label="View services" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
