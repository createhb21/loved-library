import type * as type from '@/types/book'
import { ax } from './axios'

export const fetchBookList = async (req: type.BookListQueryModel) => {
  const res = await ax.get<Promise<type.BookListServerModel>>(`/search/${req.keyword}/${req.page || 1}`)
  return res.data
}

export const fetchBookDetail = async (req: type.BookDetailQueryModel) => {
  const res = await ax.get<Promise<type.BookDetailServerModel>>(`/books/${req.bookId}`)
  return res.data
}
