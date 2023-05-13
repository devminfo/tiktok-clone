interface General {
  selectedPost: any
  ids: any
  isBackUrl: any
  posts?: any
  suggested?: any
  following?: any
}

export const useGeneralStore = defineStore(
  'general',
  () => {
    const state = reactive<General>({
      selectedPost: null,
      ids: '',
      isBackUrl: '/',
    })

    const isEditProfileOpen = ref(false)
    const isLoginOpen = ref(false)

    const openLogin = () => {
      isLoginOpen.value = true
    }

    const closeLogin = () => {
      isLoginOpen.value = false
    }

    const openEditProfile = () => {
      isEditProfileOpen.value = true
    }

    const closeEditProfile = () => {
      isEditProfileOpen.value = false
    }

    return {
      ...state,
      isLoginOpen,
      isEditProfileOpen,
      openLogin,
      closeLogin,
      openEditProfile,
      closeEditProfile,
    }
  },
  {
    persist: true,
  }
)
