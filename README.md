# Portafolio — Giussepe Taquiri

Portafolio web estático (HTML + Tailwind CDN) bilingüe ES/EN con CV en PDF, listo para GitHub Pages.

## Contenido
- `index.html` — portafolio en español (Sobre mí, Stack, Proyectos, Experiencia, Educación, Contacto).
- `en/index.html` — portafolio en inglés, misma estructura y contenido traducido.
- `cv-es.pdf` — CV en español (generado con `gen-cv.cjs`).
- `cv.pdf` — CV en inglés (generado con `gen-cv.cjs`).
- `docs/` — copia publicada por GitHub Pages (`main` / `docs`).

## Idiomas
- El español es la versión canónica en `/`; el inglés vive en `/en/`.
- Cada página enlaza a `cv-es.pdf` o `cv.pdf` según su idioma.
- El selector `ES / EN` del header y del menú móvil usa rutas relativas, sin build ni JavaScript de routing.
- Ambas páginas declaran alternates `hreflang`.

## Cómo ver localmente
Abre `index.html` en el navegador, o sirve la carpeta:

```bash
npx serve .
```

## Desplegar en GitHub Pages
1. GitHub → **Settings → Pages → Source: Deploy from a branch → `main` / `/docs`**.
2. Haz commit y push de la raíz y de `docs/`.
3. URL: `https://Giussepedev30.github.io/portfolio/` (inglés en `/portfolio/en/`).

> `docs/` debe mantenerse sincronizado: `docs/index.html`, `docs/en/index.html`, `docs/cv.pdf` y `docs/cv-es.pdf`.

## Regenerar los CV (PDF)
```bash
node gen-cv.cjs
```
Genera `cv.pdf` (inglés) y `cv-es.pdf` (español) en la misma ejecución. Requiere `pdf-lib` (instala con `npm install pdf-lib` en la carpeta o usa el `node_modules` de `app2027`).

## Personalizar
- Foto: cambia la URL del avatar en `index.html` y `en/index.html`.
- Colores/tema: edita las clases Tailwind y los tokens de `DESIGN.md`.
- Proyectos: agrega/edita las tarjetas en la sección `#projects` de ambos idiomas.
- CV: edita el bloque `CONTENT` de `gen-cv.cjs` y regenera.
