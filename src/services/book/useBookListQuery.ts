import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import * as type from '@/types/book'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export const useBookListQuery = (filters: type.BookListQueryModel): UseQueryResult<type.BookListServerModel> => {
  return useQuery(bookKeys.list(filters), () => api.fetchBookList(filters), {})
}
