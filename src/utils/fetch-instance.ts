import { FetchInstanceOptions } from '../types/fetch.type'

export const fetchInstance = <DataT>(
  endpoint: string,
  fetchOptions?: FetchInstanceOptions
) => {
  const { getAcToken } = useAuthStore()
  const { isAuth = false, ...opts } = fetchOptions || {}

  // Check and add access token to header
  const onRequest = async ({ options }: any) => {
    if (isAuth) {
      const token = await getAcToken()

      options.headers = {
        ...options.headers,
        authorization: `Bearer ${token}`,
      }
    }
  }

  const baseURL = opts?.baseURL ?? 'https://jsonplaceholder.typicode.com'

  return $fetch<DataT>(endpoint, {
    ...opts,
    onRequest,
    baseURL,
  })
}
