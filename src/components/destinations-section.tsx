"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, MoreHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { destinations, moreDestinations } from "@/data/site-data";

export function DestinationsSection() {
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="bg-soft py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          id="destinations-title"
          eyebrow="Study Destinations"
          title={
            <>
              Five countries.{" "}
              <span className="text-bright">One dedicated advisor.</span>
            </>
          }
          subtitle="We only place students where we know the institutions, the visa rules and the cost of living first-hand."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
          {destinations.map((destination, i) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              index={i}
            />
          ))}

          {/* ---------- Closing "anywhere else" tile ---------- */}
          <motion.li
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 0.61, 0.36, 1] }}
            className="h-full"
          >
            <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-[1.5px] border-dashed border-royal/30 bg-sky/50 p-6 text-center sm:p-8">
              {/* dotted map-like field */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(11,67,201,0.16)_1.5px,transparent_1.5px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_72%)]"
              />

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="mx-auto grid size-14 place-items-center rounded-full bg-white text-royal shadow-[0_6px_18px_rgba(10,29,70,0.14)]"
                >
                  <Globe className="size-7" strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[21px] leading-tight font-extrabold tracking-[-0.025em] text-ink sm:text-[24px]">
                  Somewhere else in mind?
                </h3>
                <p className="mx-auto mt-3 max-w-[380px] text-[14px] leading-[1.6] text-muted sm:text-[15px]">
                  Germany, South Korea, New Zealand and more — tell us where you
                  want to go and we will map the route.
                </p>

                <a
                  href="#contact"
                  className="btn-gradient group mt-6 inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-[15px] font-bold text-white shadow-cta transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-cta-hover"
                >
                  Ask a counsellor
                  <ArrowRight
                    className="size-[17px] transition-transform duration-200 group-hover:translate-x-[3px]"
                    strokeWidth={2.4}
                  />
                </a>

                <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
                  {moreDestinations.map((place) => (
                    <li
                      key={place.name}
                      title={place.name}
                      className="grid size-11 place-items-center rounded-full border border-hairline bg-white text-[21px] leading-none shadow-chip"
                    >
                      <span className="sr-only">{place.name}</span>
                      <span aria-hidden="true">{place.flag}</span>
                    </li>
                  ))}
                  <li
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full border border-hairline bg-white text-muted shadow-chip"
                  >
                    <MoreHorizontal className="size-5" strokeWidth={2.4} />
                  </li>
                </ul>
              </div>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
