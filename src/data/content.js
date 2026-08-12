export const copy = {
  es: {
    navServices: 'Servicios', navProjects: 'Proyectos', navCta: 'Agendar llamada',
    eyebrow: 'Estudio pixelSolutions',
    heroTitle: 'Proyectos que ya están en producción.',
    heroLede: 'Análisis, diseño y código en un solo equipo. Esto es una muestra de lo que hemos construido para nuestros clientes, de principio a fin.',
    heroBtnPrimary: 'Ver proyectos', heroBtnSecondary: 'Hablemos de tu proyecto',
    servicesTitle: 'Cómo trabajamos', servicesSubtitle: 'Cuatro disciplinas, un solo equipo, sin soltar el hilo.',
    projectsTitle: 'Proyectos', projectsSubtitle: 'Cuatro piezas recientes, de branding a producto en línea.',
    viewMore: 'Ver detalle',
    ctaEyebrow: '¿Tienes un proyecto en mente?',
    ctaTitle: '15 a 20 minutos, sin compromiso.',
    ctaLede: 'Cuéntanos sobre tu proyecto y te devolvemos una propuesta clara: alcance, tiempos y precio.',
    ctaBtn: 'Agendar llamada',
    footer: 'proyectos · julio 2026'
  },
  en: {
    navServices: 'Services', navProjects: 'Projects', navCta: 'Book a call',
    eyebrow: 'pixelSolutions studio',
    heroTitle: 'Projects already live in production.',
    heroLede: 'Analysis, design and code under one roof. A sample of what we have built for our clients, start to finish.',
    heroBtnPrimary: 'See projects', heroBtnSecondary: 'Talk about your project',
    servicesTitle: 'How we work', servicesSubtitle: 'Four disciplines, one team, one thread throughout.',
    projectsTitle: 'Projects', projectsSubtitle: 'Four recent pieces, from branding to shipped product.',
    viewMore: 'View detail',
    ctaEyebrow: 'Got a project in mind?',
    ctaTitle: '15 to 20 minutes, no strings attached.',
    ctaLede: 'Tell us about your project and we will send back a clear proposal: scope, timeline and price.',
    ctaBtn: 'Book a call',
    footer: 'projects · july 2026'
  }
};

export const servicesByLang = {
  es: [
    { title: 'Análisis', desc: 'Entendemos el negocio antes de tocar una línea de código o un píxel.', color: 'blue' },
    { title: 'Diseño', desc: 'Sistemas visuales claros, hechos para durar más de un proyecto.', color: 'blue' },
    { title: 'Desarrollo', desc: 'Código de producción, no maquetas: lo que ves ya funciona.', color: 'accent' },
    { title: 'SEO', desc: 'Piezas pensadas para encontrarse, no solo para verse bien.', color: 'blue' }
  ],
  en: [
    { title: 'Analysis', desc: 'We understand the business before touching code or pixels.', color: 'blue' },
    { title: 'Design', desc: 'Clear visual systems, built to outlive a single project.', color: 'blue' },
    { title: 'Development', desc: 'Production code, not mockups — what you see already works.', color: 'accent' },
    { title: 'SEO', desc: 'Built to be found, not just to look good.', color: 'blue' }
  ]
};

export const projectsByLang = {
  es: [
    {
      id: 'kumobi', img: 'kumobi.jpg', imgPlaceholder: 'Captura de KUMOBI',
      tag: 'Marca · Sitio web', name: 'KUMOBI',
      summary: 'Dark kitchen en CDMX con una identidad cyberpunk completa: universo narrativo, menú y pedidos en un solo sitio.',
      role: 'Branding narrativo + sitio de pedidos',
      detail: 'Construimos el universo de marca de KUMOBI desde cero: una dark kitchen que se presenta como una facción clandestina en un Mixcoac de ciencia ficción. El sitio traduce esa historia en menú, horarios y canales de pedido (Rappi, WhatsApp, pickup) sin perder la voz del personaje.',
      stack: ['Diseño de marca', 'Sitio web', 'Copywriting'],
      link: 'https://www.kumobi.com.mx', linkLabel: 'Ver sitio en vivo'
    },
    {
      id: 'draisa', img: 'draisa.jpg', imgPlaceholder: 'Captura de Dra. Jesica Interniasa',
      tag: 'Sitio web · Salud', name: 'Dra. Jesica Interniasa',
      summary: 'Sitio de citas para consultorio de medicina interna: información clara para pacientes y agenda simple.',
      role: 'Sitio web + agenda de citas',
      detail: 'Un sitio pensado para pacientes, no para el consultorio: presenta a la doctora, los servicios de medicina interna y un camino directo para agendar cita por WhatsApp, sin formularios largos ni fricción.',
      stack: ['Sitio web', 'Agenda de citas', 'SEO local'],
      link: 'https://www.drajesicainternisa.com', linkLabel: 'Ver sitio en vivo'
    },
    {
      id: 'placeholder-3', img: 'project-3.jpg', imgPlaceholder: 'Reemplaza con tu captura',
      tag: 'Producto digital', name: '[Tu próximo proyecto]',
      summary: 'Espacio reservado para el siguiente caso de estudio, reemplaza nombre, imagen y descripción.',
      role: 'Por definir',
      detail: 'Este es un espacio de ejemplo. Cuéntanos el nombre del proyecto, qué construimos y para quién, y lo dejamos listo con la misma estructura que los demás casos.',
      stack: ['Análisis', 'Diseño', 'Desarrollo'],
      link: '#', linkLabel: 'Ver sitio en vivo'
    },
    {
      id: 'placeholder-4', img: 'project-4.jpg', imgPlaceholder: 'Reemplaza con tu captura',
      tag: 'Producto digital', name: '[Tu próximo proyecto]',
      summary: 'Espacio reservado para el siguiente caso de estudio, reemplaza nombre, imagen y descripción.',
      role: 'Por definir',
      detail: 'Este es un espacio de ejemplo. Cuéntanos el nombre del proyecto, qué construimos y para quién, y lo dejamos listo con la misma estructura que los demás casos.',
      stack: ['Análisis', 'Diseño', 'Desarrollo'],
      link: '#', linkLabel: 'Ver sitio en vivo'
    }
  ],
  en: [
    {
      id: 'kumobi', img: 'kumobi.jpg', imgPlaceholder: 'KUMOBI screenshot',
      tag: 'Brand · Website', name: 'KUMOBI',
      summary: 'A Mexico City dark kitchen with a full cyberpunk identity: story world, menu and ordering in one site.',
      role: 'Narrative branding + ordering site',
      detail: 'We built KUMOBI\'s brand universe from scratch: a dark kitchen framed as a clandestine faction in a sci-fi Mixcoac. The site turns that story into menu, hours and ordering channels (Rappi, WhatsApp, pickup) without losing the character voice.',
      stack: ['Brand design', 'Website', 'Copywriting'],
      link: 'https://www.kumobi.com.mx', linkLabel: 'View live site'
    },
    {
      id: 'draisa', img: 'draisa.jpg', imgPlaceholder: 'Dra. Jesica Interniasa screenshot',
      tag: 'Website · Health', name: 'Dra. Jesica Interniasa',
      summary: 'Appointment site for an internal medicine practice: clear info for patients and simple scheduling.',
      role: 'Website + appointment booking',
      detail: 'A site built for patients, not the office: introduces the doctor, the internal medicine services offered, and a direct path to book via WhatsApp — no long forms, no friction.',
      stack: ['Website', 'Appointment booking', 'Local SEO'],
      link: 'https://www.drajesicainternisa.com', linkLabel: 'View live site'
    },
    {
      id: 'placeholder-3', img: 'project-3.jpg', imgPlaceholder: 'Replace with your screenshot',
      tag: 'Digital product', name: '[Your next project]',
      summary: 'Placeholder for the next case study — swap in the name, image and description.',
      role: 'To be defined',
      detail: 'This is a sample slot. Tell us the project name, what we built and for whom, and we\'ll fill it in with the same structure as the other cases.',
      stack: ['Analysis', 'Design', 'Development'],
      link: '#', linkLabel: 'View live site'
    },
    {
      id: 'placeholder-4', img: 'project-4.jpg', imgPlaceholder: 'Replace with your screenshot',
      tag: 'Digital product', name: '[Your next project]',
      summary: 'Placeholder for the next case study — swap in the name, image and description.',
      role: 'To be defined',
      detail: 'This is a sample slot. Tell us the project name, what we built and for whom, and we\'ll fill it in with the same structure as the other cases.',
      stack: ['Analysis', 'Design', 'Development'],
      link: '#', linkLabel: 'View live site'
    }
  ]
};
