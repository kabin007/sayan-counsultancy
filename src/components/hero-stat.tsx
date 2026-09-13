type HeroStatProps = {
  value: string;
  label: string;
  accent?: boolean;
};

export function HeroStat({ value, label, accent = false }: HeroStatProps) {
  return (
    <div>
      <p
        className={`text-[26px] leading-none font-extrabold tracking-[-0.035em] sm:text-[30px] xl:text-[34px] ${
          accent ? "text-bright" : "text-ink"
        }`}
      >
        {value}
      </p>
      <p className="mt-2.5 text-[13px] leading-snug text-muted sm:text-[14.5px]">
        {label}
      </p>
    </div>
  );
}
