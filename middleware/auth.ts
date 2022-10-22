export default defineNuxtRouteMiddleware((to) => {
    const CookieUser = useCookie('CookieUser')
    const user = JSON.parse(JSON.stringify(CookieUser.value))
    const config = useRuntimeConfig();
    if (user.uid == config.ADMIN_KEY) {
      console.log('Accessed runtime config within middleware.')
    }
    else{
        console.log('Heading to', to.path, 'but I think we should go somewhere else...')
        return '/middleware'
    }
    
  })
  