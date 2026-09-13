import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/data/site-data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description:
    "Sayan Consultancy Pvt. Ltd. helps ambitious students achieve their international education dreams with expert guidance in admissions, visa support, scholarship assistance and career counselling.",
  keywords: [
    "study abroad Nepal",
    "education consultancy Kathmandu",
    "study in Japan",
    "student visa support",
  ],
  openGraph: {
    title: `${business.name} — ${business.tagline}`,
    description:
      "Expert guidance in admissions, visa support, scholarship assistance and career counselling for students from Nepal.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
