# AMORCILINA 500 mg — Landing final React

Versión final en **React + Vite** de la landing romántica AMORCILINA.

## Incluye

- Diseño final conservado de la versión HTML/CSS/JS.
- Foto local incluida en `src/assets/`, no necesitas subirla a otro hosting.
- Efecto visual de la foto conservado.
- Modo noche.
- Dosis musical con reproductor de YouTube dentro de la landing.
- Botón que intenta reproducir automáticamente el video al recibir el clic del usuario.
- Prospecto con emojis en Indicaciones, Efectos secundarios, Contraindicaciones y Tratamiento.
- Cápsula digital animada en cada clic con 30 frases.
- Responsive para móvil y escritorio.
- Workflow de GitHub Pages incluido.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la URL que muestre Vite, normalmente:

```bash
http://localhost:5173
```

## Subir a GitHub Pages

1. Sube todo este proyecto al repositorio.
2. En GitHub ve a **Settings → Pages**.
3. Selecciona **GitHub Actions**.
4. Haz push a `main`.
5. Usa la URL pública para generar el QR.

> Nota técnica: los navegadores solo permiten autoplay con audio después de una acción del usuario. Por eso la canción se activa desde el botón de la landing. Si YouTube o el navegador bloquean el audio, el usuario puede tocar play dentro del reproductor o usar el enlace de respaldo.
