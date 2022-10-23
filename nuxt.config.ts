// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    ADMIN_KEY: process.env.ADMIN_KEY
  },
  privateRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    ADMIN_KEY: process.env.ADMIN_KEY
  }
  ,
  meta: {
    title: 'NepSap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
      rel:"stylesheet",
      href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }
      ,
      { rel: 'icon', type: 'image/png', href: '/PageLogo.png' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/globalstyle.css' },
    ],
  },
  type: ['vuetify'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vuetify/lib/styles/main.sass"],
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        }
    },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true



})
