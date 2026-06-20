# Portfolio Islena Polo

Portfolio en React + TypeScript + Vite preparado para GitHub Pages.

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en GitHub Pages

Si tu repositorio se llama `Portfolio`, deja en `vite.config.ts`:

```ts
base: '/Portfolio/'
```

Después:

```bash
npm run deploy
```

La web quedará en:

```txt
https://islena17.github.io/Portfolio/
```

Si usas el repositorio especial `islena17.github.io`, cambia en `vite.config.ts`:

```ts
base: '/'
```

## Personalizar

Los proyectos y skills están en:

```txt
src/data/projects.ts
```
