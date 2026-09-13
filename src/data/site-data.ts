import {
  BarChart3,
  BookOpen,
  Briefcase,
  CalendarDays,
  CircleDollarSign,
  FileCheck2,
  FileText,
  GraduationCap,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * Business identity
 * ------------------------------------------------------------------ */

export const business = {
  name: "Sayan Consultancy Pvt. Ltd.",
  shortName: "Sayan Consultancy",
  tagline: "Pathways to Global Excellence",
  phone: "+977 980-2379092",
  phoneHref: "tel:+9779802379092",
  email: "consultancysayan@gmail.com",
  emailHref: "mailto:consultancysayan@gmail.com",
  address: "Santinagar Gate, Kathmandu, Nepal",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Santinagar+Gate+Kathmandu+Nepal",
} as const;

/* ------------------------------------------------------------------ *
 * Navigation
 * ------------------------------------------------------------------ */

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Your Global Education Partner",
  titleLine1: "Study Abroad",
  titleLine2: "with Confidence",
  paragraph:
    "At Sayan Consultancy Pvt. Ltd., we guide you from your first dream to your first day abroad — with expert support in admissions, visas, scholarships and beyond.",
} as const;

export type Country = { name: string; flag: string };

export const heroCountries: Country[] = [
  { name: "Japan", flag: "🇯🇵" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "USA", flag: "🇺🇸" },
];

export type Stat = { value: string; label: string; accent?: boolean };

export const heroStats: Stat[] = [
  { value: "1K+", label: "Students Guided" },
  { value: "95%", label: "Visa Success Rate" },
  { value: "10+", label: "Countries" },
  { value: "4+", label: "Years of Excellence", accent: true },
];

/* ------------------------------------------------------------------ *
 * Services
 * ------------------------------------------------------------------ */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "orange";
  href: string;
};

export const services: Service[] = [
  {
    title: "Admission Guidance",
    description:
      "Get into your dream university with expert course and university selection support.",
    icon: GraduationCap,
    tone: "blue",
    href: "#contact",
  },
  {
    title: "Visa Application Support",
    description:
      "Step-by-step guidance for a smooth and successful visa process.",
    icon: FileText,
    tone: "orange",
    href: "#contact",
  },
  {
    title: "Documentation Support",
    description:
      "We help you prepare and review all required documents with care and accuracy.",
    icon: FileCheck2,
    tone: "blue",
    href: "#contact",
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Be fully prepared for your new journey with our detailed pre-departure sessions.",
    icon: Plane,
    tone: "orange",
    href: "#contact",
  },
];

/* Full service list used in the footer / about copy. */
export const allServices = [
  "Admission Guidance",
  "Visa Application Support",
  "Scholarship Assistance",
  "Career Counselling",
  "Documentation Support",
  "Pre-Departure Briefing",
  "Post Arrival Support",
];

/* ------------------------------------------------------------------ *
 * Destinations
 * ------------------------------------------------------------------ */

export type Highlight = { label: string; icon: LucideIcon };

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  headline: string;
  description: string;
  highlights: Highlight[];
  image: string;
  imageAlt: string;
  /** object-position for the bleed panel, chosen per photo */
  focus: string;
  /** rose treatment for Japan, sky blue for the rest — as per the design */
  tone: "rose" | "sky";
  /** handwritten line set over the artwork */
  script?: string[];
  /** Japan uses a bilingual badge instead of a script line */
  badge?: { native: string; latin: string };
  /** artwork is a cut-out on white and blends via multiply */
  cutout?: boolean;
  ctaLabel: string;
  href: string;
};

export const destinations: Destination[] = [
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    headline: "Language schools & universities",
    description:
      "Study in a country that pairs world-class technology with deep tradition, plus part-time work rights while you study.",
    highlights: [
      { label: "MEXT scholarships", icon: GraduationCap },
      { label: "Work 28 hrs/week", icon: Briefcase },
      { label: "April & October intakes", icon: CalendarDays },
    ],
    image: "/destinations/japan.webp",
    imageAlt: "A pagoda rising above misty forest in Japan",
    focus: "30% 50%",
    tone: "rose",
    badge: { native: "伝統と未来", latin: "Tradition Meets Tomorrow" },
    ctaLabel: "Explore Japan",
    href: "#contact",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    headline: "Globally ranked universities",
    description:
      "Eight of the world's top 100 universities, a generous post-study work stream and a genuinely welcoming student culture.",
    highlights: [
      { label: "2–4 yr post-study work", icon: BarChart3 },
      { label: "Regional bonus points", icon: Users },
      { label: "Feb & July intakes", icon: CalendarDays },
    ],
    image: "/destinations/australia.webp",
    imageAlt: "A kangaroo crossing sign on an open road in the Australian outback",
    focus: "14% 52%",
    tone: "sky",
    script: ["Live", "Learn", "Belong"],
    ctaLabel: "Explore Australia",
    href: "#contact",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    headline: "One-year master's degrees",
    description:
      "Finish a respected master's in twelve months and stay on afterwards through the Graduate Route visa.",
    highlights: [
      { label: "1-year master's", icon: GraduationCap },
      { label: "Graduate Route visa", icon: FileText },
      { label: "Sept & Jan intakes", icon: CalendarDays },
    ],
    image: "/destinations/london.webp",
    imageAlt: "Tower Bridge and the London skyline at sunset",
    focus: "72% 50%",
    tone: "sky",
    script: ["History", "Creates", "Futures"],
    ctaLabel: "Explore UK",
    href: "#contact",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    headline: "A clear path to residency",
    description:
      "Affordable, high-quality education with one of the most straightforward routes from study to permanent residency.",
    highlights: [
      { label: "PGWP up to 3 yrs", icon: Users },
      { label: "Co-op programmes", icon: BookOpen },
      { label: "Jan, May & Sept intakes", icon: CalendarDays },
    ],
    image: "/destinations/canada.webp",
    imageAlt: "The Canadian flag above a turquoise mountain lake in the Rockies",
    focus: "38% 50%",
    tone: "sky",
    script: ["More", "Than a Degree"],
    ctaLabel: "Explore Canada",
    href: "#contact",
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    headline: "Unmatched academic choice",
    description:
      "Over four thousand institutions, strong funding for international students and the world's widest range of majors.",
    highlights: [
      { label: "OPT & STEM OPT", icon: GraduationCap },
      { label: "Assistantships", icon: CircleDollarSign },
      { label: "Fall & Spring intakes", icon: CalendarDays },
    ],
    image: "/destinations/us.webp",
    imageAlt: "The Statue of Liberty",
    focus: "50% 50%",
    tone: "sky",
    cutout: true,
    script: ["Big Dreams", "Bigger Opportunities"],
    ctaLabel: "Explore USA",
    href: "#contact",
  },
];

/** Countries we also place students in, shown on the closing tile. */
export const moreDestinations = [
  { name: "Germany", flag: "🇩🇪" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Singapore", flag: "🇸🇬" },
];

/* ------------------------------------------------------------------ *
 * Success stories
 * ------------------------------------------------------------------ */

export type Story = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
};

export const stories: Story[] = [
  {
    quote:
      "Sayan handled everything from my language school application to my COE. I landed in Tokyo knowing exactly what to expect.",
    name: "Aayush Gurung",
    detail: "Language School, Tokyo · Japan",
    initials: "AG",
  },
  {
    quote:
      "They rebuilt my SOP with me over three sessions. The visa interview felt easy because I had genuinely been prepared for it.",
    name: "Prashamsa Thapa",
    detail: "MSc Data Science · Australia",
    initials: "PT",
  },
  {
    quote:
      "I thought scholarships were out of reach. My counsellor found three I qualified for and I now study on a partial waiver.",
    name: "Bibek Shrestha",
    detail: "BBA (Hons) · United Kingdom",
    initials: "BS",
  },
];

/* ------------------------------------------------------------------ *
 * Trust markers
 * ------------------------------------------------------------------ */

export const aboutPoints = [
  "Counsellors who have studied abroad themselves and know the process from both sides.",
  "One dedicated advisor from your first consultation to your first day on campus.",
  "Transparent, documented fees — no surprise charges at any stage of your application.",
];
