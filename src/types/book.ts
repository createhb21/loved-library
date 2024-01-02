export interface BookOverviewServerModel {
  title: string
  subtitle: string
  image: string
  url: string
}

export interface BookDetailServerModel {
  id: number
  title: string
  subtitle: string
  authors: string
  publisher: string
  pages: string
  rating: string
  desc: string
  image: string
}

export interface BookListQueryModel {
  order?: Order
  filter?: Filter
  page?: number
  size?: number
}

export interface BookDetailQueryModel {
  bookId: string
}

export type Order = 'recent' | 'end' | 'popular' | 'view' | 'rand'
export type Filter = 'valid' | 'expired' | 'todayUpload' | 'almostDeadline' | 'deadline'
