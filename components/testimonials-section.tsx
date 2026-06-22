"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { REVIEWS } from "@/lib/salon-data"

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = REVIEWS.length

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

  // Infinite auto-loop
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <section id="reviews" className="relative w-full min-h-screen flex flex-col justify-center bg-background py-24 scroll-mt-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <Reveal
          delay={80}
          className="relative mt-10"
        >
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Track */}
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {REVIEWS.map((review) => (
                  <article
                    key={review.name}
                    className="flex w-full shrink-0 flex-col items-center px-6 py-12 text-center sm:px-14 sm:py-16"
                    aria-hidden={REVIEWS[index].name !== review.name}
                  >
                    <Quote className="size-8 text-primary/30" aria-hidden="true" />
                    <div className="mt-4 flex items-center gap-1 text-primary" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-5 text-lg leading-relaxed text-foreground text-pretty sm:text-xl">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="mt-6 font-serif text-base font-semibold text-primary">
                      {review.name}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="absolute -left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground bg-card text-foreground shadow-md backdrop-blur transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:-left-5"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="absolute -right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground bg-card text-foreground shadow-md backdrop-blur transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:-right-5"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {REVIEWS.map((review, i) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={index === i}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  index === i ? "w-7 bg-primary" : "w-2.5 bg-foreground/25 hover:bg-foreground/50",
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}