import { fileURLToPath, URL } from 'node:url';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

const layer = (name: string) => fileURLToPath(new URL(`./src/${name}`, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': layer('app'),
      '@pages': layer('pages'),
      '@widgets': layer('widgets'),
      '@features': layer('features'),
      '@entities': layer('entities'),
      '@shared': layer('shared'),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    eslint({
      lintOnStart: true,
      fix: true,
      include: ['**/*.{ts,tsx,js,jsx}'],
      customOverlay: false,
      cache: false,
    }),
  ],
});
