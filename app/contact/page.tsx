import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Talk to us."
        standfirst="Partnerships, a project idea, or something in your village that needs doing."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <h2
            id="details"
            className="text-xs font-semibold tracking-[0.16em] text-accent uppercase"
          >
            Details
          </h2>
          <dl className="mt-6 space-y-4">
            {club.contact.email ? (
              <div className="organic flex items-start gap-4 bg-panel px-6 py-5">
                <Mail aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-heading text-xl font-semibold break-all underline underline-offset-4 hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="organic-alt flex items-start gap-4 bg-panel px-6 py-5">
                <Phone aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-heading text-xl font-semibold hover:text-accent"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="organic flex items-start gap-4 bg-panel px-6 py-5">
                <MapPin aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Find us</dt>
                  <dd className="mt-1.5 font-heading text-xl leading-snug font-semibold">
                    {club.contact.address}
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <h2 id="social" className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Elsewhere
          </h2>
          <ul className="mt-6">
            {club.socials.facebook ? (
              <li className="border-t border-b border-rule">
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-semibold text-ink-muted transition-colors hover:text-accent"
                >
                  <Facebook aria-hidden size={17} />
                  Facebook
                </a>
              </li>
            ) : null}
            {club.socials.instagram ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 font-semibold text-ink-muted transition-colors hover:text-accent"
                >
                  <Instagram aria-hidden size={17} />
                  Instagram
                </a>
              </li>
            ) : null}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Want to join rather than get in touch? The membership page has a form that reaches the
            secretary directly.
          </p>
        </section>
      </div>
    </>
  );
}
