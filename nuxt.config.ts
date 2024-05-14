// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-file-storage"],
  plugins: [],
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
              50: '#DFF5FF',
              100: '#67C6E3',
              200: '#378CE7',
              300: '#5356FF'
            }
          }
        }
      }
    }
  }
})