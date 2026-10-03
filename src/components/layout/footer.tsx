import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { ImpactZonesMark } from "@/components/impact-zones-mark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-graphite">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{SITE.identity}</p>
        </div>
        <div>
          <p className="label-caps mb-3">Quick links</p>
          <ul className="space-y-2 text-sm text-muted">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-graphite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-caps mb-3">Connect</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-graphite">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SITE.substack} target="_blank" rel="noopener noreferrer" className="hover:text-graphite">
                Substack
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-graphite">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="label-caps mb-3">Practice</p>
          <ImpactZonesMark />
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-subtle sm:px-8">
          © {SITE.name} – {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
