// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-file-storage"],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/flag.ico" }]
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend:{
          colors:{
            ctfpalette:{
              50: '#FFF5E0',
              100: '#8DECB4',
              200: '#41B06E',
              300: '#141E46'
            }
          }
        }
      }
    }
  }
})