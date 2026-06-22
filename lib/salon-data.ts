export const SALON = {
  name: "Scissors & Razors Barbers",
  phoneDisplay: "01784 558634",
  phoneHref: "tel:01784558634",
  address: "12 Station Rd, Ashford TW15 2UP",
  facebook: "https://www.facebook.com/p/Scissors-Razors-100063553870832/",
  instagram: "https://www.instagram.com/scissorsandrazor/",
  bookingLink: "https://booksy.com/en-gb/30127_scissors-razors_barber_968775_ashford",
} as const

export const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
] as const

export type Service = {
  name: string
  duration: string
  price: string
}

export type ServiceCategory = {
  id: string
  label: string
  blurb: string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "haircuts",
    label: "Haircuts & Fades",
    blurb: "Precise, sharp styling and modern cuts crafted by industry professionals.",
    services: [
      { name: "Dry Haircut", duration: "35 mins", price: "£17" },
      { name: "Skin Fade", duration: "35 mins", price: "£19" },
      { name: "Taper Fade", duration: "45 mins", price: "£19" },
      { name: "Haircut & Wash", duration: "30 mins", price: "£20" },
      { name: "Kids Haircut (With toy car seat)", duration: "30 mins", price: "£15" },
    ],
  },
  {
    id: "shaves-grooming",
    label: "Beards & Shaves",
    blurb: "Traditional grooming treatments, crisp edges, and hot towel relaxation.",
    services: [
      { name: "Gents Haircut & Beard Grooming (+ Free Hot Towel)", duration: "45 mins", price: "£32" },
      { name: "Hot Towel Shave", duration: "30 mins", price: "£15" },
      { name: "Beard Trim", duration: "20 mins", price: "£13" },
      { name: "Traditional Shave", duration: "20 mins", price: "£11" },
      { name: "Hair Colouring", duration: "40 mins", price: "£35" },
    ],
  },
]

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80",
    alt: "Classic leather barber chair in front of a mirror",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format&fit=crop&q=80",
    alt: "Barber styling hair with precision clippers",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=80",
    alt: "Barber tools, scissors, and combs laid out on a table",
  },
]

export const REVIEWS = [
  {
    name: "Ravi Sharma",
    text: "Great cut and shave. Really took precision and done well skin fade. My boys haircut was great day before also they have the car seat so keeps him entertained. Recommended thanks guys.",
  },
  {
    name: "Adam",
    text: "Best barbershop I have been to so far. Very precise and professional. Highly recommended.",
  },
  {
    name: "Amin Zaeim",
    text: "I’ve been going there for the past five years. Am quite happy to continue going there each time I need a haircut. The boss is an excellent barber who knows what cut suits you best.",
  },
  {
    name: "MK",
    text: "The vibes are amazing, the guys are great. Hospitable, they offer drinks as well. It was not easy to find good barbers around. But at last I found them. ❤️",
  },
  {
    name: "Sam Pritchard",
    text: "Been going here for a few years now, the guys are so good, look after children really well too. Always a pleasure having my family in the shop.",
  },
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
]
