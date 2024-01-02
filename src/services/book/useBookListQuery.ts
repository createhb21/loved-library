import { UseQueryResult, useQuery } from '@tanstack/react-query'

import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import { Filter, Order, StandardResponseModel } from '@/types'
import * as type from '@/types/book'

export const useBookListQuery = (
  filters: type.BookListQueryModel
): UseQueryResult<Pick<StandardResponseModel<type.BookOverviewServerModel[]>, 'data' | 'page_result'>> => {
  const reqParams = {
    ...(filters?.size && { size: filters?.size }),
    ...(filters?.page && { page: filters?.page }),
    ...(filters?.order && { order: filters?.order as Order }),
    ...(filters?.filter && { filter: filters?.filter as Filter }),
  }

  return useQuery(bookKeys.list(reqParams), () => api.fetchBookList(reqParams), {
    select: ({ data, page_result }) => ({
      data,
      page_result,
    }),
  })
}
