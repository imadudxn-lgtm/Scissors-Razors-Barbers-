import { Phone, MapPin } from "lucide-react"
import { SALON, HOURS, NAV_LINKS } from "@/lib/salon-data"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + logo text */}
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              {SALON.name}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium barbershop in Ashford. Walk-ins welcome and traditional grooming appointments available.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SALON.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON.name} on Facebook`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Opening Hours</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {HOURS.map((h) => (
                <div key={h.day} className="flex flex-col gap-0.5">
                  <dt className="font-medium text-foreground">{h.day}</dt>
                  <dd className="text-muted-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact + links */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SALON.phoneHref}
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {SALON.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <a 
                  href={SALON.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-start gap-2 transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {SALON.address}
                </a>
              </li>
            </ul>
            <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SALON.name}. All rights reserved.
          </p>
          <p>{SALON.address}</p>
        </div>
      </div>
    </footer>
  )
}
