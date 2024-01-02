import type * as type from '@/types/book'

export const bookKeys = {
  all: ['book'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (filters: type.BookListQueryModel) => [...bookKeys.lists(), { filters }] as const,
  details: () => [...bookKeys.all, 'detail'] as const,
  detail: (id: string) => [...bookKeys.details(), id] as const,
}
