import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Si tu repositorio se llama islena17.github.io, cambia base a '/'.
// Si tu repositorio se llama Portfolio, déjalo como '/Portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'
});
