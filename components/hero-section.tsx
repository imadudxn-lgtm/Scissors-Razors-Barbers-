import { Phone, MapPin, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SALON } from "@/lib/salon-data"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Background Image Overlay - Clean Barber Shop Theme */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80" 
          alt="Classic Barbers Ashford Shop Interior" 
          className="w-full h-full object-cover object-center opacity-15 filter blur-[2px]" 
        />
        {/* Soft radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Soft backdrop accent color circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 -z-10 size-[600px] rounded-full bg-accent/30 blur-3xl"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-foreground tracking-wide uppercase shadow-sm">
            <Sparkles className="size-3.5 text-amber-500" aria-hidden="true" />
            Ashford&apos;s Premium High-Street Barbershop
          </span>

          <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.15] tracking-tight text-balance sm:text-6xl lg:text-8xl text-foreground">
            Sharp Cuts.<br />
            Classic Grooming.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl font-medium">
            Experience premium haircuts, skin fades, and traditional hot towel beard trims in the heart of Ashford. Our skilled professionals pay absolute attention to detail to keep you looking fresh. Walk-ins welcome.
          </p>

          {/* Primary CTA Action Grid */}
          <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center w-full sm:w-auto">
            <a
              href={SALON.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call to Check Availability · {SALON.phoneDisplay}
            </a>
            <a
              href="#find-us"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground bg-card px-8 py-4 text-base font-medium text-foreground transition-colors duration-300 hover:bg-secondary shadow-sm hover:-translate-y-0.5"
            >
              <MapPin className="size-4" aria-hidden="true" />
              View Location
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
