import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Error 404</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-ink md:text-village">
        We could not find that page.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        It may have been renamed or moved. Everything we have done is on the work page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-7 py-3.5 font-semibold text-page hover:bg-accent-strong"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-rule-strong px-7 py-3.5 font-semibold text-ink hover:border-ink"
        >
          Our work
        </Link>
      </div>
    </div>
  );
}
