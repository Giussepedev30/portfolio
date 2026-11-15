const { PDFDocument, StandardFonts, rgb } = require('../node_modules/pdf-lib');

async function main() {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_W = 595.28; // A4
  const PAGE_H = 841.89;
  const MARGIN = 50;
  const LINE = 14;
  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  const black = rgb(0.1, 0.1, 0.1);
  const accent = rgb(0.12, 0.35, 0.7);
  const gray = rgb(0.4, 0.4, 0.4);

  function ensureSpace(n) {
    if (y - n < MARGIN) {
      page = doc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  }
  function text(t, size = 10.5, f = font, color = black, x = MARGIN) {
    page.drawText(t, { x, y, size, font: f, color });
    y -= size + 4;
  }
  function heading(t) {
    ensureSpace(30);
    y -= 6;
    page.drawText(t, { x: MARGIN, y, size: 13, font: bold, color: accent });
    y -= 6;
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.8, color: accent });
    y -= 12;
  }
  function bullet(t, size = 10.5) {
    ensureSpace(size + 6);
    page.drawText('•', { x: MARGIN, y, size, font: bold, color: accent });
    // wrap
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
      y -= size + 4;
      if (i < lines.length - 1) ensureSpace(size + 4);
    }
  }
  function para(t, size = 10.5, f = font) {
    const maxW = PAGE_W - 2 * MARGIN;
    const words = t.split(' ');
    let line = '';
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (f.widthOfTextAtSize(test, size) > maxW) { ensureSpace(size + 4); page.drawText(line, { x: MARGIN, y, size, font: f, color: black }); y -= size + 4; line = w; }
      else line = test;
    }
    if (line) { ensureSpace(size + 4); page.drawText(line, { x: MARGIN, y, size, font: f, color: black }); y -= size + 4; }
  }

  // Header
  page.drawText('Giussepe Taquiri Calderon', { x: MARGIN, y, size: 22, font: bold, color: accent });
  y -= 26;
  page.drawText('Software Engineering Student  |  Backend & Full Stack Developer', { x: MARGIN, y, size: 12, font: italic, color: gray });
  y -= 16;
  page.drawText('Lima, Peru  ·  giussepetaquiri@gmail.com  ·  github.com/Giussepedev30', { x: MARGIN, y, size: 9.5, font, color: gray });
  y -= 12;
  page.drawText('linkedin.com/in/giussepe-taquiri-calderon-0aa7b5338', { x: MARGIN, y, size: 9.5, font, color: gray });
  y -= 18;

  heading('Professional Summary');
  para('7th-semester Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC). I build web and mobile applications with a focus on REST APIs, business logic, and real-world problems. Particularly interested in SaaS products, automation, and AI. Currently seeking pre-professional internships in software development (Backend / Full Stack).');

  heading('Education');
  page.drawText('Universidad Peruana de Ciencias Aplicadas (UPC) — Lima, Peru', { x: MARGIN, y, size: 11, font: bold, color: black }); y -= 14;
  page.drawText('B.Sc. in Software Engineering  ·  7th semester (in progress)', { x: MARGIN, y, size: 10, font, color: gray }); y -= 16;

  heading('Experience');
  page.drawText('Calta S.A.C. — Lima, Peru', { x: MARGIN, y, size: 11, font: bold, color: black }); y -= 14;
  page.drawText('IT Support Technician  ·  Jan 2022 – Dec 2024', { x: MARGIN, y, size: 10, font: italic, color: gray }); y -= 14;
  bullet('Hardware and software support, equipment setup, troubleshooting, and network connectivity.');
  bullet('Maintained and configured workstations, printers, and network devices for staff.');
  bullet('Provided first-level support and documented incidents and resolutions.');

  heading('Technical Skills');
  const skills = [
    ['Backend', 'Java, Spring Boot, Node.js, C#, .NET, REST APIs'],
    ['Frontend', 'JavaScript, TypeScript, Vue.js, HTML5, CSS, React'],
    ['Mobile', 'Flutter, Android'],
    ['Databases', 'SQL, MySQL, PostgreSQL, SQLite'],
    ['Tools', 'Git, GitHub, Postman, Swagger/OpenAPI, Jira, Figma'],
    ['Methodologies', 'Scrum, GitFlow'],
  ];
  for (const [k, v] of skills) {
    ensureSpace(14);
    page.drawText(k + ':', { x: MARGIN, y, size: 10.5, font: bold, color: black });
    page.drawText('  ' + v, { x: MARGIN + bold.widthOfTextAtSize(k + ':', 10.5), y, size: 10.5, font, color: black });
    y -= 15;
  }

  heading('Featured Projects');
  const projects = [
    ['Frescapp', 'Web platform that consolidates voice-dictated fresh-product orders for restaurants and shops; generates printable PDFs. React + Vite + Supabase.'],
    ['Hospedaje Buenos Aires', 'Hotel & hospitality management system (TypeScript).'],
    ['MeldCash', 'Comprehensive personal finance and task management platform.'],
    ['SmartFlow (UPC)', 'IoT monitoring solution — backend with C#, .NET, and SQL.'],
    ['AutoMatch (UPC)', 'REST APIs with Spring Boot, Ratings & Reputation module, Android/Flutter integration.'],
    ['TuCash (UPC)', 'Personal finance app with expense tracking, analytics dashboard, WCAG accessibility.'],
    ['MediCore (fork)', 'REST API for a medical management system using Java and Spring Boot.'],
  ];
  for (const [name, desc] of projects) {
    ensureSpace(28);
    page.drawText(name, { x: MARGIN, y, size: 11, font: bold, color: accent }); y -= 13;
    para(desc, 9.5, font); y -= 4;
  }

  heading('Certifications');
  bullet('Google Cybersecurity Certificate — Coursera (2026)');
  bullet('Using Python to Access Web Data — University of Michigan (2025)');
  bullet('Python Data Structures — University of Michigan (2025)');

  heading('Languages');
  para('Spanish (native)  ·  English (intermediate/technical)');

  const bytes = await doc.save();
  require('fs').writeFileSync('C:/Users/giuss/Documents/app2027/portfolio/cv.pdf', bytes);
  console.log('written', bytes.length);
}

main().catch(e => { console.error(e); process.exit(1); });
