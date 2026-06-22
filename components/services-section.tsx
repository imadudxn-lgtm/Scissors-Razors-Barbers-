"use client"

import { useState } from "react"
import { Clock, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SERVICE_CATEGORIES, SALON } from "@/lib/salon-data"

export function ServicesSection() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id)
  const current = SERVICE_CATEGORIES.find((c) => c.id === active) ?? SERVICE_CATEGORIES[0]

  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Menu
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Services &amp; Pricing
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Transparent starting prices. Final pricing may vary with length, shape
            and nail art.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Category rail */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-2">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = active === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActive(cat.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "group flex flex-col rounded-2xl px-5 py-4 text-left transition-all duration-300",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-foreground hover:bg-secondary",
                    )}
                  >
                    <span className="font-serif text-lg font-semibold leading-snug">
                      {cat.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-sm leading-relaxed",
                        isActive ? "text-primary-foreground/75" : "text-muted-foreground",
                      )}
                    >
                      {cat.blurb}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Price list */}
          <div>
            <Reveal>
              <ul className="overflow-hidden rounded-3xl bg-card shadow-sm">
                {current.services.map((service, i) => (
                  <li
                    key={service.name}
                    className={cn(
                      "flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-200 hover:bg-secondary/60",
                      i !== 0 && "border-t border-border/60",
                    )}
                  >
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                        {service.name}
                      </h3>
                      <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="size-4 text-primary" aria-hidden="true" />
                        {service.duration}
                      </span>
                    </div>
                    <span className="shrink-0 font-serif text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="mt-8 flex justify-center lg:justify-start">
              <a
                href={SALON.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call to Book — {SALON.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
