import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, getInitials, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { Weave } from '@/components/Weave';
import { CountRow } from '@/components/CountRow';
import { StoryPanel } from '@/components/StoryPanel';

/**
 * Home.
 *
 * Photography leads, because the club's work is about people in specific
 * places. The section order puts the stories before the method and the method
 * before the board — you should meet the villages before you meet the
 * committee.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 4);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Opening -------------------------------------------------------- */}
      <section className="wrap grid items-center gap-10 pt-12 pb-16 md:grid-cols-12 md:pt-16 md:pb-20">
        <div className="md:col-span-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            {club.district}
            {charterYear ? ` · Since ${charterYear}` : ''}
          </p>

          <h1 className="mt-5 font-heading text-4xl leading-[1.06] font-semibold text-ink md:text-village">
            {club.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {club.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-page transition-colors hover:bg-accent-strong"
            >
              See our work
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center rounded-full border border-rule-strong px-7 py-3.5 font-semibold text-ink transition-colors hover:border-ink"
            >
              Join us
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <Photo
            image={club.heroImage}
            ratio="landscape"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <CountRow stats={club.stats} label="Club record" />

      {/* Stories -------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="work">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="work" className="font-heading text-3xl font-semibold text-ink md:text-5xl">
            What we have been doing
          </h2>
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent hover:text-accent-strong"
          >
            All {projects.length} projects →
          </Link>
        </div>

        <div className="mt-14 flex flex-col gap-16 md:gap-20">
          {featured.map((project, index) => (
            <StoryPanel key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Weave />

      {/* Method --------------------------------------------------------- */}
      <section className="bg-panel band" aria-labelledby="how">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="how" className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              How a village club works
            </h2>
            <p className="mt-4 text-ink-muted">
              Four things we learned the hard way, mostly in the first two years.
            </p>
          </div>

          <ol className="grid gap-5 md:col-span-7 md:col-start-6 sm:grid-cols-2">
            {club.about.values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 70} className="h-full">
                  <div
                    className={`h-full bg-page p-6 ${index % 2 === 0 ? 'organic' : 'organic-alt'}`}
                  >
                    <h3 className="font-heading text-xl font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="board-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="board-heading"
            className="font-heading text-3xl font-semibold text-ink md:text-4xl"
          >
            This year&rsquo;s committee
          </h2>
          <Link
            href="/board"
            className="text-sm font-semibold text-accent hover:text-accent-strong"
          >
            Everyone →
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {leadership.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 60}>
                {member.photo ? (
                  <Photo
                    image={member.photo}
                    ratio="portrait"
                    alt={index % 2 === 1}
                    sizes="(min-width: 1024px) 24vw, 45vw"
                  />
                ) : (
                  <div
                    aria-hidden
                    className={`flex aspect-[3/4] items-center justify-center bg-panel font-heading text-4xl font-semibold text-ink-faint ${
                      index % 2 === 1 ? 'organic-alt' : 'organic'
                    }`}
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-3 font-heading text-base leading-tight font-semibold">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{member.position}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="wrap pb-20">
        <div className="organic bg-warm p-9 md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
                There is always room for another pair of hands.
              </h2>
              <p className="mt-3 max-w-xl text-ink-muted">
                Open to anyone aged 12 to 30 in Millaniya and the villages around it. Most people
                join because they already know somebody here — but you do not have to.
              </p>
            </div>
            <Link
              href="/join"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-page transition-colors hover:bg-accent"
            >
              Join us
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
