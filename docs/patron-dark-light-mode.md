# Guía y Patrón: Dark Mode / Light Mode en FestanovaCo

Cookbook técnico para implementar light/dark en el shell. La identidad visual (qué se ve y por qué) está en [`docs/DESIGN.md`](./DESIGN.md). Los valores canónicos viven en `src/app/globals.css`.

**Regla base:** usa tokens semánticos (`bg-brand`, `text-ink`, `border-line`, …). Casi nunca hace falta `dark:*` en el JSX: la clase `.dark` en `<html>` ya redefine las CSS variables.

---

## 1. Filosofía y paleta (alineada a DESIGN.md)

| Modo | Estilo | Fondo (`background`) | Superficie (`surface`) | Rol brand | Acento / oro |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Light** | Papel cálido editorial | `#f7f3eb` | `#ffffff` / hover `#fcfbf9` | Esmeralda `#064e3b` | Arena `#c5a880`, líneas `#e9dfd0` |
| **Dark** | Noche cálida champagne | `#161311` | `#221e1a` / hover `#2f2924` | Champagne `#f3e0b5` | Oro `#e7c98a`, líneas champagne translúcidas |

> **Regla de oro:** no uses grises fríos (`slate-*`, `zinc-*`, `gray-*`), negros planos `#000`, ni hex sueltos en componentes. No inventes un tercer acento que compita con brand + gold (ver Don’ts en `DESIGN.md`).

Inversión de rol: en light, brand = verde y CTA sólido; en dark, `--brand` pasa a champagne y `--cta` a gradiente dorado con `--on-cta` oscuro. Por eso `bg-brand` / `.btn-primary` bastan en ambos modos.

---

## 2. Configuración técnica base

En `src/app/globals.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #f7f3eb;
  --foreground: #1c1917;
  --brand: #064e3b;
  --cta: var(--brand);
  --on-cta: #ffffff;
  /* …resto de tokens en globals.css */
}

.dark {
  --background: #161311;
  --foreground: #f6f1e8;
  --brand: #f3e0b5;
  --cta: linear-gradient(90deg, #faeecd, #e7c98a, #d7b56a);
  --on-cta: #161311;
  /* … */
}
```

Los tokens se exponen a Tailwind vía `@theme inline` (`--color-brand` → `bg-brand`, `text-ink`, etc.).

Estado del tema: `src/shared/providers/theme-provider.tsx` + `src/shared/ui/theme-toggle.tsx`. Clave compartida: `THEME_STORAGE_KEY` en `src/shared/config/theme.ts` (`"festanova_theme"`).

---

## 3. Mapa de tokens → clases

Prefiere una sola clase semántica. Evita pares `text-stone-900 dark:text-white`.

| Rol | Clase | Notas |
| :--- | :--- | :--- |
| Lienzo de página | `bg-background` / `text-foreground` | Body ya lo aplica en layout |
| Título / texto fuerte | `text-ink` | Escala: `ink` → `ink-soft` → `muted` → `subtle` → `faint` |
| Cuerpo | `text-muted font-light` | |
| Caption / meta | `text-subtle` o `text-faint` | |
| Enlace | `text-link hover:text-brand` | En dark, link ya es champagne |
| Marca / acento UI | `text-brand`, `bg-brand`, `border-brand-line` | |
| Superficie elevada | `bg-surface` / `hover:bg-surface-hover` | |
| Chip / control | `bg-chip`, `bg-control` | |
| Borde | `border-line` / `border-line-strong` / `border-badge-line` | |
| Sombra card | `shadow-[var(--shadow-card)]` | Hover: `--shadow-card-hover` |
| CTA primario | `.btn-primary` (+ `.btn-asesoria` si aplica) | Usa `--cta` / `--on-cta` |
| Sobre wash/foto | `.btn-on-wash` | |

---

## 4. Guía por componente

### 4.1. Tipografía

| Elemento | Clases |
| :--- | :--- |
| H1 / H2 de sección | `font-serif-luxury text-ink` |
| H3 / nombre de plantilla | `font-serif-luxury text-ink` |
| Párrafo | `text-muted font-light` |
| Caption / fecha | `text-xs text-subtle` |
| Link inline | `text-link hover:text-brand transition-colors` |

### 4.2. Botones

#### A. Primario (CTA)

Usa la utilidad del sistema; no rearmes el gradiente a mano.

```tsx
<a
  href={href}
  className="btn-primary btn-asesoria inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
>
  <span>Pedir asesoría</span>
</a>
```

- Light: fill brand, texto `on-cta` blanco, sombra CTA.
- Dark: `--cta` gradiente oro, texto oscuro, sombra champagne.

#### B. Secundario

```tsx
<button
  type="button"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium border border-line-strong bg-chip text-ink shadow-xs transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
>
  <span>Ver más</span>
</button>
```

#### C. Sobre media oscura (wash)

```tsx
<a href={href} className="btn-on-wash inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border">
  <span>Demo</span>
</a>
```

### 4.3. Badges y chips

#### Badge de sección (editorial)

```tsx
<span className="text-[11px] font-serif-luxury uppercase tracking-[0.2em] text-brand border border-badge-line px-3.5 py-1 rounded-full bg-badge shadow-[var(--shadow-badge)]">
  Experiencia completa
</span>
```

#### Chip neutro / “Próximamente”

```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-widest text-warm bg-chip border border-line-strong">
  Próximamente
</span>
```

#### Badge de disponibilidad (en bloque de texto, no sobre media)

```tsx
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-brand-muted text-brand border border-brand-line">
  <span className="w-1.5 h-1.5 rounded-full bg-brand-dot animate-pulse" />
  Disponible
</span>
```

No superpongas badges flotantes encima de previews/hero media (`DESIGN.md` Don’ts).

### 4.4. Formularios

```tsx
<label className="flex flex-col gap-1.5">
  <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
    Nombre completo
  </span>
  <input
    type="text"
    placeholder="Ej. Juan Pérez"
    className="w-full px-4 py-3 rounded-xl text-sm bg-surface text-ink placeholder:text-faint border border-line shadow-xs transition-colors hover:border-line-hover focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none"
  />
</label>
```

Checkbox / radio: borde `border-line-strong`, checked con `text-brand`, focus `focus:ring-brand/30`. Label: `text-muted group-hover:text-ink`.

### 4.5. Cards y paneles (solo con interacción)

Cards de catálogo, FAQ o formularios. Secciones narrativas no deben ser dashboards de cards (`DESIGN.md`).

```tsx
<article className="relative flex flex-col p-6 rounded-3xl border border-line hover:border-accent bg-surface hover:bg-surface-hover shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
  <div className="hairline absolute inset-x-0 top-0 h-0.5 pointer-events-none" />
  <h3 className="font-serif-luxury text-xl text-ink">Título</h3>
  <p className="text-sm text-muted font-light mt-2">Descripción</p>
</article>
```

Panel elevado: clase `.panel` (`bg-surface` + `--shadow-panel`; en dark, gradiente sutil).

### 4.6. Iconos

| Uso | Clases |
| :--- | :--- |
| UI / nav | `text-muted hover:text-brand transition-colors` |
| Acento de marca | `text-brand` |
| Contenedor | `bg-surface-muted text-brand border border-line-strong` |

### 4.7. Overlays

- Backdrop light: `bg-black/40 backdrop-blur-xs`
- Backdrop dark: `bg-black/75 backdrop-blur-md`
- Contenedor: `bg-surface text-ink border border-line rounded-3xl shadow-[var(--shadow-panel)]`

### 4.8. Skeletons y spinners

```tsx
<div className="w-full h-48 rounded-3xl animate-pulse bg-chip" />

<div className="size-6 rounded-full border-2 border-line border-t-brand animate-spin" />
```

### 4.9. Feedback

Preferir tokens de marca / blush para error; no introducir purple.

| Estado | Enfoque |
| :--- | :--- |
| Éxito | `bg-brand-muted text-brand border-brand-line` |
| Error | `text-blush border-blush-line` (fondo suave con chip/surface) |
| Info | `bg-chip text-ink-soft border-line-soft` |

### 4.10. Selection

Ya definido en `globals.css` con `--selection` / `--selection-fg`. No redefinir en componentes.

### 4.11. Imágenes

En dark, un velo inferior suave ayuda al contraste del texto sobre foto:

```tsx
<div className="relative overflow-hidden rounded-3xl">
  <Image src="/foto.jpg" alt="Preview" fill className="object-cover" />
  <div className="absolute inset-x-0 bottom-0 h-16 bg-black/40 pointer-events-none" />
</div>
```

### 4.12. Navbar y footer

```tsx
<header className="bg-navbar backdrop-blur-xl border-b border-line" />
<footer className="bg-footer border-t border-line text-muted" />
```

Toggle: `border-toggle-border bg-toggle text-toggle-fg shadow-[var(--shadow-toggle)]`.

---

## 5. Estados interactivos

| Estado | Patrón |
| :--- | :--- |
| Hover contenedor | `hover:bg-surface-hover hover:border-accent` |
| Hover texto / link | `hover:text-brand` |
| Active | `active:scale-[0.98]` |
| Focus visible | `focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50` |

---

## 6. Microfrontends (Next.js ⇄ Angular)

Ver `docs/arquitectura.md`. Shell e invitaciones Angular comparten tema vía:

```typescript
import { THEME_STORAGE_KEY } from "@/shared/config/theme";
// "festanova_theme" → 'light' | 'dark'
```

Al entrar a `/invitations-wedding-model-0N`, el SPA Angular lee `localStorage.getItem(THEME_STORAGE_KEY)` y aplica `.dark` en su documento para no romper continuidad visual.

---

## 7. Prevención de FOUC

En `src/app/layout.tsx` el script de boot usa `THEME_STORAGE_KEY` (no hardcodear otra clave):

```js
var stored = localStorage.getItem("festanova_theme");
var isDark =
  stored === "dark" ||
  (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
document.documentElement.classList.toggle("dark", isDark);
```

---

## 8. Checklist al crear un componente

- [ ] ¿Usas tokens semánticos (`bg-surface`, `text-ink`, `border-line`, `text-brand`) en lugar de `stone-*` / `emerald-*` / hex?
- [ ] ¿Evitas `dark:*` innecesarios porque el token ya cambia bajo `.dark`?
- [ ] ¿CTA primario usa `.btn-primary` (o `.btn-asesoria`)?
- [ ] ¿Focus ring con `focus-visible:ring-brand/50`?
- [ ] ¿Hay `transition-colors` / `transition-all` donde el tema o hover cambian aspecto?
- [ ] ¿Sin grises fríos, purple, glow neon ni tipografías system como voz de marca?
- [ ] ¿Cards solo si hay interacción (catálogo, FAQ, form)? ¿Badges fuera de media hero?
- [ ] ¿Rutas / teléfono / section ids desde `src/shared/config/`?

---

## 9. Ejemplo de referencia (card interactiva)

```tsx
"use client";

import Link from "next/link";
import { motion } from "motion/react";

type FeatureCardProps = {
  title: string;
  description: string;
  badge?: string;
  href: string;
};

export function FeatureCard({ title, description, badge, href }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 rounded-3xl border border-line hover:border-accent bg-surface hover:bg-surface-hover shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
    >
      <div className="hairline absolute inset-x-0 top-0 h-0.5 pointer-events-none" />

      <div>
        {badge ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-widest mb-4 bg-badge text-brand border border-badge-line shadow-[var(--shadow-badge)]">
            {badge}
          </span>
        ) : null}

        <h3 className="font-serif-luxury text-xl font-normal text-ink group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-sm font-light text-muted leading-relaxed mt-2">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-line-faint">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand hover:text-brand-deep transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-md"
        >
          <span>Conocer más</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </motion.article>
  );
}
```
