import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { aboutPoints, allServices, business } from "@/data/site-data";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="shell grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="About Sayan"
            title="A consultancy built around the student, not the commission."
            subtitle={`${business.name} was founded in Kathmandu to give students honest, informed advice about studying overseas — and to stay with them long after the visa is stamped.`}
          />

          <ul className="mt-7 space-y-4">
            {aboutPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sky text-royal"
                >
                  <Check className="size-3" strokeWidth={3.2} />
                </span>
                <span className="text-[15px] leading-[1.6] text-muted">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[22px] border border-cardline bg-soft p-7 shadow-card sm:p-9">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-mark.png"
              alt=""
              width={410}
              height={206}
              className="h-11 w-auto"
            />
            <div>
              <p className="text-[15px] leading-tight font-extrabold text-ink">
                {business.shortName}
              </p>
              <p className="mt-1 font-script text-[18px] leading-tight text-royal">
                {business.tagline}
              </p>
            </div>
          </div>

          <p className="mt-7 eyebrow text-muted">What we help with</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {allServices.map((service) => (
              <li
                key={service}
                className="rounded-full border border-hairline bg-white px-3.5 py-2 text-[13px] font-semibold text-ink shadow-chip"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
