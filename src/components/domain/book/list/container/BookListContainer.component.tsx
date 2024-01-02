import { Suspense } from 'react'
import type { BookListQueryModel as SearchFilter } from '@/types/book'
import dynamic from 'next/dynamic'

import FilterList from '../filterList/FilterList.component'
import { useSearchFilter } from '../hooks'
import * as S from './BookListContainer.styled'

const BookList = dynamic(() => import('../bookListResults/BookListResults.component'), {
  ssr: false,
})

const ListSkeleton = dynamic(() => import('../searchedList/list/List.skeleton'), {
  ssr: false,
})

interface BookListContainerProps {
  staticFilters: SearchFilter
}

function BookListContainer({ staticFilters }: BookListContainerProps) {
  const { searchFilters, getFilterProps, handleResetFilter } = useSearchFilter(staticFilters)

  return (
    <S.RecruitListContainer>
      <S.A11yTitle>loved library</S.A11yTitle>
      <FilterList filters={searchFilters} {...getFilterProps()} />
      <Suspense fallback={<ListSkeleton count={6} hasTags />}>
        <BookList filters={searchFilters} handleResetFilter={handleResetFilter} />
      </Suspense>
    </S.RecruitListContainer>
  )
}

export default BookListContainer
