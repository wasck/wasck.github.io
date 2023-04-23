// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ['@nuxtjs/tailwindcss'],
  target: 'static',
  router: {
    base: '/wasck.github.io/'
  },
  css: [
    '@/public/css/font.css'
  ],
  tailwindcss: {
    cssPath: '@/public/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
}
