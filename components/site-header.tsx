"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, SALON } from "@/lib/salon-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-foreground/15 bg-background/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-background/30 backdrop-blur-md backdrop-saturate-150",
        )}
      >
        {/* Logo slot - Text Fallback / Clean Dynamic Brand Name */}
        <a href="#home" className="flex shrink-0 items-center gap-2" aria-label={`${SALON.name} home`}>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {SALON.name}
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Call to book */}
        <div className="flex items-center gap-2">
          <a
            href={SALON.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:opacity-90 hover:shadow-md sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call to Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-foreground/15 bg-background/85 p-3 shadow-lg backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SALON.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call to Book
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}