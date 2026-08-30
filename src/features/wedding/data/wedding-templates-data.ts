import type { WeddingTemplate } from "../types/wedding-templates.types";

export function getWeddingTemplates(demoHref: string): WeddingTemplate[] {
  return [
    {
      id: "jorge-yina-signature",
      number: "01",
      name: "Cartagena Romance",
      couplesNames: "Jorge & Yina",
      dateExample: "12.09.2026",
      locationExample: "Cartagena de Indias &bull; Colombia",
      styleTag: "Romántico & Editorial",
      category: "classic",
      description:
        "Nuestra invitación insignia en vivo con vista al atardecer, música instrumental, confirmación RSVP en tiempo real y mapa interactivo.",
      isAvailable: true,
      badge: "Demo en Vivo",
      previewImage: "/images/templates/wedding-demo-preview.jpg",
      theme: {
        accentGradient: "from-[#C5A880] via-[#A88B60] to-[#1B4332]",
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
      story:
        "Inspirada en las cálidas puestas de sol caribeñas sobre las murallas coloniales. Combina tipografía romana clásica con detalles dorados y una experiencia inmersiva que transporta a los invitados desde el primer segundo.",
      colors: [
        { name: "Oro Arena Cálido", hex: "#C5A880", role: "Acentos principales, monograma y bordes" },
        { name: "Verde Esmeralda Imperial", hex: "#1B4332", role: "Botones principales y fondos de contraste" },
        { name: "Marfil Seda", hex: "#FAF8F5", role: "Fondo general claro de alta legibilidad" },
        { name: "Grafito Carbón", hex: "#1C1917", role: "Textos editoriales y tipografía de lectura" },
      ],
      music: {
        title: "A Thousand Years (Cello & Piano Acoustic)",
        artist: "The Piano Guys",
        genre: "Instrumental Nupcial",
        vibe: "Emotiva, romántica y refinada para la apertura",
      },
      photoCapacity: {
        galleryMaxPhotos: 10,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 10 fotografías en alta resolución para la galería interactiva, 2 fotos principales para la portada y 4 fotos para el timeline de su historia.",
      },
      includedModules: [
        {
          title: "Confirmación RSVP Interactiva",
          description: "Formulario para confirmar asistencia, registrar número de acompañantes y avisar intolerancias o alergias alimentarias.",
          tag: "Gestión en Vivo",
        },
        {
          title: "Ubicación GPS (Waze & Google Maps)",
          description: "Botones con geolocalización directa que abren la aplicación de navegación en el celular de los invitados.",
          tag: "Llegada Fácil",
        },
        {
          title: "Itinerario Cronometrado del Evento",
          description: "Línea de tiempo con iconos de ceremonia religiosa/civil, cóctel de bienvenida, banquete y fiesta.",
          tag: "Cronograma",
        },
        {
          title: "Código de Vestimenta (Dress Code)",
          description: "Muestra la etiqueta de la boda (Formal, Guayabera, Black Tie) con paleta de colores sugerida para invitados.",
          tag: "Etiqueta",
        },
        {
          title: "Lluvia de Sobres & Cuenta Bancaria",
          description: "Datos bancarios y mensaje discreto para obsequios o mesa de regalos.",
          tag: "Regalos",
        },
        {
          title: "Cuenta Regresiva en Tiempo Real",
          description: "Reloj interactivo animado que descuenta días, horas y minutos exactos hasta el gran momento.",
          tag: "Interactiva",
        },
      ],
      customizationNotes: [
        "Adaptamos los nombres, fecha, lugares y textos a tu historia de amor.",
        "Puedes cambiar la canción de fondo por tu melodía preferida.",
        "La paleta de colores puede ajustarse a la temática floral de tu matrimonio.",
        "Soporta enlaces a mesas de regalos en tiendas departamentales o datos de transferencia.",
      ],
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
        accentGradient: "from-[#607D5E] via-[#4A6348] to-[#2D3E2C]",
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
      story:
        "Diseñada para bodas al aire libre, haciendas campestres y jardines botánicos. Incorpora sutiles hojas de olivo, texturas botánicas y una paleta orgánica que respira frescura y serenidad.",
      colors: [
        { name: "Verde Salvia Botánico", hex: "#607D5E", role: "Tono identitario y elementos de follaje" },
        { name: "Olivo Bosque", hex: "#2D3E2C", role: "Botones principales y contrastes oscuros" },
        { name: "Blanco Lino Natural", hex: "#F9F8F4", role: "Fondo orgánico de papel artesanal" },
        { name: "Roble Dorado", hex: "#B89658", role: "Líneas de separación y monograma" },
      ],
      music: {
        title: "Bloom (Acoustic Guitar & Strings)",
        artist: "The Paper Kites",
        genre: "Indie Acústico / Folk Romántico",
        vibe: "Natural, fresca y perfecta para bodas de día y atardecer campestre",
      },
      photoCapacity: {
        galleryMaxPhotos: 12,
        coverPhotos: 2,
        timelinePhotos: 5,
        description:
          "Hasta 12 fotos campestres en la galería, fotos panorámicas de portada y 5 memorias para el timeline de novios.",
      },
      includedModules: [
        {
          title: "Módulo de Clima & Recomendaciones Outdoor",
          description: "Tips especiales para el calzado sobre césped, abrigo nocturno y transporte rural.",
          tag: "Tips Invitados",
        },
        {
          title: "Confirmación RSVP con Elección de Menú",
          description: "Registro de confirmación con opciones de menú campestre (Opción vegetariana/vegana).",
          tag: "RSVP Avanzado",
        },
        {
          title: "Mapa Interactivo con Ruta Rural",
          description: "Navegación GPS optimizada con puntos de referencia para haciendas fuera del perímetro urbano.",
          tag: "Waze & Maps",
        },
        {
          title: "Playlist Spotify Colaborativa",
          description: "Enlace directo para que los invitados sugieran canciones para la recepción.",
          tag: "Música en Vivo",
        },
      ],
      customizationNotes: [
        "Reemplazamos las ilustraciones botánicas según la flora de tu evento (eucalipto, olivo, orquídeas).",
        "Sección especial con recomendaciones de transporte y hospedajes cercanos.",
      ],
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
        accentGradient: "from-[#6C6C70] via-[#444448] to-[#1C1C1E]",
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
      story:
        "Una oda a la alta costura y al diseño editorial moderno. Inspirada en portadas de revistas de moda y galerías de arte contemporáneo, donde cada espacio en blanco tiene intención y sofisticación.",
      colors: [
        { name: "Negro Ónix", hex: "#1C1C1E", role: "Tipografía monumental y estructura" },
        { name: "Gris Titanio Suave", hex: "#8E8E93", role: "Líneas geométricas y metadatos" },
        { name: "Blanco Puro Editorial", hex: "#FFFFFF", role: "Fondo minimalista inmaculado" },
        { name: "Plata Platino", hex: "#D1D1D6", role: "Bordes sutiles y estados inactivos" },
      ],
      music: {
        title: "Experience (Solo Piano & Subtle Ambient)",
        artist: "Ludovico Einaudi",
        genre: "Neoclásico Contemporáneo",
        vibe: "Elegante, moderna, solemne y de alto impacto emocional",
      },
      photoCapacity: {
        galleryMaxPhotos: 8,
        coverPhotos: 1,
        timelinePhotos: 3,
        description:
          "Hasta 8 fotografías seleccionadas estilo editorial de alta costura, portada de impacto visual y timeline sobrio.",
      },
      includedModules: [
        {
          title: "Galería Editorial Estilo Lookbook",
          description: "Presentación de fotos tipo revista de moda con navegación horizontal táctil fluida.",
          tag: "Lookbook",
        },
        {
          title: "RSVP Express en 1 Minuto",
          description: "Flujo minimalista ultra rápido para confirmar asistencia con un par de toques.",
          tag: "RSVP Ágil",
        },
        {
          title: "Dress Code Black Tie / Cocktail",
          description: "Guía visual con muestra de paleta estricta monocromática.",
          tag: "Dress Code",
        },
        {
          title: "Directorio de Alojamientos Urbanos",
          description: "Hoteles recomendados cerca al venue central con tarifas preferenciales.",
          tag: "Hospedaje",
        },
      ],
      customizationNotes: [
        "Tipografías modernas personalizables (Serif geométrica, Sans de alta legibilidad).",
        "Opciones de fotos en blanco y negro o color de alto contraste.",
      ],
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
        accentGradient: "from-[#D97D54] via-[#B95D34] to-[#7C3218]",
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
      story:
        "Diseñada para bodas destino en el Caribe, islas privadas y playas paradisíacas. Integra un cronograma multievento para fiestas de bienvenida (Welcome Party), día de boda y brunch de despedida.",
      colors: [
        { name: "Terracota Atardecer", hex: "#D97D54", role: "Color protagónico y botones" },
        { name: "Arena Dorada", hex: "#E8CBA7", role: "Acentos suaves y marcos cálidos" },
        { name: "Marrón Cacao Tostado", hex: "#7C3218", role: "Tipografía de lectura y contrastes" },
        { name: "Marfil Brisa Marina", hex: "#FAF6F0", role: "Fondo cálido y luminoso" },
      ],
      music: {
        title: "La Vie En Rose (Chill Tropical Bossa / Acoustic)",
        artist: "Laura & Anton",
        genre: "Bossa Nova Acústica / Chillout",
        vibe: "Cálida, relajada, veraniega y sofisticada",
      },
      photoCapacity: {
        galleryMaxPhotos: 14,
        coverPhotos: 3,
        timelinePhotos: 6,
        description:
          "Hasta 14 fotos para capturar la atmósfera playera, fotos de sesiones preboda y timeline multievento.",
      },
      includedModules: [
        {
          title: "Itinerario Multidía (3 Días de Boda)",
          description: "Desglose de eventos: Día 1 Coctel de Bienvenida, Día 2 Ceremonia & Fiesta, Día 3 Sunset Brunch.",
          tag: "Multievento",
        },
        {
          title: "Coordinación de Traslados y Lanchas",
          description: "Horarios de salida de buses y transporte marítimo hacia la isla con botón de reserva.",
          tag: "Transporte",
        },
        {
          title: "Recomendaciones de Vuelos & Hoteles",
          description: "Código de descuento en aerolíneas y hoteles recomendados para invitados que viajan.",
          tag: "Guía de Viaje",
        },
        {
          title: "RSVP con Confirmación por Eventos",
          description: "Los invitados indican a cuáles de los 3 eventos asistirán y si requieren transporte.",
          tag: "RSVP Completo",
        },
      ],
      customizationNotes: [
        "Configuración adaptable para bodas de 1, 2 o 3 días de celebración.",
        "Sección de clima tropical, bloqueador y consejos de indumentaria playera.",
      ],
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
        accentGradient: "from-[#D4AF37] via-[#B89628] to-[#7D6415]",
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
      story:
        "La máxima expresión del lujo de etiqueta para celebraciones en grandes salones, clubes sociales y hoteles 5 estrellas. Detalles dorados deslumbrantes que evocan el brindis nupcial con champaña.",
      colors: [
        { name: "Champaña Dorado", hex: "#D4AF37", role: "Acentos dorados metálicos y monogramas" },
        { name: "Bronce Noble", hex: "#7D6415", role: "Contrastes profundos y botones" },
        { name: "Perla Marfil", hex: "#FCFAF6", role: "Fondo refinado de alta gama" },
        { name: "Antracita Profundo", hex: "#22201D", role: "Textos solemnes de gala" },
      ],
      music: {
        title: "Canon in D (Orchestral Strings & Harp)",
        artist: "Johann Pachelbel / Royal Philharmonic",
        genre: "Música Clásica Gala",
        vibe: "Majestuosa, solemne e imponente para bodas de gran etiqueta",
      },
      photoCapacity: {
        galleryMaxPhotos: 10,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 10 fotos en alta calidad, sello heráldico animado y galería optimizada para fotografía de estudio.",
      },
      includedModules: [
        {
          title: "Sello de Cera / Monograma Heráldico",
          description: "Animación de apertura con sello de cera dorado personalizado con las iniciales de los novios.",
          tag: "Sello de Lujo",
        },
        {
          title: "Protocolo de Gala y Rigurosa Etiqueta",
          description: "Especificaciones detalladas para Smoking, Traje de Gala y Vestidos Largos.",
          tag: "Etiqueta Gala",
        },
        {
          title: "Lluvia de Sobres Virtual",
          description: "Módulo seguro con datos bancarios y botón de confirmación de transferencia.",
          tag: "Obsequios",
        },
        {
          title: "RSVP con Selección de Asientos y Menú",
          description: "Gestión de invitados con menú de 3 tiempos y bebidas preferidas.",
          tag: "RSVP Banquete",
        },
      ],
      customizationNotes: [
        "Monograma diseñado a medida con las iniciales de la pareja.",
        "Paleta con opciones de dorado champaña, oro rosa o plata estelar.",
      ],
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
        accentGradient: "from-[#3B5B8C] via-[#243B61] to-[#121F36]",
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
      story:
        "Diseño aristocrático y reverente para bodas religiosas tradicionales en catedrales y basílicas coloniales. El monograma entrelazado actúa como el escudo de unión familiar.",
      colors: [
        { name: "Azul Zafiro Real", hex: "#243B61", role: "Tono señorial y botones de acción" },
        { name: "Azul Medianoche", hex: "#121F36", role: "Contrastes profundos y títulos" },
        { name: "Oro Florentino", hex: "#D4B46A", role: "Monograma entrelazado y filetes" },
        { name: "Papel Algodón Marfil", hex: "#F7F5F0", role: "Fondo con textura táctil visual" },
      ],
      music: {
        title: "Ave Maria (Cello & Vocal Ensemble)",
        artist: "Franz Schubert / HAUSER",
        genre: "Música Sacra / Cello Clásico",
        vibe: "Solemne, celestial, profunda y reverente",
      },
      photoCapacity: {
        galleryMaxPhotos: 10,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 10 imágenes en alta resolución con formato de papel enmarcado y álbum familiar de recuerdo.",
      },
      includedModules: [
        {
          title: "Monograma Dinástico Entrelazado",
          description: "Creación de logotipo nupcial con las iniciales de los novios aplicable a toda su papelería.",
          tag: "Heráldica",
        },
        {
          title: "Guía de la Ceremonia Litúrgica",
          description: "Detalle de lecturas, coros y protocolo de la iglesia o catedral.",
          tag: "Liturgia",
        },
        {
          title: "Gestión RSVP por Grupos Familiares",
          description: "Permite confirmar grupos familiares completos con número asignado de pases.",
          tag: "Pases Familiares",
        },
        {
          title: "Mesa de Regalos & Tiendas Departamentales",
          description: "Integración con Falabella, Novias Falabella, Linio o cuentas bancarias.",
          tag: "Lista Novios",
        },
      ],
      customizationNotes: [
        "Adaptable a iglesias católicas, cristianas o ceremonias espirituales.",
        "Monograma exportable para usar en recuerdos físicos del evento.",
      ],
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
        accentGradient: "from-[#8B2D38] via-[#661E27] to-[#3B0E14]",
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
      story:
        "Inspirada en las colinas toscanas, los viñedos y las largas mesas de madera al atardecer. Combina tonos vino burdeos con hojas de olivo y un enfoque cálido centrado en la experiencia gastronómica.",
      colors: [
        { name: "Vino Burdeos Toscana", hex: "#661E27", role: "Tono protagonista y detalles florales" },
        { name: "Olivo Seco", hex: "#7A8450", role: "Ilustraciones botánicas y acentos" },
        { name: "Cereza Oscura", hex: "#3B0E14", role: "Botones y encabezados solemnes" },
        { name: "Lino Rústico", hex: "#F5F2EB", role: "Fondo cálido artesanal" },
      ],
      music: {
        title: "Buona Sera Signorina / O Sole Mio (Acoustic Jazz)",
        artist: "Italian Jazz Quartet",
        genre: "Jazz Acústico Italiano / Romántico",
        vibe: "Alegre, cálida, entrañable y festiva",
      },
      photoCapacity: {
        galleryMaxPhotos: 12,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 12 fotos campestres y de viñedo, galería de fotos tipo polaroid y portada cálida.",
      },
      includedModules: [
        {
          title: "Menú Degustación & Maridaje",
          description: "Presentación apetitosa de los platos principales, postres y vinos de la celebración.",
          tag: "Gastronomía",
        },
        {
          title: "Ruta de Transporte y Buses Exclusivos",
          description: "Horarios y puntos de recogida en la ciudad para transportar a los invitados a la finca.",
          tag: "Logística",
        },
        {
          title: "Dress Code Cálido Campestre",
          description: "Guía de vestimenta para clima templado con sugerencia de calzado cómodo.",
          tag: "Guía Estilo",
        },
        {
          title: "Confirmación RSVP con Restricciones",
          description: "Registro de alergias a frutos secos, mariscos o preferencias de comida.",
          tag: "RSVP Menú",
        },
      ],
      customizationNotes: [
        "Posibilidad de incluir notas de cata de vinos o cócteles de autor.",
        "Personalización de paleta con burdeos, terracota o verde viña.",
      ],
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
        accentGradient: "from-[#4A3245] via-[#2D1B29] to-[#160B14]",
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
      story:
        "Creada para bodas nocturnas cosmopolitas de alta energía, hangares de lujo y salones modernos. Una estética 'Dark Glamour' con acentos oro rosa que anticipa una noche inolvidable de cócteles y fiesta.",
      colors: [
        { name: "Terciopelo Ciruela", hex: "#2D1B29", role: "Tono envolvente de fondo oscuro" },
        { name: "Oro Rosa Metalizado", hex: "#D4A59A", role: "Acentos brillantes y monograma" },
        { name: "Negro Obsidiana", hex: "#120B10", role: "Contraste profundo y botones de gala" },
        { name: "Champaña Rosé", hex: "#F3E5E1", role: "Textos de lectura y luminosidad" },
      ],
      music: {
        title: "Can't Help Falling in Love (Deep Lounge Rework)",
        artist: "Kina Grannis / Acoustic Beats",
        genre: "Deep Lounge / Pop Romántico Nocturno",
        vibe: "Seductora, sofisticada, moderna y con ritmo sutil",
      },
      photoCapacity: {
        galleryMaxPhotos: 10,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 10 fotos en estilo nocturno o blanco y negro, portada cinematográfica y álbum de fiesta.",
      },
      includedModules: [
        {
          title: "Acceso Privado con Clave VIP",
          description: "Control de acceso exclusivo mediante contraseña personalizada para los invitados.",
          tag: "Privacidad VIP",
        },
        {
          title: "Itinerario de Fiesta & After Party",
          description: "Cronograma centrado en la noche: Cóctel de autor, show de luces, pista y hora loca.",
          tag: "Nightlife",
        },
        {
          title: "Dress Code Black Tie / Gala Nocturna",
          description: "Instrucciones de etiqueta rigurosa para hombres (esmoquin) y mujeres (vestido largo).",
          tag: "Black Tie",
        },
        {
          title: "RSVP Digital Instantáneo",
          description: "Confirmación en línea con opciones de transporte de regreso seguro nocturno.",
          tag: "RSVP Seguro",
        },
      ],
      customizationNotes: [
        "Fondo oscuro adaptable (Gris grafito, ciruela profundo o azul noche).",
        "Opción de clave secreta para mantener la invitación totalmente privada.",
      ],
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
        accentGradient: "from-[#4A7C9B] via-[#2F5873] to-[#173347]",
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
      story:
        "Evoca las costas mediterráneas y el Caribe colonial con motivos de mayólica azul cobalto, brisa marina y sol brillante. Perfecta para novios que buscan elegancia fresca sin rigideces.",
      colors: [
        { name: "Azul Riviera", hex: "#2F5873", role: "Tono principal y azulejos ornamentales" },
        { name: "Azul Marino Costero", hex: "#173347", role: "Tipografía de lectura y botones" },
        { name: "Amarillo Limoncello", hex: "#E8C872", role: "Acentos luminosos y detalles de sol" },
        { name: "Blanco Sal Marina", hex: "#F6F9FB", role: "Fondo limpio y espacioso" },
      ],
      music: {
        title: "Fly Me to the Moon (Acoustic Guitar & Vocals)",
        artist: "Macarons Project",
        genre: "Acoustic Pop / Bossa",
        vibe: "Fresca, alegre, costera y elegante",
      },
      photoCapacity: {
        galleryMaxPhotos: 12,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 12 fotos frente al mar o en calles coloniales, portada panorámica y timeline fresco.",
      },
      includedModules: [
        {
          title: "Guía Turística de Santa Marta / Caribe",
          description: "Recomendaciones de playas, restaurantes imperdibles y tours para los días previos.",
          tag: "Guía Ciudad",
        },
        {
          title: "Cronograma de Ceremonia Frente al Mar",
          description: "Horarios sincronizados con la hora dorada (Sunset hour) para fotos perfectas.",
          tag: "Sunset Hour",
        },
        {
          title: "Dress Code Guayabera & Lino",
          description: "Especificaciones para etiqueta tropical elegante (guayabera blanca/beige para ellos).",
          tag: "Guayabera",
        },
        {
          title: "RSVP con Hospedaje y Asistencia",
          description: "Confirmación integral para novios que coordinan alojamiento para su familia.",
          tag: "RSVP Completo",
        },
      ],
      customizationNotes: [
        "Patrones de azulejos personalizables según la estética del evento.",
        "Paleta con azul cobalto, verde agua o amarillo mediterráneo.",
      ],
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
        accentGradient: "from-[#9E8268] via-[#7A624A] to-[#473626]",
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
      story:
        "La elegancia atemporal que nunca pasa de moda. Un homenaje a la caligrafía a mano, el relieve en seco sobre papel de algodón marfil y las bodas clásicas que trascienden generaciones.",
      colors: [
        { name: "Marfil Seda Real", hex: "#FAF8F5", role: "Fondo principal aterciopelado" },
        { name: "Tierra de Sombras Noble", hex: "#7A624A", role: "Tipografía caligráfica y acentos" },
        { name: "Cacao Intenso", hex: "#473626", role: "Botones solemnes y monograma" },
        { name: "Oro Antiguo Grabado", hex: "#C5A880", role: "Filetes y detalles ornamentales" },
      ],
      music: {
        title: "Wedding Waltz / The Blue Danube (Orchestral)",
        artist: "Johann Strauss / Vienna Philharmonic",
        genre: "Vals Clásico Tradicional",
        vibe: "Tradicional, majestuosa y de elegancia eterna",
      },
      photoCapacity: {
        galleryMaxPhotos: 10,
        coverPhotos: 2,
        timelinePhotos: 4,
        description:
          "Hasta 10 retratos de estudio en alta resolución, apertura con efecto de sobre tradicional y galería formal.",
      },
      includedModules: [
        {
          title: "Apertura con Efecto Sobre Caligrafiado",
          description: "Animación de sobre sellado que se desenvuelve elegantemente con el nombre de los invitados.",
          tag: "Sobre Real",
        },
        {
          title: "Cupos y Pases Formales Asignados",
          description: "Indica con precisión los cupos otorgados por invitación (Ej. 'Hemos reservado 2 cupos en su honor').",
          tag: "Cupos RSVP",
        },
        {
          title: "Itinerario Tradicional de Boda de Gala",
          description: "Misa mayor, cóctel de honor, vals nupcial, cena de gala y brindis de los padrinos.",
          tag: "Protocolo",
        },
        {
          title: "Mesa de Regalos & Cuenta Bancaria",
          description: "Presentación protocolaria de la lluvia de sobres y tiendas afiliadas.",
          tag: "Obsequios",
        },
      ],
      customizationNotes: [
        "Tipografías caligráficas clásicas estilo carta inglesa o romana grabada.",
        "Ajuste personalizado del texto del sobre y nombres de los padrinos y padres.",
      ],
    },
  ];
}

export function getWeddingTemplateById(
  id: string,
  demoHref: string
): WeddingTemplate | undefined {
  const templates = getWeddingTemplates(demoHref);
  return templates.find((t) => t.id === id);
}

export function getAllWeddingTemplateIds(): string[] {
  const templates = getWeddingTemplates("");
  return templates.map((t) => t.id);
}
