import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import { StandardResponseModel } from '@/types'
import * as type from '@/types/book'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export const useBookListQuery = (
  filters: type.BookListQueryModel
): UseQueryResult<Pick<StandardResponseModel<type.BookOverviewServerModel[]>, 'data' | 'page_result'>> => {
  return useQuery(bookKeys.list(filters), () => api.fetchBookList(filters), {
    select: ({ data, page_result }) => ({
      data,
      page_result,
    }),
  })
}
