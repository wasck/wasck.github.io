// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  target: 'static',
  css: [
    '@/public/css/main.css',
    '@/public/css/scrollbar.css',
    '@/public/css/glassmorphism.css'
  ],
  tailwindcss: {
    cssPath: '@/public/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
})
