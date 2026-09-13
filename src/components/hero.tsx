"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Send } from "lucide-react";
import { CountryChip } from "@/components/country-chip";
import { HeroStat } from "@/components/hero-stat";
import { hero, heroCountries, heroStats } from "@/data/site-data";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE },
  }),
};

/* The artwork is 1200 x 1414 with a soft-faded left edge so it dissolves
   into the hero background instead of sitting in a hard-edged card. */
const ART = { width: 1200, height: 1414 };
const ART_ALT =
  "A smiling student with a backpack holding her books and laptop, looking up towards Mount Fuji, a Japanese pagoda and cherry blossoms";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* ================= Background ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* The portrait carries its own sky, so the page behind it stays a
            near-white ground — that keeps the artwork's faded edge seamless. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fcfdff_100%)]" />

        {/* soft warm blob, bottom-centre */}
        <div className="absolute -bottom-48 left-[20%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(212,196,181,0.20),transparent_66%)]" />

        {/* faint cool wash, upper left */}
        <div className="absolute -top-40 -left-24 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(20,86,232,0.05),transparent_68%)] lg:block" />

        {/* soft halo that seats the portrait on the page */}
        <div className="absolute right-[7%] bottom-[14%] hidden h-[74%] w-[46%] rounded-[44%] bg-[radial-gradient(ellipse_at_center,rgba(20,86,232,0.07),transparent_70%)] lg:block" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-hairline/70" />
      </div>

      {/* ================= Portrait — desktop ================= */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
        className="pointer-events-none absolute right-[6%] bottom-[17%] hidden h-[80%] aspect-[774/912] max-w-[46%] lg:block xl:right-[9%] xl:bottom-[19%] xl:h-[82%] xl:max-w-[48%] 2xl:right-[10%] 2xl:h-[86%] 2xl:max-w-[52%]"
      >
        <Image
          src="/hero-student.webp"
          alt={ART_ALT}
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 0px"
          className="object-contain object-right-bottom [mask-image:linear-gradient(to_bottom,#000_68%,transparent_99%)]"
        />
      </motion.div>

      {/* ================= Content ================= */}
      <div className="shell relative z-10">
        <div className="flex flex-col justify-center py-10 sm:py-14 lg:min-h-[clamp(560px,calc(100svh-78px),900px)] lg:py-10 xl:py-12">
          <div className="w-full lg:max-w-[510px] xl:max-w-[620px] 2xl:max-w-[690px]">
            {/* ---- Eyebrow ---- */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="flex items-center gap-4"
            >
              <span aria-hidden="true" className="h-[2px] w-9 bg-accent sm:w-13" />
              <span className="eyebrow text-navy">{hero.eyebrow}</span>
            </motion.p>

            {/* ---- Headline ---- */}
            <motion.h1
              id="hero-title"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="mt-5 text-[36px] leading-[1] font-extrabold tracking-[-0.042em] text-navy min-[380px]:text-[44px] sm:mt-6 sm:text-[58px] md:text-[68px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]"
            >
              {hero.titleLine1}
              <br />
              <span className="text-bright">{hero.titleLine2}</span>
            </motion.h1>

            {/* ---- Paragraph ---- */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.16}
              className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-muted sm:mt-6 sm:text-[17px] 2xl:text-[18px]"
            >
              {hero.paragraph}
            </motion.p>

            {/* ---- Country chips ---- */}
            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
              {heroCountries.map((country, i) => (
                <CountryChip
                  key={country.name}
                  flag={country.flag}
                  label={country.name}
                  index={i}
                />
              ))}
              <CountryChip label="& more" index={heroCountries.length} accent />
            </ul>

            {/* ---- Primary actions ---- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.32}
              className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <a
                href="#contact"
                className="btn-gradient group inline-flex h-[54px] items-center justify-center gap-3 rounded-[14px] px-7 text-[15.5px] font-bold text-white shadow-cta transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-cta-hover sm:h-[58px] sm:px-8 sm:text-[16.5px] lg:h-[54px] lg:px-5 lg:text-[14.5px] xl:h-[58px] xl:px-8 xl:text-[16.5px]"
              >
                <CalendarDays className="size-[20px]" strokeWidth={2.2} />
                Book Free Consultation
                <ArrowRight
                  className="size-[18px] transition-transform duration-200 group-hover:translate-x-[3px]"
                  strokeWidth={2.4}
                />
              </a>

              <a
                href="#destinations"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[14px] border-[1.5px] border-royal/35 bg-white px-7 text-[15.5px] font-bold text-royal shadow-chip transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-royal hover:shadow-card sm:h-[58px] sm:px-8 sm:text-[16.5px] lg:h-[54px] lg:px-5 lg:text-[14.5px] xl:h-[58px] xl:px-8 xl:text-[16.5px]"
              >
                <Send className="size-[19px]" strokeWidth={2.2} />
                Explore Destinations
              </a>
            </motion.div>

            {/* ---- Portrait — tablet & mobile ---- */}
            <div className="relative mx-auto mt-10 w-full max-w-[520px] lg:hidden">
              <Image
                src="/hero-student.webp"
                alt={ART_ALT}
                width={ART.width}
                height={ART.height}
                priority
                sizes="(min-width: 1024px) 0px, (min-width: 640px) 520px, 100vw"
                /* the artwork dissolves into the page instead of ending on a
                   hard horizontal cut through the subject */
                className="h-auto w-full object-contain [mask-image:linear-gradient(to_bottom,#000_80%,transparent_99%)]"
              />
            </div>

            {/* ---- Stats ---- */}
            <motion.dl
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-9 sm:grid-cols-4 sm:gap-x-0 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 xl:grid-cols-4 xl:gap-x-0"
            >
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i === 0
                      ? "sm:pr-5 lg:pr-0 xl:pr-5"
                      : "sm:border-l sm:border-hairline sm:pl-5 lg:border-l-0 lg:pl-0 xl:border-l xl:pl-5"
                  }
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <HeroStat
                      value={stat.value}
                      label={stat.label}
                      accent={stat.accent}
                    />
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* ---- Scroll cue ---- */}
            <motion.a
              href="#services"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="group mt-8 hidden items-center gap-5 xl:inline-flex"
            >
              <span
                aria-hidden="true"
                className="flex h-[34px] w-[22px] justify-center rounded-full border-[1.5px] border-muted/45 pt-[6px] transition-colors group-hover:border-royal"
              >
                <span className="block h-[6px] w-[2.5px] rounded-full bg-muted/70 transition-colors group-hover:bg-royal motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]" />
              </span>
              <span className="border-b border-hairline pb-2 text-[14.5px] text-muted transition-colors group-hover:text-royal">
                Scroll to explore
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
