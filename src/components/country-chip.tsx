"use client";

import { motion } from "framer-motion";

type CountryChipProps = {
  /** Emoji flag, e.g. 🇯🇵. Omit for the trailing "& more" chip. */
  flag?: string;
  label: string;
  /** Index in the row — drives the 50ms entrance stagger. */
  index?: number;
  /** The trailing chip gets a blue-tinted treatment. */
  accent?: boolean;
};

export function CountryChip({
  flag,
  label,
  index = 0,
  accent = false,
}: CountryChipProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.35 + index * 0.05,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={[
        "inline-flex items-center gap-2 rounded-full border",
        "px-3 py-2.5 sm:px-3.5",
        "text-[13px] leading-none font-semibold sm:text-[13.5px]",
        "shadow-chip",
        accent
          ? "border-royal/30 bg-sky/70 text-royal"
          : "border-hairline bg-white text-ink",
      ].join(" ")}
    >
      {flag ? (
        <span
          aria-hidden="true"
          className="grid size-5 shrink-0 place-items-center overflow-hidden rounded-full bg-sky text-[14px] leading-none"
        >
          {flag}
        </span>
      ) : null}
      {label}
    </motion.li>
  );
}
