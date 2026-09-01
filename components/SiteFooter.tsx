import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';
import { Weave } from './Weave';

/**
 * Footer on the deep green, opened with a woven band. The affiliation chain is
 * a sentence rather than a row of logos, so the district never out-shouts the
 * club on the club's own site.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'Past Presidents' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'The work',
    links: [
      { href: '/projects', label: 'Our work' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Join in',
    links: [
      { href: '/join', label: 'Become a member' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <Weave />
      <div className="bg-inverse text-on-inverse">
        <div className="wrap py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-heading text-2xl font-semibold">{club.name}</p>
              <p className="mt-2 text-sm text-on-inverse/60">{club.motto}</p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-on-inverse/80">
                {club.description}
              </p>

              <ul className="mt-7 flex gap-3">
                {club.socials.facebook ? (
                  <li>
                    <a
                      href={club.socials.facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-warm hover:bg-warm hover:text-ink"
                    >
                      <Facebook aria-hidden size={17} />
                    </a>
                  </li>
                ) : null}
                {club.socials.instagram ? (
                  <li>
                    <a
                      href={club.socials.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Instagram"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-warm hover:bg-warm hover:text-ink"
                    >
                      <Instagram aria-hidden size={17} />
                    </a>
                  </li>
                ) : null}
                {club.contact.email ? (
                  <li>
                    <a
                      href={`mailto:${club.contact.email}`}
                      aria-label="Email"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-warm hover:bg-warm hover:text-ink"
                    >
                      <Mail aria-hidden size={17} />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
              {columns.map((column) => (
                <nav key={column.heading} aria-label={column.heading}>
                  <h2 className="text-xs tracking-[0.16em] text-warm uppercase">
                    {column.heading}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-on-inverse/85 transition-colors hover:text-warm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <p className="mt-14 border-t border-white/15 pt-6 text-xs leading-relaxed text-on-inverse/55">
            {club.name} is a member club of{' '}
            <a
              href={club.districtUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-warm"
            >
              {club.district}
            </a>
            , part of{' '}
            <a
              href={club.multipleDistrictUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-warm"
            >
              {club.multipleDistrict}
            </a>
            , within Lions Clubs International.
            {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
          </p>

          <p className="mt-3 text-xs text-on-inverse/40">
            © {year} {club.name}. {club.contact.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
