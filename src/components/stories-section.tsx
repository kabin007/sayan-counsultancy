import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { stories } from "@/data/site-data";

export function StoriesSection() {
  return (
    <section
      id="success-stories"
      aria-labelledby="stories-title"
      className="bg-soft py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          id="stories-title"
          eyebrow="Success Stories"
          title="Students who are already there"
          subtitle="A few of the people we have guided from a first consultation in Kathmandu to a campus abroad."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {stories.map((story) => (
            <li
              key={story.name}
              className="flex flex-col rounded-[18px] border border-cardline bg-white p-6 shadow-card sm:p-7"
            >
              <Quote
                aria-hidden="true"
                className="size-7 text-accent"
                strokeWidth={2}
              />
              <blockquote className="mt-4 flex-1 text-[15px] leading-[1.65] text-ink">
                {story.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-sky text-[14px] font-extrabold text-royal"
                >
                  {story.initials}
                </span>
                <div>
                  <p className="text-[14.5px] leading-tight font-bold text-ink">
                    {story.name}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-tight text-muted">
                    {story.detail}
                  </p>
                </div>
                <span className="ml-auto flex gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="size-3.5 fill-accent text-accent"
                    />
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
