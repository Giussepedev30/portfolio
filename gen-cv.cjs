const { PDFDocument, StandardFonts, rgb } = require('../node_modules/pdf-lib');
const fs = require('fs');
const path = require('path');

const CONTENT = {
  en: {
    out: 'cv.pdf',
    role: 'Software Engineering Student  |  Backend & Full Stack Developer',
    contact: 'Lima, Peru  \u00b7  giussepetaquiri@gmail.com  \u00b7  github.com/Giussepedev30',
    linkedin: 'linkedin.com/in/giussepe-taquiri-calderon-0aa7b5338',
    summaryHeading: 'Professional Summary',
    summary:
      '7th-semester Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC). I build web and mobile applications with a focus on REST APIs, business logic, and real-world problems. Particularly interested in SaaS products, automation, and AI. Currently seeking pre-professional internships in software development (Backend / Full Stack).',
    educationHeading: 'Education',
    university: 'Universidad Peruana de Ciencias Aplicadas (UPC) \u2014 Lima, Peru',
    degree: 'B.Sc. in Software Engineering  \u00b7  7th semester (in progress)',
    experienceHeading: 'Experience',
    company: 'Calta S.A.C. \u2014 Lima, Peru',
    jobTitle: 'IT Support Technician  \u00b7  Jan 2022 \u2013 Dec 2024',
    experience: [
      'Hardware and software support, equipment setup, troubleshooting, and network connectivity.',
      'Maintained and configured workstations, printers, and network devices for staff.',
      'Provided first-level support and documented incidents and resolutions.',
    ],
    skillsHeading: 'Technical Skills',
    skills: [
      ['Backend', 'Java, Spring Boot, Node.js, C#, .NET, REST APIs'],
      ['Frontend', 'JavaScript, TypeScript, Vue.js, HTML5, CSS, React'],
      ['Mobile', 'Flutter, Android'],
      ['Databases', 'SQL, MySQL, PostgreSQL, SQLite'],
      ['Tools', 'Git, GitHub, Postman, Swagger/OpenAPI, Jira, Figma'],
      ['Methodologies', 'Scrum, GitFlow'],
    ],
    projectsHeading: 'Featured Projects',
    projects: [
      ['Frescapp', 'Web platform that consolidates voice-dictated fresh-product orders for restaurants and shops; generates printable PDFs. React + Vite + Supabase.'],
      ['Hospedaje Buenos Aires', 'Hotel & hospitality management system (TypeScript).'],
      ['MeldCash', 'Technical documentation for a personal finance and task management platform.'],
      ['SmartFlow (UPC)', 'IoT monitoring solution \u2014 backend with C#, .NET, and SQL.'],
      ['AutoMatch (UPC)', 'REST APIs with Spring Boot, Ratings & Reputation module, Android/Flutter integration.'],
      ['TuCash (UPC)', 'Personal finance app with expense tracking, analytics dashboard, WCAG accessibility.'],
      ['MediCore (open source)', 'REST API for a medical management system using Java and Spring Boot.'],
    ],
    certificationsHeading: 'Certifications',
    certifications: [
      'Google Cybersecurity Certificate \u2014 Coursera (2026)',
      'Using Python to Access Web Data \u2014 University of Michigan (2025)',
      'Python Data Structures \u2014 University of Michigan (2025)',
    ],
    languagesHeading: 'Languages',
    languages: 'Spanish (native)  \u00b7  English (intermediate/technical)',
  },
  es: {
    out: 'cv-es.pdf',
    role: 'Estudiante de Ingenier\u00eda de Software  |  Desarrollador Backend & Full Stack',
    contact: 'Lima, Per\u00fa  \u00b7  giussepetaquiri@gmail.com  \u00b7  github.com/Giussepedev30',
    linkedin: 'linkedin.com/in/giussepe-taquiri-calderon-0aa7b5338',
    summaryHeading: 'Perfil Profesional',
    summary:
      'Estudiante de 7.\u00ba ciclo de Ingenier\u00eda de Software en la Universidad Peruana de Ciencias Aplicadas (UPC). Desarrollo aplicaciones web y m\u00f3viles con enfoque en APIs REST, l\u00f3gica de negocio y problemas reales. Interesado en productos SaaS, automatizaci\u00f3n e inteligencia artificial. Busco pr\u00e1cticas preprofesionales en desarrollo de software (Backend / Full Stack).',
    educationHeading: 'Educaci\u00f3n',
    university: 'Universidad Peruana de Ciencias Aplicadas (UPC) \u2014 Lima, Per\u00fa',
    degree: 'Ingenier\u00eda de Software  \u00b7  7.\u00ba ciclo (en curso)',
    experienceHeading: 'Experiencia',
    company: 'Calta S.A.C. \u2014 Lima, Per\u00fa',
    jobTitle: 'T\u00e9cnico de Soporte TI  \u00b7  Ene 2022 \u2013 Dic 2024',
    experience: [
      'Soporte de hardware y software, instalaci\u00f3n de equipos, resoluci\u00f3n de incidencias y conectividad de red.',
      'Mantenimiento y configuraci\u00f3n de estaciones de trabajo, impresoras y dispositivos de red.',
      'Soporte de primer nivel y documentaci\u00f3n de incidencias y soluciones.',
    ],
    skillsHeading: 'Habilidades T\u00e9cnicas',
    skills: [
      ['Backend', 'Java, Spring Boot, Node.js, C#, .NET, APIs REST'],
      ['Frontend', 'JavaScript, TypeScript, Vue.js, HTML5, CSS, React'],
      ['M\u00f3vil', 'Flutter, Android'],
      ['Bases de datos', 'SQL, MySQL, PostgreSQL, SQLite'],
      ['Herramientas', 'Git, GitHub, Postman, Swagger/OpenAPI, Jira, Figma'],
      ['Metodolog\u00edas', 'Scrum, GitFlow'],
    ],
    projectsHeading: 'Proyectos Destacados',
    projects: [
      ['Frescapp', 'Plataforma web que consolida pedidos de productos frescos dictados por voz para restaurantes y tiendas; genera PDFs imprimibles. React + Vite + Supabase.'],
      ['Hospedaje Buenos Aires', 'Sistema de gesti\u00f3n hotelera y de hospedaje (TypeScript).'],
      ['MeldCash', 'Documentaci\u00f3n t\u00e9cnica de una plataforma de finanzas personales y gesti\u00f3n de tareas.'],
      ['SmartFlow (UPC)', 'Soluci\u00f3n de monitoreo IoT \u2014 backend con C#, .NET y SQL.'],
      ['AutoMatch (UPC)', 'APIs REST con Spring Boot, m\u00f3dulo de calificaciones y reputaci\u00f3n, integraci\u00f3n Android/Flutter.'],
      ['TuCash (UPC)', 'App de finanzas personales con seguimiento de gastos, panel anal\u00edtico y accesibilidad WCAG.'],
      ['MediCore (open source)', 'API REST para un sistema de gesti\u00f3n m\u00e9dica con Java y Spring Boot.'],
    ],
    certificationsHeading: 'Certificaciones',
    certifications: [
      'Google Cybersecurity Certificate \u2014 Coursera (2026)',
      'Using Python to Access Web Data \u2014 University of Michigan (2025)',
      'Python Data Structures \u2014 University of Michigan (2025)',
    ],
    languagesHeading: 'Idiomas',
    languages: 'Espa\u00f1ol (nativo)  \u00b7  Ingl\u00e9s (intermedio/t\u00e9cnico)',
  },
};

async function build(content) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_W = 595.28; // A4
  const PAGE_H = 841.89;
  const MARGIN = 50;
  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  const black = rgb(0.1, 0.1, 0.1);
  const accent = rgb(0.145, 0.388, 0.922); // #2563eb
  const gray = rgb(0.4, 0.4, 0.4);

  function ensureSpace(n) {
    if (y - n < MARGIN) {
      page = doc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  }
  function heading(t) {
    ensureSpace(28);
    y -= 5;
    page.drawText(t, { x: MARGIN, y, size: 12, font: bold, color: accent });
    y -= 5;
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.8, color: accent });
    y -= 10;
  }
  function bullet(t, size = 10.5) {
    ensureSpace(size + 6);
    page.drawText('\u2022', { x: MARGIN, y, size, font: bold, color: accent });
    const maxW = PAGE_W - MARGIN - MARGIN - 14;
    const words = t.split(' ');
    let line = '';
    const lines = [];
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (font.widthOfTextAtSize(test, size) > maxW) { lines.push(line); line = w; }
      else line = test;
    }
    if (line) lines.push(line);
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], { x: MARGIN + 14, y, size, font, color: black });
      y -= size + 3;
      if (i < lines.length - 1) ensureSpace(size + 3);
    }
  }
  function para(t, size = 10.5, f = font) {
    const maxW = PAGE_W - 2 * MARGIN;
    const words = t.split(' ');
    let line = '';
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (f.widthOfTextAtSize(test, size) > maxW) {
        ensureSpace(size + 3);
        page.drawText(line, { x: MARGIN, y, size, font: f, color: black });
        y -= size + 3;
        line = w;
      } else line = test;
    }
    if (line) { ensureSpace(size + 3); page.drawText(line, { x: MARGIN, y, size, font: f, color: black }); y -= size + 3; }
  }

  // Header
  page.drawText('Giussepe Taquiri Calderon', { x: MARGIN, y, size: 21, font: bold, color: accent });
  y -= 24;
  page.drawText(content.role, { x: MARGIN, y, size: 11.5, font: italic, color: gray });
  y -= 15;
  page.drawText(content.contact, { x: MARGIN, y, size: 9, font, color: gray });
  y -= 11;
  page.drawText(content.linkedin, { x: MARGIN, y, size: 9, font, color: gray });
  y -= 11;
  page.drawText('giussepedev30.github.io/portfolio', { x: MARGIN, y, size: 9, font, color: accent });
  y -= 16;

  heading(content.summaryHeading);
  para(content.summary);

  heading(content.educationHeading);
  page.drawText(content.university, { x: MARGIN, y, size: 11, font: bold, color: black }); y -= 14;
  page.drawText(content.degree, { x: MARGIN, y, size: 10, font, color: gray }); y -= 16;

  heading(content.experienceHeading);
  page.drawText(content.company, { x: MARGIN, y, size: 11, font: bold, color: black }); y -= 14;
  page.drawText(content.jobTitle, { x: MARGIN, y, size: 10, font: italic, color: gray }); y -= 14;
  for (const line of content.experience) bullet(line);

  heading(content.skillsHeading);
  for (const [k, v] of content.skills) {
    ensureSpace(14);
    page.drawText(k + ':', { x: MARGIN, y, size: 10.5, font: bold, color: black });
    page.drawText('  ' + v, { x: MARGIN + bold.widthOfTextAtSize(k + ':', 10.5), y, size: 10.5, font, color: black });
    y -= 14;
  }

  heading(content.projectsHeading);
  for (const [name, desc] of content.projects) {
    ensureSpace(28);
    page.drawText(name, { x: MARGIN, y, size: 11, font: bold, color: accent }); y -= 13;
    para(desc, 9.5, font); y -= 4;
  }

  heading(content.certificationsHeading);
  for (const c of content.certifications) bullet(c);

  heading(content.languagesHeading);
  para(content.languages);

  return doc.save();
}

async function main() {
  const dir = __dirname;
  for (const [lang, content] of Object.entries(CONTENT)) {
    const bytes = await build(content);
    const out = path.join(dir, content.out);
    fs.writeFileSync(out, bytes);
    console.log(lang, '->', content.out, bytes.length, 'bytes');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
