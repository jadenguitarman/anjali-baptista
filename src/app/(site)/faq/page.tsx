import { buildMetadata } from '@/lib/metadata';
import { CTAButton } from '@/components/CTAButton';

export const metadata = buildMetadata(
  'Hairstylist FAQ in Pine Bush, NY | Hair by Anjali',
  'Answers about booking a hairstylist in Pine Bush, NY including waitlist timing, balayage vs highlights, and color refresh cadence.',
  '/faq'
);

const faqs = [
  {
    question: 'How do I book a hairstylist in Pine Bush?',
    answer:
      'Join the waitlist with your goals, photos, and schedule. As soon as New York licensure is finalized you will receive appointment options in Pine Bush with clear pricing.'
  },
  {
    question: 'Do you take new clients in Pine Bush, NY?',
    answer:
      'Yes—Anjali is building a Pine Bush clientele now. Submit the form so you are prioritized when the license is active. Nothing is scheduled until it is legally confirmed.'
  },
  {
    question: 'What’s the difference between balayage and highlights?',
    answer:
      'Balayage is hand-painted and results in softer, more diffused brightness that grows out gracefully. Traditional highlights use foils for maximum lift and can create a higher-contrast look. We’ll choose based on your goals and maintenance budget.'
  },
  {
    question: 'How often should I refresh my color?',
    answer:
      'Most Pine Bush clients refresh gloss every 6–8 weeks and do larger color moves every 10–14 weeks. Gray coverage clients typically return every 6–8 weeks to keep lines soft.'
  },
  {
    question: 'Will you share exact pricing before I commit?',
    answer:
      'Absolutely. Starting rates are listed, and you will approve any additional time or product costs before confirming an appointment.'
  }
];

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3 max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-dark">Frequently asked questions</h1>
          <p className="text-gray-700 text-lg">
            Straight answers tailored to Pine Bush and Hudson Valley clients so you know exactly what to expect when booking Hair
            by Anjali.
          </p>
        </header>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="card" open>
              <summary className="font-semibold text-brand-dark">{faq.question}</summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
        <CTAButton href="/book" label="Join the waitlist" />
      </div>
    </div>
  );
}
