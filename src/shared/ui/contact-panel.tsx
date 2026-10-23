"use client";

import { motion } from "motion/react";
import {
  CONTACT_SECONDARY_CLASS_NAME,
  CONTACT_WHATSAPP_CLASS_NAME,
  contactDescriptionClassName,
  contactTitleClassName,
} from "@/shared/constants/contact-panel";
import type { ContactPanelProps } from "@/shared/types/contact-panel.types";
import { MailIcon } from "@/shared/ui/mail-icon";
import { MotionLink } from "@/shared/ui/motion-link";
import { isAppRoute, isMailLink } from "@/shared/utils/href";

export function ContactPanel({
  badge,
  title,
  description,
  whatsappHref,
  whatsappLabel,
  secondaryHref,
  secondaryLabel,
  footnote,
  heading = "h2",
  className = "",
}: ContactPanelProps) {
  const Title = heading;
  const secondaryContent = (
    <>
      {isMailLink(secondaryHref) ? <MailIcon /> : null}
      <span>{secondaryLabel}</span>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`panel relative overflow-hidden rounded-5xl sm:rounded-7xl border border-line p-8 sm:p-14 text-center backdrop-blur-2xl ${className}`}
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-line bg-brand-muted backdrop-blur-md mb-6">
          <span className="size-2 rounded-full bg-brand-dot animate-pulse" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-brand">
            {badge}
          </span>
        </div>

        <Title className={contactTitleClassName[heading]}>{title}</Title>

        <p className={contactDescriptionClassName[heading]}>{description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={CONTACT_WHATSAPP_CLASS_NAME}
          >
            <span>{whatsappLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </motion.a>

          {isAppRoute(secondaryHref) ? (
            <MotionLink
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={secondaryHref}
              className={CONTACT_SECONDARY_CLASS_NAME}
            >
              {secondaryContent}
            </MotionLink>
          ) : (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={secondaryHref}
              className={CONTACT_SECONDARY_CLASS_NAME}
            >
              {secondaryContent}
            </motion.a>
          )}
        </div>

        <p className="text-[11px] text-subtle font-light mt-8 tracking-wide">
          {footnote}
        </p>
      </div>
    </motion.div>
  );
}
