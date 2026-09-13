import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site-data";

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: business.phone,
    href: business.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email us",
    value: business.email,
    href: business.emailHref,
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: business.address,
    href: business.mapHref,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-soft pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#08245C_0%,#0B43C9_58%,#1456E8_100%)] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,159,28,0.28),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_68%)]"
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-accent" />
                <span className="eyebrow text-accent">Free Counselling</span>
              </p>

              <h2
                id="contact-title"
                className="mt-4 text-[30px] leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-[38px] lg:text-[44px]"
              >
                Book your free
                <br />
                consultation today
              </h2>

              <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-white/80 sm:text-[17px]">
                Sit down with a counsellor — in our Kathmandu office or over a
                call — and leave with a realistic plan for your country, course
                and budget. No fee, no obligation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={business.phoneHref}
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-white px-7 text-[15px] font-bold text-royal shadow-[0_8px_24px_rgba(4,18,54,0.28)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-[16px]"
                >
                  <CalendarDays className="size-[19px]" strokeWidth={2.2} />
                  Book Free Consultation
                  <ArrowRight
                    className="size-[18px] transition-transform duration-200 group-hover:translate-x-[3px]"
                    strokeWidth={2.4}
                  />
                </a>
                <a
                  href={business.emailHref}
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-white/45 px-7 text-[15px] font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:text-[16px]"
                >
                  <Mail className="size-[18px]" strokeWidth={2.2} />
                  Email us
                </a>
              </div>
            </div>

            <ul className="grid gap-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm transition-colors duration-200 hover:border-white/40 hover:bg-white/15"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-white"
                    >
                      <channel.icon className="size-5" strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1 block text-[15px] leading-snug font-bold break-words">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
