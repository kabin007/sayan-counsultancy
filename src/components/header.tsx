"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CalendarDays, Menu, X } from "lucide-react";
import { business, navItems } from "@/data/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  /* Subtle elevation once the page leaves the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(20,50,100,0.08),0_6px_20px_rgba(10,29,70,0.06)]"
          : "shadow-[0_1px_0_rgba(20,50,100,0.08)]"
      }`}
    >
      <div className="shell flex h-[64px] items-center justify-between gap-4 md:h-[78px]">
        {/* ---------- Logo ---------- */}
        <a
          href="#home"
          aria-label={`${business.name} — home`}
          className="flex shrink-0 items-center gap-2 md:gap-2.5"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={410}
            height={206}
            priority
            className="h-7 w-auto min-[380px]:h-8 sm:h-9 xl:h-10 2xl:h-[44px]"
          />
          <Image
            src="/logo-wordmark.png"
            alt={business.name}
            width={999}
            height={120}
            priority
            className="h-[18px] w-auto min-[380px]:h-[22px] sm:h-[26px] xl:h-[28px] 2xl:h-[32px]"
          />
        </a>

        {/* ---------- Desktop navigation ---------- */}
        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 justify-center xl:flex"
        >
          <ul className="flex items-center gap-5 2xl:gap-7">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block py-2 text-[14px] font-semibold whitespace-nowrap transition-colors 2xl:text-[14.5px] ${
                      isActive
                        ? "text-bright"
                        : "text-ink/75 hover:text-royal"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-bright transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ---------- Right-hand actions ---------- */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="btn-gradient group hidden items-center gap-2.5 rounded-[14px] py-2 pr-4 pl-2 text-[13.5px] font-bold text-white shadow-cta transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-cta-hover sm:inline-flex xl:gap-3 xl:py-2.5 xl:pr-6 xl:pl-2.5 xl:text-[15px]"
          >
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-[9px] bg-white/18 xl:size-9"
            >
              <CalendarDays className="size-[17px]" strokeWidth={2.2} />
            </span>
            <span className="hidden lg:inline">Book Free Counseling</span>
            <span className="lg:hidden">Book Free</span>
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
              strokeWidth={2.4}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-hairline bg-white text-ink transition-colors hover:bg-sky xl:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={2.2} />
            ) : (
              <Menu className="size-5" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {/* ---------- Mobile navigation sheet ---------- */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-hairline bg-white xl:hidden"
      >
        <nav aria-label="Mobile" className="shell py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "page" : undefined}
                  className={`block border-b border-hairline/70 py-3.5 text-[15px] font-semibold transition-colors ${
                    active === item.href
                      ? "text-royal"
                      : "text-ink hover:text-royal"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gradient mt-5 flex h-12 items-center justify-center gap-2.5 rounded-xl text-[15px] font-bold text-white shadow-cta sm:hidden"
          >
            <CalendarDays className="size-[18px]" strokeWidth={2.2} />
            Book Free Counseling
            <ArrowRight className="size-4" strokeWidth={2.4} />
          </a>
        </nav>
      </div>
    </header>
  );
}
