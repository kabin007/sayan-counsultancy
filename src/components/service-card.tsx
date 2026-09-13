"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "orange";
  href: string;
  index: number;
};

const tone = {
  blue: {
    surface: "bg-white",
    badge: "bg-sky text-royal",
    arrow: "text-royal group-hover:bg-royal",
  },
  orange: {
    surface: "bg-cream",
    badge: "bg-[#FFF0D8] text-warm",
    arrow: "text-warm group-hover:bg-warm",
  },
} as const;

export function ServiceCard({
  title,
  description,
  icon: Icon,
  tone: toneKey,
  href,
  index,
}: ServiceCardProps) {
  const t = tone[toneKey];

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <a
        href={href}
        className={`group flex h-full flex-col sm:min-h-[196px] rounded-[18px] border border-cardline p-6 shadow-card transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-royal/35 hover:shadow-card-hover sm:p-7 ${t.surface}`}
      >
        <div className="flex items-start gap-3.5">
          <span
            aria-hidden="true"
            className={`grid size-11 shrink-0 place-items-center rounded-xl ${t.badge}`}
          >
            <Icon className="size-[22px]" strokeWidth={2.1} />
          </span>
          <h3 className="pt-1.5 text-[16.5px] leading-[1.25] font-extrabold tracking-[-0.015em] text-ink">
            {title}
          </h3>
        </div>

        <p className="mt-5 text-[14.5px] leading-[1.6] text-muted">
          {description}
        </p>

        <span className="mt-auto flex justify-end pt-5">
          <span
            aria-hidden="true"
            className={`grid size-[42px] place-items-center rounded-full border border-cardline bg-white transition-colors duration-250 group-hover:border-transparent group-hover:text-white ${t.arrow}`}
          >
            <ArrowRight
              className="size-[18px] transition-transform duration-250 group-hover:translate-x-[3px]"
              strokeWidth={2.3}
            />
          </span>
          <span className="sr-only">Learn more about {title}</span>
        </span>
      </a>
    </motion.li>
  );
}
