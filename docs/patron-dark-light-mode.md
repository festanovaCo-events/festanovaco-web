# Guía y Patrón de Diseño: Dark Mode / Light Mode en FestanovaCo

Esta guía documenta el estándar oficial para la implementación coherente de temas (**Light Mode** y **Dark Mode**) en todos los componentes, vistas y elementos interactivos de la plataforma FestanovaCo (`festanovaco-web`).

---

## 1. Filosofía y Paleta de Marca

FestanovaCo utiliza un sistema visual basado en la elegancia editorial y el lujo sutil:

| Modo | Estilo Visual | Fondo Principal | Fondo de Superficie/Cards | Acento Primario | Acento Secundario |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Light Mode** | *Warm Luxury / Editorial Elegance* | `#FAF8F5` (Warm Cream) | `bg-white` / `bg-[#FCFBF9]` | **Verde Esmeralda** (`emerald-800`, `emerald-900`) | **Arena Cálido / Champagne** (`#C5A880`, `#D9CEBA`, `#E9DFD0`) |
| **Dark Mode** | *Night Gold / Dark Elegance* | `#1c1917` (Stone 900) | `#1A1816` / `bg-stone-900/90` | **Dorado Oro / Champagne** (`amber-200`, `amber-300`, `#fae2ab`) | **Verde Esmeralda Profundo** (`#1B4332`, `emerald-950`) |

> ⚠️ **Regla de Oro:** Nunca uses colores grises fríos genéricos (`slate-*`, `zinc-*`, `gray-*`) ni fondos negros planos `#000000`. Mantén siempre la paleta basada en `stone-*`, toques de `emerald` y reflejos `amber/champagne`.

---

## 2. Configuración Técnica Base

En `src/app/globals.css`, Tailwind CSS v4 está configurado con la variante personalizada para el selector `.dark`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #FAF8F5;
  --foreground: #18181B;
}

.dark {
  --background: #1c1917;
  --foreground: #fafaf9;
}
```

El estado del tema se gestiona mediante el provider centralizado en `src/shared/providers/theme-provider.tsx` y el alternador `src/shared/ui/theme-toggle.tsx`.

---

## 3. Guía de Tokens por Componente

### 3.1. Tipografía y Textos

| Elemento | Light Mode | Dark Mode | Clases Tailwind Recomendadas |
| :--- | :--- | :--- | :--- |
| **Títulos Principales (H1, H2)** | `text-stone-900` | `text-white` | `font-serif-luxury text-stone-900 dark:text-white` |
| **Subtítulos / Encabezados H3-H4** | `text-stone-800` | `text-stone-100` | `font-serif-luxury text-stone-800 dark:text-stone-100` |
| **Párrafos / Texto Regular** | `text-stone-600` | `text-stone-300` | `text-stone-600 dark:text-stone-300 font-light` |
| **Texto Muted / Captions / Fechas** | `text-stone-500` | `text-stone-400` / `text-amber-100/60` | `text-xs text-stone-500 dark:text-stone-400` |
| **Texto con Enlace / Hover** | `text-stone-600 hover:text-emerald-900` | `text-stone-300 dark:hover:text-amber-200` | `transition-colors text-stone-600 hover:text-emerald-900 dark:text-stone-300 dark:hover:text-amber-200` |

---

### 3.2. Botones y Enlaces de Acción

Los botones deben seguir estrictamente tres variantes estándar:

#### A. Botón Primario (Call to Action Principal)
- **Light:** Fondo esmeralda oscuro con texto blanco y sombra verde sutil.
- **Dark:** Gradiente dorado/champagne con texto oscuro (`stone-950`) y sombra cálida.

```tsx
<button
  type="button"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
    bg-emerald-900 hover:bg-emerald-950 text-white shadow-[0_4px_16px_rgba(27,67,50,0.25)] hover:shadow-[0_6px_20px_rgba(27,67,50,0.35)]
    dark:bg-linear-to-r dark:from-[#fae2ab] dark:via-[#ebd097] dark:to-[#d8b066] dark:hover:from-[#fff0cd] dark:hover:to-[#e5c583] dark:text-stone-950 dark:shadow-[0_4px_16px_rgba(216,176,102,0.3)]
    active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50 dark:focus-visible:ring-amber-300/50"
>
  <span>Continuar</span>
</button>
```

#### B. Botón Secundario
- **Light:** Fondo crema claro con borde arena y texto oscuro.
- **Dark:** Fondo `stone-800` con borde blanco translúcido y texto claro.

```tsx
<button
  type="button"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
    bg-[#FAF8F5] hover:bg-stone-100 text-stone-900 border border-stone-200 shadow-xs
    dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-100 dark:border-white/15
    active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50 dark:focus-visible:ring-amber-300/50"
>
  <span>Ver Más</span>
</button>
```

#### C. Botón Outline / Glass
```tsx
<button
  type="button"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
    bg-white/80 hover:bg-white text-stone-800 border border-[#D9CEBA] shadow-xs
    dark:bg-stone-800/60 dark:hover:bg-stone-800 dark:text-white dark:border-white/20
    active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50 dark:focus-visible:ring-amber-300/50"
>
  <span>Detalles</span>
</button>
```

---

### 3.3. Badges, Chips y Píldoras de Estado

Utilizados para etiquetas temáticas, estados de disponibilidad o categorías:

#### Badge Destacado (Disponible / Exclusivo)
```tsx
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider backdrop-blur-md transition-colors
  bg-emerald-50/90 text-emerald-950 border border-emerald-300/60 shadow-xs
  dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-300/30">
  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-amber-400 animate-pulse" />
  Exclusivo
</span>
```

#### Badge Neutro (Pronto / Tag)
```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-widest backdrop-blur-md transition-colors
  bg-stone-100 text-stone-600 border border-stone-200
  dark:bg-stone-800/90 dark:text-stone-300 dark:border-white/15">
  Colección 2026
</span>
```

---

### 3.4. Formularios y Controles de Entrada (Inputs, Textarea, Checkbox, Radio, Select)

#### A. Campos de Texto (`<input>` y `<textarea>`)
```tsx
<div className="flex flex-col gap-1.5">
  <label className="text-xs font-medium uppercase tracking-wider text-stone-700 dark:text-stone-300">
    Nombre Completo
  </label>
  <input
    type="text"
    placeholder="Ej. Juan Pérez"
    className="w-full px-4 py-3 rounded-2xl text-sm transition-all duration-200
      bg-white text-stone-900 placeholder:text-stone-400 border border-[#E9DFD0] shadow-xs
      hover:border-[#C5A880] focus:border-emerald-800 focus:ring-2 focus:ring-emerald-700/20 focus:outline-none
      dark:bg-stone-900/80 dark:text-stone-100 dark:placeholder:text-stone-500 dark:border-white/15
      dark:hover:border-amber-300/40 dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
  />
</div>
```

#### B. Checkbox
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer select-none group">
  <input
    type="checkbox"
    className="size-5 rounded-lg transition-all duration-200 cursor-pointer
      border-stone-300 text-emerald-900 focus:ring-emerald-700/30 bg-white
      hover:border-emerald-800
      dark:border-white/20 dark:bg-stone-900 dark:text-amber-400 dark:focus:ring-amber-300/30
      dark:hover:border-amber-300/50"
  />
  <span className="text-sm text-stone-700 group-hover:text-stone-900 dark:text-stone-300 dark:group-hover:text-white transition-colors">
    Acepto los términos y condiciones
  </span>
</label>
```

#### C. Radio Button
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer select-none group">
  <input
    type="radio"
    name="option"
    className="size-5 transition-all duration-200 cursor-pointer
      border-stone-300 text-emerald-900 focus:ring-emerald-700/30 bg-white
      hover:border-emerald-800
      dark:border-white/20 dark:bg-stone-900 dark:text-amber-400 dark:focus:ring-amber-300/30
      dark:hover:border-amber-300/50"
  />
  <span className="text-sm text-stone-700 group-hover:text-stone-900 dark:text-stone-300 dark:group-hover:text-white transition-colors">
    Confirmar Asistencia
  </span>
</label>
```

#### D. Select / Dropdown
```tsx
<select
  className="w-full px-4 py-3 rounded-2xl text-sm transition-all duration-200 cursor-pointer appearance-none
    bg-white text-stone-900 border border-[#E9DFD0] shadow-xs
    hover:border-[#C5A880] focus:border-emerald-800 focus:ring-2 focus:ring-emerald-700/20 focus:outline-none
    dark:bg-stone-900 dark:text-stone-100 dark:border-white/15
    dark:hover:border-amber-300/40 dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
>
  <option value="1">1 Invitado</option>
  <option value="2">2 Invitados</option>
</select>
```

---

### 3.5. Tarjetas (Cards), Paneles y Glassmorphism

Las tarjetas y secciones con relieve deben seguir una estructura consistente con reflejo superior y borde translúcido:

```tsx
<div className="group relative flex flex-col p-6 rounded-4xl sm:rounded-5xl overflow-hidden transition-all duration-300 backdrop-blur-xl
  bg-white hover:bg-[#FCFBF9] border border-[#E9DFD0] hover:border-[#C5A880] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(27,67,50,0.08)]
  dark:bg-[#1A1816] dark:hover:bg-stone-800/80 dark:border-white/10 dark:hover:border-amber-300/40 dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_45px_rgba(216,176,102,0.2)]">

  {/* Reflejo superior de luz */}
  <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-[#C5A880]/40 dark:via-amber-300/60 to-transparent pointer-events-none" />

  {/* Contenido */}
  <h3 className="font-serif-luxury text-xl text-stone-900 dark:text-white mb-2">
    Título de la Tarjeta
  </h3>
  <p className="text-sm text-stone-600 dark:text-stone-300 font-light">
    Descripción con tipografía legible y contraste balanceado.
  </p>
</div>
```

---

### 3.6. Iconos y SVGs

Para evitar que los iconos se pierdan o tengan contrastes chillones:

1. **Iconos estándar de navegación / UI:**
   ```tsx
   <svg className="w-5 h-5 text-stone-600 hover:text-emerald-900 dark:text-stone-300 dark:hover:text-amber-200 transition-colors" />
   ```
2. **Iconos decorativos / Acentos de marca:**
   ```tsx
   <svg className="w-6 h-6 text-emerald-800 dark:text-amber-300 transition-colors" />
   ```
3. **Contenedores de iconos circulares / cuadrados:**
   ```tsx
   <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-colors
     bg-stone-100 text-stone-700 border border-stone-200
     dark:bg-stone-800/90 dark:text-amber-200 dark:border-white/15">
     {/* Icono */}
   </div>
   ```

---

### 3.7. Modales, Drawers y Diálogos (Overlays & Backdrops)

Para ventanas emergentes, galerías lightbox o menús desplegables:

* **Backdrop (Fondo oscuro difuso):**
  * Light: `bg-black/40 backdrop-blur-xs`
  * Dark: `bg-black/75 backdrop-blur-md`
* **Contenedor Modal:**
  ```tsx
  <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-4xl sm:rounded-5xl shadow-2xl transition-all
    bg-white text-stone-900 border border-[#E9DFD0]
    dark:bg-[#1c1917] dark:text-white dark:border-white/15 dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
    {/* Contenido del modal */}
  </div>
  ```

---

### 3.8. Skeletons y Estados de Carga (Spinners & Loaders)

Para evitar deslumbrar al usuario mientras cargan fotos o datos:

* **Skeleton Loader (Placeholder con pulso):**
  ```tsx
  <div className="w-full h-48 rounded-3xl animate-pulse bg-stone-200/80 dark:bg-stone-800/80" />
  ```
* **Spinner Circular:**
  ```tsx
  <div className="size-6 rounded-full border-2 animate-spin
    border-stone-200 border-t-emerald-800
    dark:border-white/20 dark:border-t-amber-300" />
  ```

---

### 3.9. Alertas, Toasts y Mensajes de Feedback

Los estados de feedback (éxito, error, advertencia) deben mantener armonía con la paleta:

| Estado | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| **Éxito (Success)** | `bg-emerald-50 text-emerald-950 border-emerald-200/80` | `dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/50` |
| **Error / Alerta** | `bg-rose-50 text-rose-950 border-rose-200/80` | `dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/50` |
| **Advertencia** | `bg-amber-50 text-amber-950 border-amber-200/80` | `dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/50` |
| **Informativo** | `bg-stone-100 text-stone-800 border-stone-200` | `dark:bg-stone-800/90 dark:text-stone-200 dark:border-white/15` |

---

### 3.10. Selección de Texto (`::selection`) y Scrollbars

* **Selección de texto en `globals.css`:**
  ```css
  ::selection {
    background-color: #1b4332;
    color: #ffffff;
  }
  .dark ::selection {
    background-color: #f59e0b;
    color: #1c1917;
  }
  ```
* **Scrollbars personalizadas:**
  * Track: `bg-[#FAF8F5]` (Light) vs `dark:bg-[#1c1917]` (Dark).
  * Thumb: `bg-stone-300 hover:bg-stone-400` (Light) vs `dark:bg-stone-700 dark:hover:bg-stone-600` (Dark).

---

### 3.11. Tratamiento de Imágenes y Fotografías

* En **Dark Mode**, las fotografías de alto brillo o fondo blanco pueden generar demasiado contraste visual. Se recomienda envolverlas con un sutil gradiente o borde:
  ```tsx
  <div className="relative overflow-hidden rounded-3xl">
    <Image src="/foto.jpg" alt="Preview" fill className="object-cover" />
    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
  </div>
  ```

---

### 3.12. Cabeceras, Navbars y Footers

- **Navbar Sticky:**
  `bg-white/90 dark:bg-[#221e1a]/90 backdrop-blur-xl border-b border-stone-200/80 dark:border-white/15`
- **Footer:**
  `bg-white dark:bg-[#171412] border-t border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300`

---

## 4. Matriz de Estados Interactivos (Hover, Active, Focus)

| Estado | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| **Hover en Contenedor** | `hover:bg-[#FCFBF9] hover:border-[#C5A880]` | `dark:hover:bg-stone-800/80 dark:hover:border-amber-300/40` |
| **Hover en Texto** | `hover:text-emerald-900` | `dark:hover:text-amber-200` o `dark:hover:text-white` |
| **Active / Click (Scale)** | `active:scale-[0.98]` | `active:scale-[0.98]` |
| **Focus Visible (Anillo de enfoque)** | `focus-visible:ring-2 focus-visible:ring-emerald-700/50 focus:outline-none` | `dark:focus-visible:ring-2 dark:focus-visible:ring-amber-300/50 focus:outline-none` |

---

## 5. Integración con Microfrontends (Next.js ⇄ Angular)

De acuerdo con la arquitectura del proyecto (`docs/arquitectura.md`), FestanovaCo combina el shell **Next.js** con mini-aplicaciones de invitaciones en **Angular** (ej. `/invitations-wedding`):

1. **Clave de Persistencia Compartida:**
   Ambas aplicaciones deben leer y escribir bajo la misma clave de almacenamiento:
   ```typescript
   const STORAGE_KEY = "festanova_theme"; // valores posibles: 'light' | 'dark'
   ```
2. **Sincronización:**
   Al navegar desde Next.js a Angular mediante navegación completa (`<a href="/invitations-wedding?token=...">`), el SPA de Angular debe inspeccionar `localStorage.getItem('festanova_theme')` al inicializarse y aplicar la clase `.dark` a su `<html>` o `<body>` para evitar saltos o desajustes entre la landing y la invitación.

---

## 6. Prevención de Parpadeo al Cargar (FOUC)

En `src/app/layout.tsx`, se incluye un script síncrono bloqueante en el `<head>` antes de hidratar React:

```html
<script>
  (function() {
    try {
      var stored = localStorage.getItem('festanova_theme');
      var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (_) {}
  })();
</script>
```
Esto garantiza que nunca exista un pantallazo blanco cuando un usuario que prefiere Dark Mode refresca o entra a la página.

---

## 7. Checklist de Verificación al Crear un Nuevo Componente

Antes de dar por terminado cualquier componente, revisa esta lista:

- [ ] **Fondos:** ¿Tiene soporte explícito para `dark:bg-*` sin asumir fondo blanco por defecto?
- [ ] **Textos:** ¿Todos los `text-stone-*` tienen su equivalente `dark:text-*` legible?
- [ ] **Bordes:** ¿Se usa `border-stone-200` / `border-[#E9DFD0]` en light y `dark:border-white/15` (o `dark:border-amber-300/*` si es activo)?
- [ ] **Botones:** ¿Los botones de llamada a la acción usan verde esmeralda en light y gradiente dorado en dark?
- [ ] **Inputs & Checkboxes:** ¿Tienen focus ring adaptado tanto a esmeralda como a dorado?
- [ ] **Transiciones:** ¿Se incluyó `transition-colors duration-200` o `transition-all duration-300` para evitar parpadeos bruscos al cambiar de tema?
- [ ] **Sin Grises Fríos:** ¿Se evitó el uso de clases ajenas como `bg-gray-100`, `text-blue-600` o `border-zinc-300`?

---

## 8. Ejemplo Completo de Referencia: Componente Card Interactiva

```tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  href: string;
}

export function FeatureCard({ title, description, badge, href }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 rounded-4xl sm:rounded-5xl overflow-hidden transition-all duration-300 backdrop-blur-xl
        bg-white hover:bg-[#FCFBF9] border border-[#E9DFD0] hover:border-[#C5A880] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(27,67,50,0.08)]
        dark:bg-[#1A1816] dark:hover:bg-stone-800/80 dark:border-white/10 dark:hover:border-amber-300/40 dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_20px_45px_rgba(216,176,102,0.2)]"
    >
      {/* Luz superior sutil */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-[#C5A880]/40 dark:via-amber-300/60 to-transparent pointer-events-none" />

      <div>
        {badge && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-widest mb-4
            bg-emerald-50 text-emerald-900 border border-emerald-200/60
            dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-300/30">
            {badge}
          </span>
        )}

        <h3 className="font-serif-luxury text-xl font-normal text-stone-900 dark:text-white group-hover:text-emerald-950 dark:group-hover:text-amber-100 transition-colors">
          {title}
        </h3>

        <p className="text-sm font-light text-stone-600 dark:text-stone-300 leading-relaxed mt-2">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 dark:border-white/10 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors
            text-emerald-800 hover:text-emerald-950 dark:text-amber-300 dark:hover:text-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/50 dark:focus-visible:ring-amber-300/50 rounded-md"
        >
          <span>Conocer más</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
}
```
