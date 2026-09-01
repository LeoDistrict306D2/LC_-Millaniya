import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from the work of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="The villages, mostly."
        standfirst="Pictures from the work, filed against the project they belong to."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The gallery is empty while we collect the photographs properly. Pictures from each
              project are already on its own page.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-strong"
            >
              Go to our work →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <Photo
                key={item.id}
                image={item}
                ratio="landscape"
                alt={index % 2 === 1}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
