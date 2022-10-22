export default defineNuxtRouteMiddleware((to) => {
    const user = useFirebaseUser();
    if (user) {
        return '/'
    }
    else{
        return '/login'
    }
    
  })
  