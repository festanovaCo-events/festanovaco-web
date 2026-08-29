# Diseño: Home Moderna Minimalista & Vibrante (Bento Grid + Aurora Gradients)

- **Fecha:** 2026-08-29
- **Estado:** Aprobado por el usuario
- **Ámbito:** Rediseño visual de la página principal (`/` - `HomePage`) y sus subcomponentes en `src/features/home/` y componentes compartidos asociados.

---

## 1. Visión y Objetivos

Reemplazar la estética oscura anterior (Dark Luxury en `#1c1917` con acentos dorados) por una experiencia visual moderna, luminosa y vibrante orientada a la conversión y deleite del usuario al explorar invitaciones interactivas para bodas, 15 años y cumpleaños.

### Metas Principales
- **Atmósfera Luminosa & Limpia:** Fondo blanco/slate ultra claro con sutiles orbes difusos estilo aurora gradient (violeta, fucsia y cian).
- **Tarjetas Bento Glassmorphism:** Presentación interactiva de categorías en tarjetas translúcidas con bordes satinados y sombras suaves.
- **Micro-interacciones y Glows:** Efectos hover con elevación sutil, bordes con brillo y badges fluorescentes.
- **Arquitectura Modular:** Mantener o mejorar la separación de componentes en `src/features/home/components/` preservando la tipografía y consistencia en responsive.

---

## 2. Sistema de Diseño y Tokens de Color

### Paleta de Colores
- **Fondo Base:** `bg-white` (`#ffffff`) con transiciones de sección en `bg-slate-50` (`#f8fafc`).
- **Aurora Ambient Lights:** Gradientes radiales difuminados (`blur-3xl`, opacidades `20%` a `30%`) en:
  - Violeta: `#8b5cf6` (`from-violet-400/25`)
  - Fucsia/Magenta: `#ec4899` (`via-fuchsia-400/20`)
  - Cian/Azul eléctrico: `#06b6d4` (`to-cyan-400/20`)
- **Textos:**
  - Títulos principales: `text-slate-900` (`#0f172a`) con textos acentuados en gradiente `bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent`.
  - Textos secundarios / párrafos: `text-slate-600` (`#475569`).
  - Textos terciarios / captions: `text-slate-400` (`#94a3b8`).
- **Superficies Glassmorphism:**
  - `bg-white/80 backdrop-blur-md`
  - Bordes: `border border-slate-200/80 hover:border-violet-500/30`
  - Sombras: `shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-violet-500/10`
- **Botones & Badges:**
  - Botón primario: Gradiente `bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-md shadow-violet-500/25`.
  - Botón secundario / pill: `bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200`.
  - Badges de categoría: Píldoras con degradados suaves y textos en negrita estilizados.

---

## 3. Especificación Detallada de Secciones

### 3.1. Navegación (`SiteNavbar`)
- **Fondo:** `bg-white/80 backdrop-blur-md border-b border-slate-100/80 sticky top-0 z-50`.
- **Elementos:** Logo en texto oscuro `text-slate-900` con isotipo/detalle en gradiente violeta; enlaces de navegación en `text-slate-600 hover:text-violet-600`; botón CTA de acción rápida en gradiente vibrante.

### 3.2. Hero Section (`Hero`, `HeroBackground`, `HeroHeader`, `HeroCategories`)
- **Fondo (`HeroBackground`):** Capa limpia con degradados ambientales de orbe aurora posicionados estratégicamente en las esquinas y centro para dar profundidad sin restar legibilidad.
- **Cabecera (`HeroHeader`):**
  - Pill badge superior: *"✨ Nueva Colección de Invitaciones Digitales"* con borde degradado violeta/rosa y fondo blanco translúcido.
  - Título principal: *"Invitaciones Digitales"* + span con gradiente *"para momentos inolvidables"*.
  - Subtítulo: Párrafo en `text-slate-600` con buen interlineado y llamada a la exploración.
- **Bento Grid de Categorías (`HeroCategories` & `HeroCard`):**
  - Disposición responsive: Grid asimétrico o de 3 columnas destacadas con previews de invitaciones.
  - **Boda (Wedding):** Acentos en rosa champagne y violeta orquídea.
  - **15 Años (Quinceañera):** Acentos en fucsia vibrante y destellos púrpuras.
  - **Cumpleaños (Birthday):** Acentos en cian eléctrico y azul cobalto con espíritu festivo.
  - Cada tarjeta incluye badge de categoría, imagen o mockup interactivo, título claro, descripción breve y botón "Ver Plantillas / Ver Demo" con flecha animada al hover.

### 3.3. Sección Cómo Funciona (`HowItWorksSection`)
- **Fondo:** `bg-slate-50/60 border-y border-slate-100`.
- **Estructura:** 3 pasos numerados dentro de tarjetas glass con iconos estilizados:
  1. *Elige tu categoría y diseño favorito.*
  2. *Personaliza la información, fecha, ubicación y música.*
  3. *Comparte al instante con tus invitados por WhatsApp y redes.*
- Cada tarjeta contiene un indicador de número con gradiente violeta/fucsia.

### 3.4. Sección Preguntas Frecuentes (`FaqSection`)
- **Fondo:** `bg-white`.
- **Estructura:** Acordeones con estilo minimalista en cajas redondeadas `bg-slate-50/80 border border-slate-200/60`, apertura suave e iconos de flecha con rotación.

### 3.5. Sección Contacto & CTA Final (`ContactSection`)
- **Fondo:** Card destacada estilo banner con gradiente aurora interior suave (`bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 border border-violet-100`), textos oscuros de alto contraste y botón directo a WhatsApp.

### 3.6. Pie de Página (`SiteFooter`)
- **Fondo:** `bg-slate-900 text-slate-300` o `bg-slate-50 border-t border-slate-200 text-slate-600` manteniendo estética ultra pulida con enlaces a categorías, contacto y créditos.

---

## 4. Plan de Archivos Afectados

1. `src/features/home/home-page.tsx`: Actualizar contenedor principal a fondo claro `bg-white text-slate-900`.
2. `src/features/home/components/hero/hero.tsx`: Ajustar clases de contenedor, padding y espaciado.
3. `src/features/home/components/hero/hero-background.tsx`: Reemplazar gradientes y partículas oscuras por orbes difusos aurora gradient.
4. `src/features/home/components/hero/hero-header.tsx`: Actualizar tipografía, colores, pill badge y divisores.
5. `src/features/home/components/hero/hero-card.tsx` y `hero-categories.tsx`: Adaptar tarjetas a Bento Grid glassmorphism con efectos hover luminosos.
6. `src/features/home/components/how-it-works/how-it-works-section.tsx`: Adaptar tarjetas de pasos al estilo minimalista claro.
7. `src/features/home/components/faq/faq-section.tsx`: Actualizar colores de acordeón y fondos.
8. `src/features/home/components/contact/contact-section.tsx`: Actualizar banner de contacto al estilo aurora gradient claro.
9. `src/shared/ui/site-navbar.tsx` y `site-footer.tsx`: Coordinar temas de fondo, bordes y botones de navegación.

---

## 5. Verificación y Criterios de Éxito
- **Visual:** Contraste WCAG AA garantizado en todos los textos sobre fondos claros.
- **Interacción:** Las tarjetas responden al hover con elevación y glow visual sin saltos bruscos de layout.
- **Responsividad:** Vista perfecta en pantallas móviles (320px+), tablets y escritorio.
- **Cero Errores:** Sin errores de compilación TypeScript ni warnings de linter en Next.js.
