type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  /** Renders as an h2 by default; pass an id to make it an anchor target label. */
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <p
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-accent sm:w-10" />
        <span className="eyebrow text-royal">{eyebrow}</span>
        <span
          aria-hidden="true"
          className={`h-px w-8 bg-accent sm:w-10 ${centered ? "" : "hidden"}`}
        />
      </p>

      <h2
        id={id}
        className={`mt-4 text-[28px] leading-[1.12] font-extrabold tracking-[-0.03em] text-ink sm:text-[34px] lg:text-[40px] ${
          centered ? "mx-auto max-w-[820px]" : ""
        }`}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mt-3 text-[15px] leading-[1.6] text-muted sm:text-[17px] ${
            centered ? "mx-auto max-w-[620px]" : "max-w-[560px]"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
