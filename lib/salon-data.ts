export const SALON = {
  name: "Classic Barbers Ashford",
  phoneDisplay: "01784 278542",
  phoneHref: "tel:01784278542",
  address: "4 Church Rd, Ashford TW15 2UT",
  facebook: "https://www.facebook.com/classicbarbersashford/?locale=en_GB",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.65363402444!2d-0.46794652233682973!3d51.43467557179471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679af27064059%3A0xc5c14d3267c8753e!2sClassic%20Barbers%20Ashford!5e0!3m2!1sen!2suk!4v1718820000000!5m2!1sen!2suk",
  mapsLink: "https://www.google.com/maps/place/Classic+Barbers+Ashford/@51.4346723,-0.4653716,17z/data=!3m1!4b1!4m6!3m5!1s0x487679af27064059:0xc5c14d3267c8753e!8m2!3d51.4346723!4d-0.4653716!16s%2Fg%2F11wdbttx3r?entry=ttu",
} as const

export const HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "9:30 AM – 5:00 PM" },
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
    id: "barbering",
    label: "Barbering & Styling",
    blurb: "Sharp cuts and classic styling tailored exactly to your preferences.",
    services: [
      { name: "Men's Haircut", duration: "30 mins", price: "£18" },
      { name: "Skin Fade", duration: "45 mins", price: "£22" },
      { name: "Scissor Cut", duration: "30 mins", price: "£20" },
    ],
  },
  {
    id: "shaves-trims",
    label: "Beard & Shaves",
    blurb: "Traditional hot towel shaves and clean line outlines.",
    services: [
      { name: "Beard Trim", duration: "20 mins", price: "£10" },
      { name: "Hot Towel Shave", duration: "35 mins", price: "£20" },
      { name: "Head Shave", duration: "25 mins", price: "£15" },
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
    name: "Bruno Pereira",
    text: "I was lucky enough to catch Arde at The Classic Barbers just as he was closing, and he still kindly accepted me for a last-minute haircut and beard trim. The service was top-notch full attention to detail, great conversation, and a perfect cut.",
  },
  {
    name: "Darren Tyler",
    text: "Hands down the best barbershop in town! I’ve been to a lot of barbers, but this place stands out for all the right reasons. The atmosphere is welcoming, clean, and professional. The barbers really pay attention.",
  },
  {
    name: "Ryan Fernandes",
    text: "I’m really very satisfied with my experience at Classic Barbers. The staff are friendly and welcoming, especially the owner, who is very accommodating and professional. He gave great suggestions for a haircut that suited me well.",
  },
  {
    name: "Hajar Salehi",
    text: "First time being at classic Barber before my son getting a haircut I let them know my son is very sensitive with the clipper. They cut his hair with scissors and my boy loves the haircut, he’s gassed up to get a haircut here.",
  },
  {
    name: "Peerzada Ovais",
    text: "Best haircut and beard trim I’ve had in the UK. Great experience at Classic Barbers Ashford. Big thanks to Ardie - very skilled, professional, and paid great attention to detail. Left feeling fresh and confident.",
  },
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
]
