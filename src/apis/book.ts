import { StandardResponseModel } from '@/types'
import type * as type from '@/types/book'
import { ax } from './axios'

export const fetchBookList = async (
  req: type.BookListQueryModel
): Promise<StandardResponseModel<type.BookOverviewServerModel[]>> => {
  const res = await ax.get(`/search/${req.keyword}/${req.page || 1}`)
  return res.data
}

export const fetchBookDetail = async (
  req: type.BookDetailQueryModel
): Promise<StandardResponseModel<type.BookDetailServerModel>> => {
  const res = await ax.get(`/books/${req.bookId}`)
  return res.data
}
