import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project told as a story panel: a large photograph with the text sitting in
 * a warm panel that overlaps its lower corner.
 *
 * The overlap is the design. In a village club the people and the work are not
 * separable, so the copy is not given its own tidy column beside the
 * photograph — it sits on top of it.
 *
 * Sides alternate down the page, and the corner radii mirror with them, so a
 * list of projects reads as woven rather than stacked.
 */
export function StoryPanel({ project, index = 0 }: { project: Project; index?: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index, 3) * 90}>
      <article className="grid items-center gap-6 md:grid-cols-12 md:gap-0">
        <div className={cn('md:col-span-7', flipped ? 'md:order-2 md:col-start-6' : '')}>
          <Photo
            image={project.heroImage}
            ratio="landscape"
            alt={flipped}
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <div
          className={cn(
            'bg-panel p-7 md:col-span-6 md:p-9',
            flipped ? 'md:order-1 md:col-start-1 organic-alt md:mr-[-12%]' : 'organic md:col-start-7 md:ml-[-12%]',
          )}
        >
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {formatDate(project.date, { year: 'numeric', month: 'long' })}
            {project.location ? ` · ${project.location}` : ''}
          </p>

          <h3 className="mt-3 font-heading text-2xl leading-snug font-semibold text-ink md:text-3xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 leading-relaxed text-ink-muted">{project.summary}</p>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {project.impact.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dd className="font-heading text-2xl font-semibold text-ink">
                    {stat.prefix}
                    {typeof stat.value === 'number'
                      ? stat.value.toLocaleString('en-LK')
                      : stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-0.5 text-xs tracking-[0.1em] text-ink-faint uppercase">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong"
          >
            Read the story
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
