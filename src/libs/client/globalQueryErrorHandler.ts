import { AxiosError } from 'axios'
import { bookKeys } from '@/services/queryKeys'
import { QueryClient } from '@tanstack/react-query'

export const globalQueryErrorHandler = (err: unknown, queryClient: QueryClient) => {
  if (err instanceof AxiosError) {
    const code = err.response?.data?.code

    console.log(code)
    queryClient.invalidateQueries(bookKeys.all)
  }
}
