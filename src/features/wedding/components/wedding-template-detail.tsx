"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ROUTES } from "@/shared/config/routes";
import type { WeddingTemplate } from "../types/wedding-templates.types";

interface WeddingTemplateDetailProps {
  template: WeddingTemplate;
  allTemplates: WeddingTemplate[];
}

export function WeddingTemplateDetail({
  template,
  allTemplates,
}: WeddingTemplateDetailProps) {
  const whatsappUrl = `https://wa.me/573000000000?text=${encodeURIComponent(
    template.whatsappMessage
  )}`;

  const currentIndex = allTemplates.findIndex((t) => t.id === template.id);
  const prevTemplate =
    currentIndex > 0 ? allTemplates[currentIndex - 1] : allTemplates[allTemplates.length - 1];
  const nextTemplate =
    currentIndex < allTemplates.length - 1 ? allTemplates[currentIndex + 1] : allTemplates[0];

  return (
    <div className="w-full min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-stone-900 dark:text-stone-100">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-light text-stone-500 dark:text-stone-400">
          <Link
            href={ROUTES.home}
            className="hover:text-emerald-900 dark:hover:text-amber-200 transition-colors"
          >
            Inicio
          </Link>
          <span className="text-stone-300 dark:text-stone-600">&bull;</span>
          <Link
            href={ROUTES.wedding}
            className="hover:text-emerald-900 dark:hover:text-amber-200 transition-colors"
          >
            Colección Bodas
          </Link>
          <span className="text-stone-300 dark:text-stone-600">&bull;</span>
          <span className="font-medium text-stone-900 dark:text-white font-serif-luxury">
            Modelo {template.number}: {template.name}
          </span>
        </nav>

        <Link
          href={ROUTES.weddingCatalog}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-emerald-900 dark:text-stone-300 dark:hover:text-amber-200 transition-colors"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Volver al Catálogo</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-serif-luxury text-[11px] font-semibold tracking-wider uppercase px-3 py-0.5 rounded-full bg-emerald-900 text-white dark:bg-amber-300 dark:text-stone-950 shadow-xs">
              Modelo {template.number}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-200 dark:border-white/10 px-3 py-0.5 rounded-full">
              {template.styleTag}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 dark:text-white leading-[1.12]">
            {template.name}
          </h1>
          <p className="font-serif-luxury text-lg sm:text-xl text-stone-700 dark:text-amber-200 font-light mt-1">
            Diseño para {template.couplesNames}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light">
            <span className="flex items-center gap-1.5">
              <svg className="size-4 text-emerald-800 dark:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Fecha Ref: <strong className="font-medium text-stone-800 dark:text-stone-200">{template.dateExample}</strong>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <svg className="size-4 text-emerald-800 dark:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {template.locationExample}
            </span>
          </div>

          <div className="mt-6 p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900/60 border border-[#E9DFD0] dark:border-white/10 shadow-xs">
            <h2 className="text-xs font-serif-luxury uppercase tracking-[0.2em] text-emerald-900 dark:text-amber-200 font-semibold mb-2">
              Concepto Editorial del Diseño
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {template.story}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-950 dark:bg-linear-to-r dark:from-amber-200 dark:via-amber-300 dark:to-amber-400 text-white dark:text-stone-950 font-medium text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Cotizar este Modelo por WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            {template.isAvailable && template.demoHref && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={template.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 hover:border-stone-400 dark:border-white/20 dark:hover:border-white/40 bg-white dark:bg-stone-800 text-stone-800 dark:text-white font-medium text-xs sm:text-sm shadow-xs transition-all"
              >
                <span>Ver Invitación en Vivo (Demo)</span>
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full rounded-4xl sm:rounded-5xl overflow-hidden border border-stone-200/80 dark:border-white/15 bg-white dark:bg-stone-900 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
            {template.previewImage ? (
              <div className="relative w-full h-85 sm:h-100 overflow-hidden">
                <Image
                  src={template.previewImage}
                  alt={`Plantilla ${template.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif-luxury text-sm font-semibold">{template.name}</p>
                  <p className="text-[11px] text-white/80 font-light">Captura real de la plantilla web en vivo</p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-85 sm:h-100 flex flex-col items-center justify-center p-8 bg-linear-to-br from-stone-50 via-stone-100/80 to-stone-200/60 dark:from-[#24211e] dark:via-[#1c1917] dark:to-[#141210]">
                <div className="absolute inset-4 border border-stone-300/60 dark:border-white/10 rounded-3xl pointer-events-none" />
                <div className="size-16 rounded-2xl bg-emerald-900 text-[#fae2ab] flex items-center justify-center font-serif-luxury text-2xl font-bold mb-3 shadow-md">
                  F{template.number}
                </div>
                <p className="font-serif-luxury text-xs uppercase tracking-[0.25em] text-stone-400">
                  Modelo en Preparación
                </p>
                <h3 className="font-serif-luxury text-2xl font-normal text-stone-800 dark:text-stone-200 text-center mt-1">
                  {template.couplesNames}
                </h3>
                <div className="w-12 h-px bg-stone-300 dark:bg-white/20 my-3" />
                <p className="text-xs text-stone-500 dark:text-stone-400 font-light text-center max-w-xs">
                  {template.styleTag} &bull; {template.locationExample}
                </p>
              </div>
            )}

            <div className={`p-4 bg-linear-to-r ${template.theme.accentGradient} text-white flex items-center justify-between text-xs`}>
              <span className="font-serif-luxury tracking-wider">Colección FestanovaCo Bodas</span>
              <span className="font-mono text-[10px] uppercase">{template.badge}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900/60 border border-[#E9DFD0] dark:border-white/10 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-9 rounded-xl bg-emerald-50 dark:bg-amber-950/40 text-emerald-900 dark:text-amber-200 flex items-center justify-center border border-emerald-200/60 dark:border-amber-300/30">
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-stone-900 dark:text-white">
                Paleta de Colores
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-light mb-4">
              Combinación armónica seleccionada para este modelo:
            </p>

            <div className="space-y-2.5">
              {template.colors.map((color, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8F5] dark:bg-stone-800/60 border border-stone-200/60 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="size-6 rounded-full border border-black/15 shadow-2xs shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-stone-800 dark:text-stone-200 leading-none">
                        {color.name}
                      </span>
                      <span className="text-[10px] text-stone-400 font-light mt-0.5">
                        {color.role}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400 font-medium">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-stone-400 dark:text-stone-500 font-light mt-4 pt-3 border-t border-stone-100 dark:border-white/10">
            * Se pueden personalizar los tonos según tus flores o decoración.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900/60 border border-[#E9DFD0] dark:border-white/10 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-9 rounded-xl bg-emerald-50 dark:bg-amber-950/40 text-emerald-900 dark:text-amber-200 flex items-center justify-center border border-emerald-200/60 dark:border-amber-300/30">
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-stone-900 dark:text-white">
                Música & Ambientación
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-light mb-4">
              Melodía sugerida para la experiencia de apertura:
            </p>

            <div className="p-4 rounded-2xl bg-linear-to-br from-[#FAF8F5] to-[#F3EEE5] dark:from-stone-900 dark:to-stone-950 text-stone-900 dark:text-white shadow-xs border border-[#E9DFD0] dark:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-emerald-900 dark:bg-amber-400 text-[#fae2ab] dark:text-stone-950 flex items-center justify-center font-serif-luxury font-bold text-sm shrink-0 shadow-xs">
                  ♫
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-medium text-stone-900 dark:text-white truncate">{template.music.title}</p>
                  <p className="text-[10px] text-stone-500 dark:text-stone-400 truncate">{template.music.artist}</p>
                </div>
              </div>

              <div className="w-full h-1.5 bg-stone-200/80 dark:bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="w-2/5 h-full bg-linear-to-r from-emerald-800 to-[#C5A880] dark:from-[#fae2ab] dark:to-[#ebd097] rounded-full" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-stone-400">
                <span>Género: <strong className="text-stone-800 dark:text-stone-200">{template.music.genre}</strong></span>
                <span>Auto-play sutil</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] dark:bg-stone-800/60 border border-stone-200/60 dark:border-white/5">
              <span className="text-[10px] uppercase font-semibold text-emerald-900 dark:text-amber-200 tracking-wider">
                Vibra que transmite:
              </span>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-light mt-1">
                {template.music.vibe}
              </p>
            </div>
          </div>

          <p className="text-[11px] text-stone-400 dark:text-stone-500 font-light mt-4 pt-3 border-t border-stone-100 dark:border-white/10">
            * Puedes elegir cualquier canción de tu historia de amor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-stone-900/60 border border-[#E9DFD0] dark:border-white/10 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-9 rounded-xl bg-emerald-50 dark:bg-amber-950/40 text-emerald-900 dark:text-amber-200 flex items-center justify-center border border-emerald-200/60 dark:border-amber-300/30">
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif-luxury text-lg font-medium text-stone-900 dark:text-white">
                Capacidad de Imágenes
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-light mb-4">
              Distribución de fotos en alta resolución para la plantilla:
            </p>

            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="p-2.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/80 border border-stone-200/70 dark:border-white/10">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-emerald-900 dark:text-amber-200 block">
                  {template.photoCapacity.galleryMaxPhotos}
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                  Galería Álbum
                </span>
              </div>
              <div className="p-2.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/80 border border-stone-200/70 dark:border-white/10">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-emerald-900 dark:text-amber-200 block">
                  {template.photoCapacity.coverPhotos}
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                  Portada / Header
                </span>
              </div>
              <div className="p-2.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/80 border border-stone-200/70 dark:border-white/10">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-emerald-900 dark:text-amber-200 block">
                  {template.photoCapacity.timelinePhotos}
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                  Timeline
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {template.photoCapacity.description}
            </p>
          </div>

          <p className="text-[11px] text-stone-400 dark:text-stone-500 font-light mt-4 pt-3 border-t border-stone-100 dark:border-white/10">
            * Optimización automática para carga ultrarrápida en smartphones.
          </p>
        </motion.div>
      </div>

      <div className="mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-emerald-900 dark:text-amber-200 border border-[#D9CEBA] dark:border-amber-300/40 px-3.5 py-1 rounded-full bg-white dark:bg-amber-950/40 shadow-xs">
            Todo Incluido
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-stone-900 dark:text-white mt-3">
            Módulos y características de esta plantilla
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light mt-2">
            Cada sección está diseñada para brindar la máxima comodidad tanto a los novios como a sus invitados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {template.includedModules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: (idx % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-5 sm:p-6 rounded-3xl bg-white hover:bg-[#FCFBF9] dark:bg-stone-900/60 dark:hover:bg-stone-800/80 border border-[#E9DFD0] hover:border-[#C5A880] dark:border-white/10 dark:hover:border-amber-300/30 transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="size-7 rounded-full bg-emerald-100 dark:bg-amber-950/60 text-emerald-900 dark:text-amber-200 text-xs font-semibold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2.5 py-0.5 rounded-full">
                    {module.tag}
                  </span>
                </div>
                <h4 className="font-serif-luxury text-base font-medium text-stone-900 dark:text-white mb-1.5">
                  {module.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 sm:p-10 rounded-3xl sm:rounded-4xl bg-linear-to-b from-white to-[#FAF6F0] dark:from-stone-900/90 dark:to-stone-950/95 border border-[#E9DFD0] dark:border-white/15 shadow-sm mb-16 sm:mb-20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <span className="size-8 rounded-full bg-emerald-900 text-white dark:bg-amber-300 dark:text-stone-950 flex items-center justify-center text-sm font-bold shrink-0">
              ✓
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-normal text-stone-900 dark:text-white leading-snug">
              ¿Cómo personalizamos este modelo para tu matrimonio?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed mb-6">
            Al ordenar tu invitación con FestanovaCo, nosotros nos encargamos de todo el montaje técnico y diseño. Tú solo nos envías tu información y nosotros preparamos tu enlace exclusivo.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {template.customizationNotes.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-stone-200/70 dark:border-white/10 text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed"
              >
                <span className="text-emerald-700 dark:text-amber-300 font-bold shrink-0 mt-0.5">&bull;</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-5xl sm:rounded-7xl border border-[#E9DFD0] dark:border-white/20 bg-linear-to-b from-white to-[#F7F3EC] dark:from-stone-900/90 dark:to-stone-950/95 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-[0_16px_40px_rgba(27,67,50,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] mb-16 sm:mb-20"
      >
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 sm:size-96 rounded-full bg-[#C5A880]/20 dark:bg-amber-400/15 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-300/60 dark:border-amber-300/30 bg-emerald-50/90 dark:bg-amber-950/40 backdrop-blur-md mb-6">
            <span className="size-2 rounded-full bg-emerald-600 dark:bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-emerald-950 dark:text-amber-200">
              Atención Directa &bull; Respuesta Rápida
            </span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-stone-900 dark:text-white">
            ¿Te gustó el modelo {template.name}?
          </h3>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed mt-3 mb-8">
            Escríbenos directamente a WhatsApp o envíanos un correo para consultar fecha de entrega, cotización y opciones de personalización para tu boda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-950 dark:bg-linear-to-r dark:from-amber-200 dark:via-amber-300 dark:to-amber-400 text-white dark:text-stone-950 font-medium text-sm shadow-[0_8px_24px_rgba(27,67,50,0.25)] dark:shadow-[0_8px_24px_rgba(216,176,102,0.35)] hover:shadow-[0_12px_28px_rgba(27,67,50,0.35)] dark:hover:shadow-[0_12px_32px_rgba(216,176,102,0.5)] transition-all duration-300"
            >
              <span>Pedir Asesoría para este Modelo</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            <Link
              href={ROUTES.weddingCatalog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 hover:border-stone-400 dark:border-white/20 dark:hover:border-white/40 bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-stone-800 dark:text-white text-sm font-medium transition-all duration-300 shadow-xs"
            >
              <span>Ver Otros Modelos</span>
            </Link>
          </div>

          <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light mt-8 tracking-wide">
            FestanovaCo &bull; Papelería Digital & Experiencias Web de Boda
          </p>
        </div>
      </motion.div>

      <div className="pt-8 border-t border-stone-200/80 dark:border-white/10 flex items-center justify-between gap-4">
        <Link
          href={`/wedding/${prevTemplate.id}`}
          className="group flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-amber-200"
        >
          <span className="size-8 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center group-hover:border-emerald-800 transition-colors">
            &larr;
          </span>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] text-stone-400">Anterior</span>
            <span className="font-serif-luxury font-medium text-stone-900 dark:text-white">
              {prevTemplate.name}
            </span>
          </div>
        </Link>

        <Link
          href={ROUTES.weddingCatalog}
          className="text-xs font-serif-luxury uppercase tracking-widest text-emerald-900 dark:text-amber-200 font-semibold hover:underline"
        >
          Catálogo Completo
        </Link>

        <Link
          href={`/wedding/${nextTemplate.id}`}
          className="group flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-amber-200"
        >
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[10px] text-stone-400">Siguiente</span>
            <span className="font-serif-luxury font-medium text-stone-900 dark:text-white">
              {nextTemplate.name}
            </span>
          </div>
          <span className="size-8 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center group-hover:border-emerald-800 transition-colors">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
