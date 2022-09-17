// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,

  },
  privateRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
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
        rel: 'stylesheet',type:'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      { rel: 'icon', type: 'image/png', href: './static/PageLogo.png' },
    ],
  },
  type: ['vuetify'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css'],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


})
