import { buildMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site';
import { CTAButton } from '@/components/CTAButton';

export const metadata = buildMetadata(
  'Book a hairstylist in Pine Bush, NY | Hair by Anjali',
  'Join the Pine Bush waitlist for haircuts, color, balayage, or bridal styling with Anjali. Booking opens when NY licensure finalizes.',
  '/book'
);

const formAction = siteConfig.booking.waitlistUrl;

export default function BookPage() {
  return (
    <div className="section">
      <div className="container-box grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-brand-dark">Request an appointment</h1>
          <p className="text-gray-700 text-lg">
            Licensure is being finalized now. Join the waitlist so you receive the first Pine Bush appointment openings for
            haircuts, color, balayage, or bridal styling.
          </p>
          <p className="text-gray-700">
            What happens next: you’ll get a confirmation email, a short consultation link, and timing options once the license is
            active. Nothing is scheduled until you approve the plan.
          </p>
          <CTAButton href="/services" label="See service menu" variant="ghost" />
        </div>
        <form action={formAction} method="POST" className="card space-y-4">
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Name</label>
            <input required name="name" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Email</label>
            <input
              required
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Phone</label>
            <input name="phone" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Service interest</label>
            <select name="service" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2">
              <option>Haircut</option>
              <option>Hair color / gray blending</option>
              <option>Balayage</option>
              <option>Bridal styling</option>
              <option>Unsure—need guidance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Preferred days / times</label>
            <input name="timing" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark">Notes</label>
            <textarea name="notes" rows={4} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2" />
          </div>
          <button type="submit" className="btn-primary w-full">Join waitlist</button>
          <p className="text-xs text-gray-600">
            By submitting you agree to be contacted about Pine Bush appointment openings. No charges are made until services are
            confirmed post-licensure.
          </p>
        </form>
      </div>
    </div>
  );
}
