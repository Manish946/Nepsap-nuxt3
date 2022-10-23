import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default defineNuxtPlugin(nuxtApp => {
    const autoAnimate = autoAnimatePlugin

    nuxtApp.vueApp.use(autoAnimate)
// createApp(App).use(autoAnimatePlugin).mount('#app')

})