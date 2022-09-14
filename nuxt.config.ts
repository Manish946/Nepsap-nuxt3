// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'NepSap',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
          { rel: 'icon', type: 'image/png', href: '/PageLogo.png' },
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          },
        ],
      },
      type: ['vuetify'],
      router: {
        extendRoutes(routes, resolve) {
          routes.push(
            {
              name: 'home',
              path: '/home',
              components: {
                default: resolve(__dirname, 'pages/index.vue'),
              },
            },
            {
              name: 'AboutUs',
              path: '/about',
              components: {
                default: resolve(__dirname, 'pages/AboutPage.vue'),
              },
            },
            {
              name: 'Events',
              path: '/events',
              components: {
                default: resolve(__dirname, 'pages/EventsPage.vue'),
              },
            },
            {
              name: 'Steering Committe',
              path: '/steeringCommitte',
              components: {
                default: resolve(__dirname, 'pages/SteeringCommittePage.vue'),
              },
            },
            {
              name: 'Members',
              path: '/members',
              components: {
                default: resolve(__dirname, 'pages/MembersPage.vue'),
              },
            },
            {
              name: 'Contact',
              path: '/contact',
              components: {
                default: resolve(__dirname, 'pages/ContactPage.vue'),
              },
            }
          )
        },
      },
      // Global CSS: https://go.nuxtjs.dev/config-css
      css: ['~/assets/style.css'],
    
      // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    
      // Auto import components: https://go.nuxtjs.dev/config-components
      components: true,
    
      // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
      buildModules: [
        // https://go.nuxtjs.dev/typescript
        // https://go.nuxtjs.dev/stylelint
      ],
    
      // Modules: https://go.nuxtjs.dev/config-modules
      modules: [
        // https://go.nuxtjs.dev/axios
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
       
      ],
    

    
      // PWA module configuration: https://go.nuxtjs.dev/pwa
      pwa: {
        manifest: {
          lang: 'en',
        },
      },
    
      // Content module configuration: https://go.nuxtjs.dev/config-content
    
      // Build Configuration: https://go.nuxtjs.dev/config-build
      build: {},
      server: {
        host: '0.0.0.0',
      }

})
