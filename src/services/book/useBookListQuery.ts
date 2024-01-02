import * as api from '@/apis/book'
import { bookKeys } from '@/services/queryKeys/book'
import * as type from '@/types/book'
import { UseInfiniteQueryResult, useInfiniteQuery } from '@tanstack/react-query'

export const useBookListQuery = (
  filters: type.BookListQueryModel
): UseInfiniteQueryResult<type.BookListServerModel> => {
  const PAGE_PER_NUMBER = 10

  return useInfiniteQuery(
    bookKeys.list(filters),
    ({ pageParam = 1 }) => api.fetchBookList({ ...filters, page: pageParam }),
    {
      getNextPageParam: ({ page, total }) => {
        const currentItemLengthCount = Number(page) * PAGE_PER_NUMBER < Number(total)
        const nextPage = currentItemLengthCount ? Number(page) + 1 : null
        return nextPage
      },
      select: res => {
        const lastPage = res.pages[res.pages.length - 1]
        const hasNextPage = (lastPage?.books.length || 0) === PAGE_PER_NUMBER

        if (lastPage) {
          lastPage.hasNextPage = hasNextPage
        }

        return res
      },
    }
  )
}
