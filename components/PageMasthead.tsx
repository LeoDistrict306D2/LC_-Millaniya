import Link from 'next/link';
import { Weave } from './Weave';

/**
 * Page heading: kicker, title, standfirst, closed with a woven band rather
 * than a rule — the same gesture that separates every section below it.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <>
      <div className="wrap pt-12 pb-10 md:pt-18 md:pb-14">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-5">
            <Link
              href={breadcrumb.href}
              className="text-sm font-semibold text-accent hover:text-accent-strong"
            >
              ← {breadcrumb.label}
            </Link>
          </nav>
        ) : null}

        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">{kicker}</p>

        <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-[1.06] font-semibold text-ink md:text-village">
          {title}
        </h1>

        {standfirst ? (
          <p className="measure mt-5 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
        ) : null}
      </div>
      <Weave />
    </>
  );
}
