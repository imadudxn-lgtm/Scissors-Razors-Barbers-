import { Heart, Sparkles, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Spotlessly clean",
    text: "A sharp, hygienic shop layout with fresh, fully sanitized tools for every single client.",
  },
  {
    icon: Heart,
    title: "Friendly experts",
    text: "A welcoming, highly experienced team that listens carefully and takes pride in every cut.",
  },
  {
    icon: Sparkles,
    title: "Premium grooming",
    text: "Top-tier grooming finishes, traditional shaving products, and hot towel styling treatments.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-xl bg-muted h-[560px] relative">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80"
              alt="Inside Classic Barbers Ashford — a pristine, premium local barber shop setting ready for grooming services"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Your local barbershop in the heart of Ashford
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Classic Barbers Ashford, we&apos;ve built a clean, comfortable, and friendly space where you can
            unwind and walk out looking your absolute best. Whether you need a standard trim, a meticulous skin fade, 
            or a classic hot towel beard alignment, our barbers take their time to ensure absolute precision.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Walk-ins are always highly welcome, and we take pride in serving a loyal local community of clients who trust us completely with their look week after week.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-5 shadow-sm">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
