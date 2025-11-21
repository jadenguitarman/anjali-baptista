import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  'Hair salon reviews in Pine Bush, NY | Hair by Anjali',
  'Read Pine Bush client reviews about healthy haircuts, color, and bridal styling by Anjali. Honest feedback from Hudson Valley locals.',
  '/reviews'
);

const reviews = [
  {
    name: 'Lauren, Montgomery',
    text: 'Anjali listened to my long hair goals and shaped it so it air-dries perfectly. I finally have movement without losing fullness.',
    service: 'Haircut + gloss'
  },
  {
    name: 'Maya, Pine Bush',
    text: 'She planned my balayage around humidity and well water. The grow-out is so soft that I can wait months between appointments.',
    service: 'Balayage'
  },
  {
    name: 'Sam, Walden',
    text: 'Our barn wedding morning felt calm and on schedule. Every style held up through photos and dancing.',
    service: 'Bridal styling'
  }
];

export default function ReviewsPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-dark">Reviews from Pine Bush clients</h1>
          <p className="text-gray-700 text-lg">
            Real words from neighbors across Pine Bush, Montgomery, and Walden. These stories guide every service and help new
            guests feel confident while licensure finalizes.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="card h-full">
              <p className="text-sm text-gray-600 mb-2">{review.service}</p>
              <p className="text-gray-700">“{review.text}”</p>
              <p className="mt-3 font-semibold text-brand-dark">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
