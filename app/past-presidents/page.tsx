import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} years`}
        title="Everyone who has led it."
        standfirst="Each president picks a theme for the year. Read together they are a fair account of how the club found its own way of working."
      />

      <div className="wrap band">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {years.map((president, index) => (
            <li key={president.year}>
              <Reveal delay={Math.min(index, 5) * 55} className="h-full">
                <div
                  className={`flex h-full flex-col bg-panel p-6 ${
                    index % 2 === 0 ? 'organic' : 'organic-alt'
                  }`}
                >
                  <p className="font-heading text-lg font-semibold text-accent">{president.year}</p>
                  <p className="mt-2 font-heading text-xl font-semibold text-ink">
                    {president.name}
                  </p>
                  {president.theme ? (
                    <p className="mt-1.5 text-sm text-ink-muted italic">
                      &ldquo;{president.theme}&rdquo;
                    </p>
                  ) : null}
                  {president.highlights && president.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-1.5 border-t border-rule pt-4">
                      {president.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
