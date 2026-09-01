import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${club.name}`,
      description: project.summary,
      publishedTime: project.date,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((entry) => entry.slug !== project.slug)
    .sort((a, b) => {
      const aMatch = a.category === project.category ? 0 : 1;
      const bMatch = b.category === project.category ? 0 : 1;
      return aMatch - bMatch || b.date.localeCompare(a.date);
    })
    .slice(0, 3);

  return (
    <>
      <PageMasthead
        kicker={`${project.year}${project.location ? ` · ${project.location}` : ''}`}
        title={project.title}
        standfirst={project.summary}
        breadcrumb={{ href: '/projects', label: 'All our work' }}
      />

      <div className="wrap pt-12">
        <Photo image={project.heroImage} ratio="wide" priority sizes="100vw" />
      </div>

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {project.story && project.story.length > 0 ? (
            project.story.map((paragraph, index) => (
              <p
                key={index}
                className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="measure text-lg leading-relaxed text-ink-muted">{project.summary}</p>
          )}

          {project.objectives && project.objectives.length > 0 ? (
            <section className="mt-12" aria-labelledby="objectives">
              <h2
                id="objectives"
                className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
              >
                What we set out to do
              </h2>
              <ul className="mt-5 space-y-3">
                {project.objectives.map((objective) => (
                  <li
                    key={objective}
                    className="organic bg-panel px-5 py-4 leading-relaxed text-ink-muted"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          {project.impact && project.impact.length > 0 ? (
            <section className="organic bg-inverse p-7 text-on-inverse" aria-labelledby="impact">
              <h2 id="impact" className="text-xs tracking-[0.16em] text-warm uppercase">
                What changed
              </h2>
              <dl className="mt-5 space-y-5">
                {project.impact.map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-heading text-3xl font-semibold tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="mt-1 text-sm text-on-inverse/70">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <dl className="mt-8">
            {[
              { term: 'Date', value: formatDate(project.date) },
              { term: 'Leo year', value: project.year },
              { term: 'Where', value: project.location },
              { term: 'Kind', value: project.category.replace(/-/g, ' ') },
            ]
              .filter((row) => Boolean(row.value))
              .map((row) => (
                <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">{row.term}</dt>
                  <dd className="text-right text-sm font-semibold capitalize">{row.value}</dd>
                </div>
              ))}
          </dl>

          {project.partners && project.partners.length > 0 ? (
            <section className="mt-8" aria-labelledby="partners">
              <h2
                id="partners"
                className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
              >
                Alongside
              </h2>
              <ul className="mt-3 space-y-1.5">
                {project.partners.map((partner) => (
                  <li key={partner.name} className="text-sm text-ink-muted">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="wrap pb-16" aria-labelledby="project-gallery">
          <h2
            id="project-gallery"
            className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
          >
            From the day
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <Photo
                key={image.src}
                image={image}
                ratio="landscape"
                alt={index % 2 === 1}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="bg-panel band" aria-labelledby="related">
          <div className="wrap">
            <h2
              id="related"
              className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
            >
              More of our work
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((entry, index) => (
                <li key={entry.id}>
                  <Link href={`/projects/${entry.slug}`} className="group block">
                    <Photo
                      image={entry.heroImage}
                      ratio="landscape"
                      alt={index % 2 === 1}
                      sizes="(min-width: 640px) 30vw, 100vw"
                    />
                    <h3 className="mt-3 font-heading text-lg font-semibold group-hover:text-accent">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-faint">
                      {formatDate(entry.date, { year: 'numeric', month: 'short' })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
