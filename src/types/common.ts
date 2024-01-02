export interface PageInfo {
  total_elements: number
  total_pages: number
  page: number
  size: number
  is_first: boolean
  is_last: boolean
}

export interface Status {
  status: number
  status_name: string
}

export interface StandardResponseModel<T> extends Status {
  data: T
  page_result: PageInfo
}

export type KeyOf<T> = keyof T
export type ValueOf<T> = T[keyof T]
export type IndexOf<T, K extends KeyOf<T>> = ValueOf<T[K]>

export interface SelectedFilterTag<T, K extends keyof T> {
  key: K
  value: T[K] extends Array<IndexOf<T, K>> ? T[K][number] : T[K]
  label: string
}

export type TagVariant = 'primary' | 'outline' | 'ghost'
