import Link from "next/link";
import { comingSoonToneClassName } from "@/shared/constants/coming-soon";
import type { ComingSoonSectionProps } from "@/shared/types/coming-soon.types";

export function ComingSoonSection({
  tone,
  badge,
  accent,
  description,
  whatsappHref,
  whatsappLabel,
  secondaryHref,
  secondaryLabel,
}: ComingSoonSectionProps) {
  const toneClasses = comingSoonToneClassName[tone];

  return (
    <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28 text-center">
      <div
        className={`mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pill border shadow-xs backdrop-blur-md ${toneClasses.pill}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${toneClasses.dot}`}
        />
        <span
          className={`text-[11px] font-serif-luxury tracking-widest uppercase font-semibold ${toneClasses.accent}`}
        >
          {badge}
        </span>
      </div>

      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.15]">
        Invitaciones Digitales <br />
        <span className={`italic font-normal ${toneClasses.accent}`}>
          {accent}
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted font-light tracking-wide max-w-xl mx-auto leading-relaxed">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-medium text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 ${toneClasses.cta}`}
        >
          <span>{whatsappLabel}</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-line-strong bg-chip text-ink text-xs sm:text-sm font-medium transition-all"
        >
          <span>{secondaryLabel}</span>
        </Link>
      </div>
    </section>
  );
}
