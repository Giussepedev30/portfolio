# Portafolio — Giussepe Taquiri

Portafolio web estático (HTML + Tailwind CDN) con CV en PDF, listo para GitHub Pages.

## Contenido
- `index.html` — portafolio de una sola página (Sobre mí, Skills, Proyectos, Experiencia, Educación, Contacto).
- `cv.pdf` — CV descargable (generado con `gen-cv.cjs`).
- `assets/` — recursos estáticos.

## Cómo ver localmente
Abre `index.html` en el navegador, o sirve la carpeta:

```bash
npx serve .
```

## Desplegar en GitHub Pages

### Opción A — Repositorio de usuario (recomendada)
1. Crea (o usa el existente) el repositorio `Giussepedev30.github.io` en GitHub.
2. Copia el contenido de esta carpeta a la raíz del repositorio.
3. Haz commit y push a la rama `main`.
4. En GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
5. Tu sitio estará en `https://Giussepedev30.github.io`.

### Opción B — Repositorio de proyecto
1. Crea un repo (ej. `portfolio`) y sube estos archivos.
2. Settings → Pages → Source: `main` / `/(root)`.
3. URL: `https://Giussepedev30.github.io/portfolio/`.

> Nota: si usas subcarpeta, las rutas relativas (`cv.pdf`) siguen funcionando.

## Regenerar el CV (PDF)
```bash
node gen-cv.cjs
```
Requiere `pdf-lib` (instala con `npm install pdf-lib` en la carpeta o usa el `node_modules` de `app2027`).

## Personalizar
- Foto: cambia la URL del avatar en `index.html`.
- Colores/tema: edita las clases Tailwind.
- Proyectos: agrega/edita las tarjetas en la sección `#projects`.
- CV: edita `gen-cv.cjs` y regenera.
