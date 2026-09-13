"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/site-data";

const tone = {
  rose: {
    card: "border-[#F3DDE3] bg-[linear-gradient(115deg,#FFFBFB_0%,#FFF4F6_48%,#FDEAEF_100%)]",
    badge: "border-[#F6D9E0] bg-white/80 text-[#C2185B]",
    icon: "text-royal",
  },
  sky: {
    card: "border-cardline bg-[linear-gradient(115deg,#FDFEFF_0%,#F5FAFF_48%,#E9F3FE_100%)]",
    badge: "border-hairline bg-white/80 text-royal",
    icon: "text-royal",
  },
} as const;

export function DestinationCard({
  destination,
  index,
}: {
  destination: Destination;
  index: number;
}) {
  const t = tone[destination.tone];

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.07,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className="group h-full"
    >
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border shadow-card transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-card-hover ${t.card}`}
      >
        {/* ---------- Artwork: banner on phones, right-hand bleed above that ---------- */}
        <div className="relative h-[172px] w-full shrink-0 sm:absolute sm:inset-y-0 sm:right-0 sm:left-auto sm:h-auto sm:w-[54%] xl:w-[52%]">
          <Image
            src={destination.image}
            alt={destination.imageAlt}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 640px) 340px, 100vw"
            style={{ objectPosition: destination.focus }}
            className={`transition-transform duration-500 group-hover:scale-[1.04] [mask-image:linear-gradient(to_bottom,#000_50%,transparent_97%)] sm:[mask-image:linear-gradient(to_right,transparent_0%,#000_52%)] ${
              destination.cutout
                ? "object-contain object-bottom p-2 mix-blend-multiply"
                : "object-cover"
            }`}
          />
        </div>

        {/* ---------- Handwritten line / bilingual badge ---------- */}
        {destination.script ? (
          <p className="pointer-events-none absolute top-5 right-5 hidden text-right font-script text-[20px] leading-[1.1] font-semibold text-navy sm:block xl:text-[23px]">
            {destination.script.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span
              aria-hidden="true"
              className="mt-1 ml-auto block h-[3px] w-12 rounded-full bg-accent"
            />
          </p>
        ) : null}

        {destination.badge ? (
          <p
            className={`pointer-events-none absolute top-5 right-5 hidden rounded-xl border px-3.5 py-2 text-center backdrop-blur-sm sm:block ${t.badge}`}
          >
            <span className="block text-[14px] leading-none font-bold">
              {destination.badge.native}
            </span>
            <span className="mt-1.5 block text-[10.5px] leading-none font-semibold text-ink/70">
              {destination.badge.latin}
            </span>
          </p>
        ) : null}

        {/* ---------- Content ---------- */}
        <div className="relative flex flex-1 flex-col p-5 sm:max-w-[64%] sm:p-6 xl:p-7">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full border border-white bg-white text-[24px] leading-none shadow-[0_2px_10px_rgba(10,29,70,0.12)]"
            >
              {destination.flag}
            </span>
            <div className="min-w-0">
              <h3 className="text-[19px] leading-tight font-extrabold tracking-[-0.02em] text-ink xl:text-[21px]">
                {destination.name}
              </h3>
              <p className="mt-1 text-[12.5px] leading-tight font-semibold text-royal xl:text-[13.5px]">
                {destination.headline}
              </p>
            </div>
          </div>

          <p className="mt-4 text-[14px] leading-[1.55] text-muted xl:text-[14.5px]">
            {destination.description}
          </p>

          <ul className="mt-5 space-y-3">
            {destination.highlights.map((highlight) => (
              <li key={highlight.label} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`grid size-[30px] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_8px_rgba(10,29,70,0.10)] ${t.icon}`}
                >
                  <highlight.icon className="size-[15px]" strokeWidth={2.3} />
                </span>
                <span className="text-[13.5px] leading-tight font-semibold text-ink xl:text-[14px]">
                  {highlight.label}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={destination.href}
            className="mt-6 inline-flex h-11 w-fit items-center gap-2.5 rounded-full border-[1.5px] border-royal/30 bg-white/90 px-5 text-[14px] font-bold text-royal shadow-chip transition-colors duration-200 hover:border-royal hover:bg-white xl:text-[14.5px]"
          >
            {destination.ctaLabel}
            <ArrowRight
              className="size-[17px] transition-transform duration-200 group-hover:translate-x-[3px]"
              strokeWidth={2.4}
            />
          </a>
        </div>
      </article>
    </motion.li>
  );
}
