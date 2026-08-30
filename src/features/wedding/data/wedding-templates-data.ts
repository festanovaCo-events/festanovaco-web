import type { WeddingTemplate } from "../types/wedding-templates.types";

export function getWeddingTemplates(demoHref: string): WeddingTemplate[] {
  return [
    {
      id: "jorge-yina-signature",
      number: "01",
      name: "Cartagena Romance",
      couplesNames: "Jorge & Yina",
      dateExample: "12.09.2026",
      locationExample: "Cartagena de Indias",
      styleTag: "Romántico & Editorial",
      category: "classic",
      description:
        "Nuestra invitación insignia en vivo con vista al atardecer, música instrumental, confirmación RSVP en tiempo real y mapa interactivo.",
      isAvailable: true,
      badge: "Demo en Vivo",
      previewImage: "/images/templates/wedding-demo-preview.jpg",
      theme: {
        accentGradient:
          "from-[#C5A880] via-[#A88B60] to-[#1B4332]",
        glowColor: "rgba(197, 168, 128, 0.35)",
        pillBg: "bg-[#1B4332] text-white",
        borderHover: "hover:border-[#C5A880] dark:hover:border-amber-300/60",
      },
      features: [
        "Música de fondo",
        "Confirmación RSVP",
        "Waze & Google Maps",
        "Itinerario de boda",
      ],
      demoHref,
      whatsappMessage:
        "Hola FestanovaCo, me encanta el modelo 'Cartagena Romance (Jorge & Yina)' y quisiera recibir asesoría y cotización para mi boda.",
    },
    {
      id: "botanical-serenade",
      number: "02",
      name: "Botanical Serenade",
      couplesNames: "Camila & Mateo",
      dateExample: "14.11.2026",
      locationExample: "Jardín Botánico &bull; Medellín",
      styleTag: "Botánico & Campestre",
      category: "botanical",
      description:
        "Inspirado en la naturaleza con delicados acentos de follaje eucalipto, paleta olivo suave y ambientación rústica chic para eventos al aire libre.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#607D5E] via-[#4A6348] to-[#2D3E2C]",
        glowColor: "rgba(96, 125, 94, 0.35)",
        pillBg: "bg-[#3A4D39] text-white",
        borderHover: "hover:border-emerald-400/50 dark:hover:border-emerald-300/40",
      },
      features: [
        "Ilustraciones botánicas",
        "RSVP interactivo",
        "Guía de clima & outdoor",
        "Playlist Spotify",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me gustaría apartar o solicitar información sobre el modelo 'Botanical Serenade' para mi boda.",
    },
    {
      id: "minimalist-couture",
      number: "03",
      name: "Minimalist Couture",
      couplesNames: "Sofía & Alejandro",
      dateExample: "12.12.2026",
      locationExample: "Atelier Central &bull; Bogotá",
      styleTag: "Minimalista & Vanguardia",
      category: "modern",
      description:
        "Tipografía contemporánea de líneas limpias, composición sobria y espacios equilibrados para parejas amantes del lujo sutil.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#6C6C70] via-[#444448] to-[#1C1C1E]",
        glowColor: "rgba(108, 108, 112, 0.35)",
        pillBg: "bg-stone-800 text-white",
        borderHover: "hover:border-stone-400/60 dark:hover:border-stone-300/40",
      },
      features: [
        "Estética monocromática",
        "Micro-animaciones",
        "Timeline condensado",
        "Mesa de regalos",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me interesa el modelo 'Minimalist Couture' para mi matrimonio.",
    },
    {
      id: "golden-sunset",
      number: "04",
      name: "Golden Sunset",
      couplesNames: "Isabella & Lucas",
      dateExample: "30.01.2027",
      locationExample: "Hotel Las Islas &bull; Barú",
      styleTag: "Playa & Boda Destino",
      category: "destination",
      description:
        "Tonos terracota, arena dorada y atardecer tropical. Pensada para matrimonios en la playa o eventos con programa de fin de semana.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#D97D54] via-[#B95D34] to-[#7C3218]",
        glowColor: "rgba(217, 125, 84, 0.35)",
        pillBg: "bg-[#C86D51] text-white",
        borderHover: "hover:border-amber-400/60 dark:hover:border-amber-300/40",
      },
      features: [
        "Guía de hospedaje",
        "Welcome dinner timeline",
        "Dress code playero",
        "RSVP con transporte",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me encantaría consultar por el modelo 'Golden Sunset' para una boda destino.",
    },
    {
      id: "atelier-champagne",
      number: "05",
      name: "Atelier Champagne",
      couplesNames: "Mariana & Felipe",
      dateExample: "20.02.2027",
      locationExample: "Club El Nogal &bull; Bogotá",
      styleTag: "Glamour Clásico & Gala",
      category: "classic",
      description:
        "Elegancia deslumbrante con tonalidades champaña, dorados sutiles y relieves decorativos para bodas de etiqueta formal y gala.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#D4AF37] via-[#B89628] to-[#7D6415]",
        glowColor: "rgba(212, 175, 55, 0.35)",
        pillBg: "bg-[#A67C52] text-white",
        borderHover: "hover:border-[#C5A880] dark:hover:border-amber-200/50",
      },
      features: [
        "Sello heráldico animado",
        "Música en streaming",
        "Lluvia de sobres virtual",
        "Cuenta regresiva",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me gustaría solicitar informes sobre el modelo 'Atelier Champagne'.",
    },
    {
      id: "monogram-heritage",
      number: "06",
      name: "Monogram Heritage",
      couplesNames: "Lucía & Andrés",
      dateExample: "19.03.2027",
      locationExample: "Catedral Primada &bull; Villa de Leyva",
      styleTag: "Monograma Aristocrático",
      category: "classic",
      description:
        "Inspirada en la papelería real europea con monograma personalizado entrelazado, fondos de papel artesanal y detalles litúrgicos.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#3B5B8C] via-[#243B61] to-[#121F36]",
        glowColor: "rgba(59, 91, 140, 0.35)",
        pillBg: "bg-[#1B2A4A] text-white",
        borderHover: "hover:border-blue-300/60 dark:hover:border-blue-300/40",
      },
      features: [
        "Monograma de novios",
        "Itinerario ceremonial",
        "Gestión por familias",
        "Mesa de regalos",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me gustaría información del modelo 'Monogram Heritage'.",
    },
    {
      id: "tuscany-olive",
      number: "07",
      name: "Tuscany Olive",
      couplesNames: "Elena & Gabriel",
      dateExample: "10.04.2027",
      locationExample: "Finca La Toscana &bull; Rionegro",
      styleTag: "Rústico Chic & Viñedo",
      category: "botanical",
      description:
        "Atmósfera cálida de campiña italiana con hojas de olivo, texturas de lino y toques burdeos para celebraciones entrañables y gastronómicas.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#8B2D38] via-[#661E27] to-[#3B0E14]",
        glowColor: "rgba(139, 45, 56, 0.35)",
        pillBg: "bg-[#5C1D24] text-white",
        borderHover: "hover:border-rose-400/50 dark:hover:border-rose-300/40",
      },
      features: [
        "Menú & maridaje",
        "Ruta en autobús",
        "Galería de fotos",
        "Dress code campestre",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me interesa el modelo 'Tuscany Olive' para mi boda en finca.",
    },
    {
      id: "velvet-nocturne",
      number: "08",
      name: "Velvet Nocturne",
      couplesNames: "Natalia & Daniel",
      dateExample: "15.05.2027",
      locationExample: "Hangar Luxury &bull; Cali",
      styleTag: "Etiqueta Negra & Noche",
      category: "modern",
      description:
        "Contraste de alto impacto en tonos oscuros satinados, acentos oro rosa y estética nocturna pensada para fiestas inolvidables.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#4A3245] via-[#2D1B29] to-[#160B14]",
        glowColor: "rgba(74, 50, 69, 0.35)",
        pillBg: "bg-[#121214] text-white",
        borderHover: "hover:border-rose-300/50 dark:hover:border-rose-300/40",
      },
      features: [
        "Modo fiesta & after",
        "Acceso con contraseña",
        "Itinerario de cóctel",
        "Dress code Black Tie",
      ],
      whatsappMessage:
        "Hola FestanovaCo, quisiera detalles sobre el modelo 'Velvet Nocturne'.",
    },
    {
      id: "riviera-breeze",
      number: "09",
      name: "Riviera Breeze",
      couplesNames: "Catalina & Nicolás",
      dateExample: "05.06.2027",
      locationExample: "Casa de Campo &bull; Santa Marta",
      styleTag: "Mediterráneo & Fresco",
      category: "destination",
      description:
        "Azules serenos, brisa costera y azulejos ornamentales para bodas frescas y radiantes frente al mar o en casas coloniales.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#4A7C9B] via-[#2F5873] to-[#173347]",
        glowColor: "rgba(74, 124, 155, 0.35)",
        pillBg: "bg-[#355C7D] text-white",
        borderHover: "hover:border-sky-300/60 dark:hover:border-sky-300/40",
      },
      features: [
        "Tips para invitados",
        "Itinerario multievento",
        "Música chill & lounge",
        "Ubicación Waze/Maps",
      ],
      whatsappMessage:
        "Hola FestanovaCo, me encantaría consultar por el modelo 'Riviera Breeze'.",
    },
    {
      id: "timeless-ivory",
      number: "10",
      name: "Timeless Ivory",
      couplesNames: "Daniela & Santiago",
      dateExample: "17.07.2027",
      locationExample: "Hacienda El Cedro &bull; Sopó",
      styleTag: "Elegancia Pura & Tradicional",
      category: "classic",
      description:
        "La máxima expresión de la elegancia tradicional nupcial: marfil inmaculado, tipografía caligráfica grabada y presentación clásica insuperable.",
      isAvailable: false,
      badge: "Próximamente",
      theme: {
        accentGradient:
          "from-[#9E8268] via-[#7A624A] to-[#473626]",
        glowColor: "rgba(158, 130, 104, 0.35)",
        pillBg: "bg-[#7A624A] text-white",
        borderHover: "hover:border-[#C5A880] dark:hover:border-amber-300/50",
      },
      features: [
        "Efecto sobre digital",
        "Cupos asignados RSVP",
        "Itinerario tradicional",
        "Música sacra & vals",
      ],
      whatsappMessage:
        "Hola FestanovaCo, deseo consultar disponibilidad para el modelo 'Timeless Ivory'.",
    },
  ];
}
