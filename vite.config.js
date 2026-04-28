import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lash-industry/',
  build: {
    rollupOptions: {
      input: {
  main: resolve(__dirname, 'index.html'),
  services: resolve(__dirname, 'services.html'),
  portfolio: resolve(__dirname, 'portfolio.html'),
  about: resolve(__dirname, 'about.html'),
  testimonials: resolve(__dirname, 'testimonials.html'),
  pricing: resolve(__dirname, 'pricing.html'),
  booking: resolve(__dirname, 'booking.html'),
  faq: resolve(__dirname, 'faq.html'),
  policies: resolve(__dirname, 'policies.html'),
},
    },
  },
});
