import { QueryParams } from '~types/fetch.type'
import { User } from '~types/user.type'

export const useUsersStore = defineStore('users', () => {
  const user = ref<User | null>(null)
  const query = reactive<QueryParams>({
    _fields: '',
    _limit: 1,
    _page: 1,
    _populate: '',
    _sort: '',
  })

  query._fields = 'name'
  query._limit = 1

  return {
    user,
  }
})
