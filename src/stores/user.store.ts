import { User } from '../types/user.type'

export const useUserStore = defineStore('user', () => {
  const data = ref<User>()

  return { ...data }
})
