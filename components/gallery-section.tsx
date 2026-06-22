"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { GALLERY } from "@/lib/salon-data"

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatic interval slider - set to 3.5 seconds so users can comfortably look at the art
  useEffect(() => {
    if (!GALLERY || GALLERY.length === 0) return

    const timer = setInterval(() => {
      handleNext()
    }, 3500)

    return () => clearInterval(timer)
  }, [currentIndex])

  if (!GALLERY || GALLERY.length === 0) return null

  const len = GALLERY.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + len) % len)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % len)
  }

  // Helper logic to get the 3 visible slots (Left, Middle/Active, Right)
  const leftIdx = (currentIndex - 1 + len) % len
  const middleIdx = currentIndex
  const rightIdx = (currentIndex + 1) % len

  return (
    <section id="gallery" className="relative w-full min-h-screen flex flex-col justify-center bg-secondary/40 py-24 border-y border-border/40 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            A Look at the Gallery
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            A few of our favourite styles — from custom precision cuts to rich highlights and balayage transformations.
          </p>
        </Reveal>
      </div>

      {/* Slider Window Container */}
      <Reveal delay={80} className="relative w-full max-w-6xl mx-auto px-4 overflow-hidden h-[460px] flex items-center justify-center mt-12">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center justify-center gap-4 sm:gap-8 w-full px-12">
          
          {/* Left Image Background Slot */}
          <div className="relative w-1/4 h-[280px] sm:h-[320px] rounded-3xl overflow-hidden opacity-25 transition-all duration-500 scale-90 hidden sm:block">
            <Image
              src={GALLERY[leftIdx].src || "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"}
              alt={GALLERY[leftIdx].alt || "Previous set"}
              width={960}
              height={720}
              unoptimized
              className="object-cover w-full h-full filter blur-[1px]"
            />
          </div>

          {/* Middle Highlighted Featured Image (Bigger Scale) */}
          <div className="relative w-full sm:w-[45%] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 scale-105 z-10 border-4 border-background">
            <Image
              src={GALLERY[middleIdx].src || "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"}
              alt={GALLERY[middleIdx].alt || "Featured set"}
              width={960}
              height={720}
              unoptimized
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Image Background Slot */}
          <div className="relative w-1/4 h-[280px] sm:h-[320px] rounded-3xl overflow-hidden opacity-25 transition-all duration-500 scale-90 hidden sm:block">
            <Image
              src={GALLERY[rightIdx].src || "https://images.unsplash.com/photo-1605497746444-ac9da58d440f?auto=format&fit=crop&w=600&q=80"}
              alt={GALLERY[rightIdx].alt || "Next set"}
              width={960}
              height={720}
              unoptimized
              className="object-cover w-full h-full filter blur-[1px]"
            />
          </div>

          {/* Fallback image links added here to ensure it safely resolves to clean internet links even if an index is misaligned */}

        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="size-5" />
        </button>
      </Reveal>

      {/* Pagination Dots Indicator Bar */}
      <div className="mt-6 flex justify-center gap-2">
        {GALLERY.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}