---
version: alpha
name: FestanovaCo
description: Invitaciones digitales premium para bodas, cumpleaños y celebraciones. Shell de marketing con identidad cálida, editorial y marca-first.
colors:
  primary: "#064e3b"
  primary-deep: "#022c22"
  primary-mid: "#065f46"
  primary-muted: "#ecfdf5"
  primary-muted-strong: "#d1fae5"
  primary-line: "#6ee7b7"
  primary-dot: "#059669"
  on-primary: "#fae2ab"
  on-cta: "#ffffff"
  secondary: "#c5a880"
  secondary-glow: "#e5c583"
  gold: "#fae2ab"
  tertiary: "#9f1239"
  neutral: "#f7f3eb"
  surface: "#ffffff"
  surface-muted: "#f7f3ec"
  surface-sunken: "#f7f3eb"
  surface-hover: "#fcfbf9"
  on-surface: "#1c1917"
  ink: "#1c1917"
  ink-soft: "#44403c"
  muted: "#57534e"
  subtle: "#78716c"
  faint: "#a8a29e"
  line: "#e9dfd0"
  line-strong: "#d9ceba"
  line-soft: "#e7e5e4"
  chip: "#f5f5f4"
  error: "#9f1239"
  live: "#34d399"
typography:
  brand:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-display:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.6
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.6
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.55
  label-lg:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.2em
  mono-meta:
    fontFamily: Geist Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section-y: 80px
  gutter: 24px
  margin: 16px
  max-content: 1152px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-cta}"
    rounded: "{rounded.full}"
    padding: 14px
    typography: "{typography.label-md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: 14px
  button-on-wash:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: 8px
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 8px
  chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.subtle}"
    rounded: "{rounded.full}"
    padding: 8px
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 24px
  navbar:
    backgroundColor: "rgb(255 255 255 / 0.9)"
    textColor: "{colors.ink}"
    height: 64px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 12px
---
# FestanovaCo Design System

Fuente de verdad visual para agentes (Stitch / coding agents). Los tokens YAML son normativos; la prosa explica el porqué. Los valores viven también en `src/app/globals.css` — si hay conflicto, alinear este archivo con el CSS.

## Overview

FestanovaCo es una marca de invitaciones digitales premium. La UI del shell de marketing debe sentirse como una papelería de lujo contemporánea: cálida, editorial y serena, nunca tecnológica ni genérica.

Personalidad: celebración íntima, confianza artesanal, detalle editorial. Audiencia: parejas y anfitriones que buscan una invitación web con presencia de marca, no un dashboard.

Principios de composición:

- **Una composición por viewport:** el primer pantallazo no es un dashboard; es una escena.
- **Brand in chrome:** “FestanovaCo” vive en nav, cortina y wordmark de shell. No duplicar el logotipo como bloque aparte encima del H1 del hero.
- **Un trabajo por sección:** un propósito, un titular, una frase de apoyo.
- **Ancla visual real:** la imagen muestra el producto (invitación / preview), el lugar o la atmósfera. Gradientes abstractos no sustituyen la idea visual principal.
- **Poco ruido:** evita clusters de pills, tiras de stats, filas de iconos y bloques de marketing secundario en el hero.
- **Motion con intención:** 2–3 movimientos deliberados (entrada, hover de CTA, transición de cortina); no decoración aleatoria.

Modo claro: papel cálido (`neutral`) + tinta piedra + esmeralda de marca. Modo oscuro: noche cálida (`#161311`) con acentos champagne/oro (`#f3e0b5` / `#e7c98a`); el CTA pasa a gradiente dorado sobre texto oscuro.

## Colors

La paleta se ancla en un fondo de papel cálido, tinta stone y un verde esmeralda profundo como firma. El oro champagne es el contraste sobre marca, no el color principal de interacción en light mode.

- **Primary / Brand (#064e3b):** Verde bosque — CTAs, links, acentos de marca, monogramas. En dark mode el rol “brand” se invierte a champagne (`#f3e0b5`).
- **Primary deep (#022c22):** Hover de CTA y cortinas de transición.
- **Secondary / Accent (#c5a880):** Oro suave — reglas ornamentales, gemas, hairlines; no saturar pantallas enteras.
- **Gold (#fae2ab):** Texto sobre superficies brand (`on-brand`); monograma “Co” en cortina.
- **Neutral (#f7f3eb):** Lienzo de página (papel). Surfaces blancas (`#ffffff`) se elevan sobre él.
- **Ink (#1c1917) / muted / subtle / faint:** Escala tipográfica de énfasis; nunca usar gris frío genérico.
- **Line (#e9dfd0):** Bordes cálidos; `line-strong` para controles secundarios.
- **Tertiary / Blush (#9f1239):** Solo matices de categoría o estados especiales; no competir con brand.
- **Live (#34d399):** Indicadores “en vivo” / puntos de estado.

Contraste: texto normal ≥ WCAG AA (4.5:1). CTA light: blanco sobre brand. CTA dark: tinta oscura sobre gradiente oro.

## Typography

Dos voces: serif de lujo para marca y títulos; sans ligera para cuerpo y UI.

- **Playfair Display (**`font-serif-luxury`**):** Brand wordmark, H1–H3 de sección, nombres de plantilla, badges editoriales en mayúsculas con tracking amplio.
- **Geist:** Cuerpo, nav, botones, metadatos. Preferir `font-light` / `font-medium`; evitar paredes de `font-bold` en sans.
- **Geist Mono:** Metadatos técnicos (códigos de plantilla, badges de colección).

Jerarquía típica de sección: badge label-sm (serif o sans uppercase) → headline serif → body-sm/md muted light → CTA.

El wordmark es `Festanova` + `Co` en peso semibold y color `primary-mid` (light) o `gold` (sobre cortina oscura).

## Layout

Grid fluido en móvil; contenedor fijo en desktop con `max-w-6xl` (\~1152px) para shell (nav, footer, grids de catálogo). Paneles de contacto / coming-soon pueden usar `max-w-2xl`–`max-w-4xl` centrados.

Escala base 4/8px. Gutters `px-4 sm:px-6`. Secciones verticales generosas (`py-20` / `py-28` en momentos heroicos; menos en listados densos).

Hero de marketing: full-bleed o atmósfera de fondo a borde; no meter la imagen hero en una card inset, collage ni panel lateral salvo que el patrón existente lo exija. Presupuesto del primer viewport: marca, un titular, una frase, un grupo de CTAs, una imagen dominante.

## Elevation & Depth

Profundidad suave, no material design pesado.

- Cards / paneles: `shadow-card` / `shadow-panel` (sombra brand teñida al 6–12% en light; más profunda en dark).
- CTA: `shadow-cta` con glow brand; refuerza en hover.
- Navbar: vidrio (`rgb(255 255 255 / 0.9)` light; tinta oscura translúcida en dark) + blur.
- Alternativa flat: bordes `line` / `badge-line` y capas tonales (`surface` sobre `neutral`) cuando no haga falta sombra.
- Dark mode: atmósfera con radiales champagne fijos en `body`; no aplanar a negro puro.

## Shapes

Lenguaje redondeado y amable, no geométrico-agresivo.

- CTAs principales y pills/badges: `rounded-full`.
- Controles densos (paginación, menú móvil, inputs): `rounded-xl` (12px).
- Paneles y previews: `rounded-2xl`–`rounded-3xl` o radios extendidos del theme (`radius-4xl`+).
- No mezclar esquinas afiladas (0) con full-pill en la misma vista salvo divisores ornamentales (`ornament-rule`, `hairline`).

## Components

- **Buttons primary (**`.btn-primary` **/** `.btn-asesoria`**):** Fill brand (light) o gradiente oro (dark); texto `on-cta`; uppercase tracking-wider; `rounded-full`; hover scale sutil (\~1.02) y active \~0.98.
- **Buttons secondary:** Chip/surface, borde `line-strong`, texto ink; mismo radio full en CTAs de página.
- **Buttons on-wash (**`.btn-on-wash`**):** Sobre foto/wash oscuro — borde blanco translúcido; hover a papel + tinta.
- **Navbar:** Wordmark serif + links muted medium + un solo CTA asesoria; menú móvil sheet con items `rounded-xl`.
- **Badges / chips:** Pill con borde `badge-line` o `brand-line`; label 11px uppercase tracking amplio.
- **Panels (**`.panel`**):** Surface elevada; en dark, gradiente sutil hacia surface.
- **Cards de catálogo:** Interacción (hover glow, link); no usar cards decorativas en el hero.
- **Theme toggle:** Círculo 36px, borde `toggle-border`, sombra suave.
- **Curtain transition:** Fill `primary-deep` / brand; wordmark blanco + Co gold.
- **Mark / monogram:** Cuadrado brand con initiales en gold o blanco.

## Do's and Don'ts

- Do mantener “FestanovaCo” en nav y cortina; no repetirlo como título encima del H1 del hero.
- Do usar Playfair solo para marca y titulares; Geist para UI y cuerpo.
- Do un CTA primario dominante por pantalla (asesoria / WhatsApp / ver modelo).
- Do respetar tokens de `globals.css` (`bg-brand`, `text-ink`, `border-line`, etc.) en lugar de hex sueltos.
- Do mantener contraste AA; en dark, texto champagne sobre fondos `#161311` / `#221e1a`.
- Don't llenar el primer viewport con stats, agendas, direcciones o promos secundarias.
- Don't superponer badges flotantes ni stickers encima de media hero.
- Don't caer en purple-on-white, glow neon ni tipografías system (Inter/Roboto/Arial) como voz de marca.
- Don't añadir una tercera familia tipográfica ni un acento que compita con brand + gold.
- Don't convertir secciones narrativas en dashboards de cards; las cards solo cuando contienen interacción (catálogo, FAQ, formularios).
- Don't hardcodear rutas, teléfonos o ids de sección; usar `src/shared/config/`.