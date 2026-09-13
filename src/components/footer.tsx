import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { allServices, business, navItems } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white py-12 lg:py-14">
      <div className="shell grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/sayan-logo.png"
            alt={business.name}
            width={666}
            height={314}
            className="h-[74px] w-auto"
          />
          <p className="mt-5 max-w-[320px] text-[14px] leading-[1.65] text-muted">
            Guiding students from Nepal to universities and language schools
            across Japan, Australia, the UK, Canada and the USA.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-navy">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[14px] font-semibold text-muted transition-colors hover:text-royal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-navy">Get in touch</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-start gap-2.5 text-[14px] font-semibold text-muted transition-colors hover:text-royal"
              >
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-royal" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="flex items-start gap-2.5 text-[14px] font-semibold break-all text-muted transition-colors hover:text-royal"
              >
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-royal" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.mapHref}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-2.5 text-[14px] font-semibold text-muted transition-colors hover:text-royal"
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-royal" />
                {business.address}
              </a>
            </li>
          </ul>

          <h2 className="eyebrow mt-7 text-navy">Services</h2>
          <p className="mt-3 text-[13.5px] leading-[1.7] text-muted">
            {allServices.join(" · ")}
          </p>
        </div>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <p className="font-script text-[18px] leading-none text-royal">
          {business.tagline}
        </p>
      </div>
    </footer>
  );
}
