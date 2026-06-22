import { MapPin, Bus, TrainFront, Phone, Clock } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SALON, HOURS } from "@/lib/salon-data"

export function LocationSection() {
  return (
    <section id="find-us" className="scroll-mt-24 bg-secondary/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Visit Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Where to Find Us
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Right on Church Road in Ashford — pop in for a walk-in or call
            ahead to check availability.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Info */}
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold">Our Address</h3>
                  <p className="mt-1 text-muted-foreground">{SALON.address}</p>
                  <a
                    href="https://maps.google.com/?q=Classic+Barbers+Ashford+4+Church+Rd+Ashford+TW15+2UT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Bus className="size-5 text-primary" aria-hidden="true" />
                Getting Here
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Bus className="mt-0.5 size-4 shrink-0 text-primary/70" aria-hidden="true" />
                  Several local bus routes stop along Church Road and the high street, just a short walk away.
                </li>
                <li className="flex items-start gap-2.5">
                  <TrainFront className="mt-0.5 size-4 shrink-0 text-primary/70" aria-hidden="true" />
                  Ashford (Surrey) railway station is a few minutes away by car or a pleasant walk.
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary/70" aria-hidden="true" />
                  Street and nearby car parking available, just steps from the barbershop.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Clock className="size-5 text-primary" aria-hidden="true" />
                Opening Hours
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-medium text-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={SALON.phoneHref}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-300 hover:opacity-90"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call to Check Availability — {SALON.phoneDisplay}
              </a>
            </div>
          </Reveal>

          {/* Map Section - Hardcoded direct URL layout to guarantee loading */}
          <Reveal delay={100} className="min-h-80">
            <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                title="Map showing Classic Barbers Ashford location layout"
                src="https://maps.google.com/maps?q=Classic%20Barbers%20Ashford%204%20Church%20Rd%20Ashford%20TW15%202UT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[450px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
