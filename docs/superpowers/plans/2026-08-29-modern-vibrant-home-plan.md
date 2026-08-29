# Rediseño Home Moderna Minimalista & Vibrante (Bento Grid + Aurora Gradients) Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar la página principal (`HomePage`) de FestanovaCo de un tema oscuro a una experiencia visual moderna, luminosa y minimalista con estética Bento Grid, orbes difusos aurora gradient y superficies glassmorphism.

**Architecture:** Actualizar modularmente los componentes en `src/features/home/` (hero background, hero header, hero card/categories, how-it-works, faq, contact) y los componentes compartidos (`site-navbar`, `site-footer`) asegurando coherencia visual, alto contraste WCAG y micro-interacciones suaves.

**Tech Stack:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, Hugeicons React.

---

### Task 1: Actualizar Datos y Temas de Categorías del Hero

**Files:**
- Modify: `src/features/home/types/hero.types.ts`
- Modify: `src/features/home/data/hero-data.tsx`

- [ ] **Step 1: Actualizar los tipos de categoría en `hero.types.ts`**
Asegurar que la interfaz `HeroCategoryTheme` soporte clases de gradientes y fondos luminosos.

```typescript
export interface HeroCategoryTheme {
  accentColor: string;
  glowBg: string;
  badgeBg: string;
  badgeText: string;
  gradientText: string;
  borderHover: string;
  tagline: string;
}
```

- [ ] **Step 2: Actualizar `src/features/home/data/hero-data.tsx` con paletas luminosas y vibrantes**
Reemplazar colores oscuros por tonos claros, vibrantes y frescos para Bodas (violeta/champagne), 15 Años (fucsia/púrpura eléctrico), Cumpleaños (cian/azul cobalto), etc.

```typescript
// En src/features/home/data/hero-data.tsx:
// Actualizar allCategories con temas luminosos y badges vibrantes acordes a la nueva paleta.
```

- [ ] **Step 3: Verificar tipos con el compilador**
Ejecutar verificación de TypeScript sin errores:
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 4: Commit**
```bash
git add src/features/home/types/hero.types.ts src/features/home/data/hero-data.tsx
git commit -m "feat(home): update hero category data and theme tokens for light vibrant palette"
```

---

### Task 2: Rediseñar el Fondo Aurora y Cabecera del Hero

**Files:**
- Modify: `src/features/home/components/hero/hero-background.tsx`
- Modify: `src/features/home/components/hero/hero-header.tsx`
- Modify: `src/features/home/components/hero/hero.tsx`

- [ ] **Step 1: Rediseñar `hero-background.tsx` con orbes de gradiente difuso (Aurora effect)**
Crear capas difuminadas con `blur-3xl` en tonos violeta (`#8b5cf6`), fucsia (`#ec4899`) y cian (`#06b6d4`) con opacidades sutiles (`15%-25%`) sobre fondo blanco/slate.

- [ ] **Step 2: Rediseñar `hero-header.tsx`**
Reemplazar textos dorados sobre fondo oscuro por pill badge superior *"✨ Nueva Colección de Invitaciones Digitales"*, titular en `text-slate-900` con gradiente `from-violet-600 via-fuchsia-600 to-indigo-600`, y subtítulo en `text-slate-600`.

- [ ] **Step 3: Actualizar `hero.tsx`**
Cambiar clases de fondo del section a `bg-white text-slate-900`.

- [ ] **Step 4: Comprobar lints y compilación**
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 5: Commit**
```bash
git add src/features/home/components/hero/hero-background.tsx src/features/home/components/hero/hero-header.tsx src/features/home/components/hero/hero.tsx
git commit -m "feat(home): redesign hero background and header with aurora light effects"
```

---

### Task 3: Rediseñar Tarjetas de Categorías (Bento Grid Glassmorphism)

**Files:**
- Modify: `src/features/home/components/hero/hero-card.tsx`
- Modify: `src/features/home/components/hero/hero-categories.tsx`

- [ ] **Step 1: Implementar diseño Glassmorphism luminoso en `hero-card.tsx`**
Cambiar tarjetas oscuras por superficies `bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-violet-400/50 shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-violet-500/10`.
Actualizar tipografías a títulos oscuros nítidos, badges coloridos y botones con animación de flecha al hover.

- [ ] **Step 2: Ajustar espaciado y layout en `hero-categories.tsx`**
Asegurar layout bento grid armonioso y responsive.

- [ ] **Step 3: Comprobar lints y compilación**
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 4: Commit**
```bash
git add src/features/home/components/hero/hero-card.tsx src/features/home/components/hero/hero-categories.tsx
git commit -m "feat(home): redesign category cards to light glassmorphism bento grid"
```

---

### Task 4: Rediseñar Secciones "Cómo Funciona", "FAQ" y "Contacto"

**Files:**
- Modify: `src/features/home/components/how-it-works/how-it-works-section.tsx`
- Modify: `src/features/home/components/faq/faq-section.tsx`
- Modify: `src/features/home/components/contact/contact-section.tsx`
- Modify: `src/features/home/home-page.tsx`

- [ ] **Step 1: Rediseñar `how-it-works-section.tsx`**
Fondo en `bg-slate-50/60`, tarjetas glass blancas, números en gradiente violeta/fucsia y etiquetas de paso modernas.

- [ ] **Step 2: Rediseñar `faq-section.tsx`**
Fondo limpio, acordeones en `bg-slate-50/80 border border-slate-200/70 hover:border-violet-300`, texto expandido claro y botones de toggle minimalistas.

- [ ] **Step 3: Rediseñar `contact-section.tsx`**
Banner en tarjeta envolvente con gradiente aurora interior (`bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 border border-violet-200/60`), botón principal en degradado vibrante de WhatsApp y listado de cobertura pulido.

- [ ] **Step 4: Actualizar contenedor raíz en `home-page.tsx`**
Ajustar clase raíz a `min-h-screen bg-white text-slate-900 flex flex-col selection:bg-violet-500/20 selection:text-violet-900`.

- [ ] **Step 5: Comprobar lints y compilación**
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 6: Commit**
```bash
git add src/features/home/components/how-it-works/how-it-works-section.tsx src/features/home/components/faq/faq-section.tsx src/features/home/components/contact/contact-section.tsx src/features/home/home-page.tsx
git commit -m "feat(home): apply light vibrant theme to how-it-works, faq and contact sections"
```

---

### Task 5: Actualizar Barra de Navegación y Pie de Página

**Files:**
- Modify: `src/shared/ui/site-navbar.tsx`
- Modify: `src/shared/ui/site-footer.tsx`

- [ ] **Step 1: Actualizar `site-navbar.tsx`**
Fondo `bg-white/80 backdrop-blur-md border-b border-slate-100`, logo con isotipo degradado, links en `text-slate-600 hover:text-violet-600` y botón CTA en gradiente `bg-gradient-to-r from-violet-600 to-fuchsia-600`.

- [ ] **Step 2: Actualizar `site-footer.tsx`**
Fondo `bg-slate-900 text-slate-300` o `bg-slate-50 border-t border-slate-200 text-slate-600` manteniendo estética ultra pulida con enlaces de navegación legibles.

- [ ] **Step 3: Comprobar lints y compilación**
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 4: Commit**
```bash
git add src/shared/ui/site-navbar.tsx src/shared/ui/site-footer.tsx
git commit -m "feat(shared): adapt site navbar and footer to light vibrant theme"
```

---

### Task 6: Verificación Global y Build de Producción

**Files:**
- All touched files

- [ ] **Step 1: Ejecutar verificación de tipos**
Run: `npx tsc --noEmit`
Expected: 0 errores.

- [ ] **Step 2: Ejecutar build de Next.js**
Run: `npm run build`
Expected: Build exitoso sin errores ni advertencias críticas.

- [ ] **Step 3: Commit final si hubo ajustes de integración**
```bash
git commit --allow-empty -m "chore(home): verify build and theme consistency"
```
