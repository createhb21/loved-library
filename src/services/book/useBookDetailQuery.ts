import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import * as type from '@/types/book'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export const useBookDetailQuery = (
  bookId: type.BookDetailQueryModel['bookId']
): UseQueryResult<type.BookDetailServerModel> => {
  return useQuery(bookKeys.detail(bookId), () => api.fetchBookDetail({ bookId }))
}
