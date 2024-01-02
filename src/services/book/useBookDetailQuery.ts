import { UseQueryResult, useQuery } from '@tanstack/react-query'

import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import { StandardResponseModel } from '@/types'
import * as type from '@/types/book'

export const useBookDetailQuery = (
  bookId: type.BookDetailQueryModel['bookId']
): UseQueryResult<StandardResponseModel<type.BookDetailServerModel>> => {
  return useQuery(bookKeys.detail(bookId), () => api.fetchBookDetail({ bookId }))
}
