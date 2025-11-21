import { buildMetadata } from '@/lib/metadata';
import { ImageWithAlt } from '@/components/ImageWithAlt';

export const metadata = buildMetadata(
  'Hair gallery in Pine Bush, NY | Hair by Anjali',
  'See Pine Bush hair color, haircut, balayage, and bridal styles crafted by Anjali with Hudson Valley-inspired finishes.',
  '/gallery'
);

const images = [
  { src: '/images/gallery-1.svg', alt: 'Soft brunette gloss in Pine Bush salon light' },
  { src: '/images/gallery-2.svg', alt: 'Sunlit balayage near Walden farmers market' },
  { src: '/images/gallery-3.svg', alt: 'Healthy haircut with face frame in Pine Bush, NY' },
  { src: '/images/gallery-4.svg', alt: 'Bridal low bun styled for Hudson Valley barn wedding' }
];

export default function GalleryPage() {
  return (
    <div className="section">
      <div className="container-box space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-brand-dark">Gallery</h1>
          <p className="text-gray-700 text-lg">
            Before-and-afters, soft lived-in color, and bridal styles built for Pine Bush light, Hudson Valley humidity, and
            joyful photos.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {images.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-2xl shadow-soft">
              <ImageWithAlt
                src={image.src}
                width={600}
                height={400}
                descriptiveAlt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
