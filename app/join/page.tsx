import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 in the Millaniya area.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'You already know the place',
    body: 'That is the qualification. Every project we run starts with somebody in the club already knowing somebody there.',
  },
  {
    title: 'You will run one yourself',
    body: 'Everyone leads a project eventually, and shadows one first. The small scale means you get a turn quickly.',
  },
  {
    title: 'It is not all weekends',
    body: 'Some of our best work is a phone call and a tractor. Give what time you have; nobody is keeping a scoreboard.',
  },
  {
    title: 'You will not go alone',
    body: 'Members work in pairs, always. Rural roads after dark are the most dangerous part of what we do, and we take that seriously.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Come and join in."
        standfirst="Open to anyone aged 12 to 30 in Millaniya and the villages around it. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="why">
          <h2 id="why" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            What it involves
          </h2>
          <ol className="mt-6 space-y-4">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                className={`bg-panel p-6 ${index % 2 === 0 ? 'organic' : 'organic-alt'}`}
              >
                <h3 className="font-heading text-lg font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <h2 id="enquiry" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Get in touch
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="font-semibold text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
