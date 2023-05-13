export default defineNuxtRouteMiddleware((to, from) => {
  const { authUser } = useAuthStore()

  if (!authUser?.user) return navigateTo('/login')
})
