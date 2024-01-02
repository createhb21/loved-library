import { Suspense } from 'react'
import type { BookListQueryModel as SearchFilter } from '@/types/book'
import dynamic from 'next/dynamic'

import FilterList from '../filterList/FilterList.component'
import { useSearchFilter } from '../hooks'
import { NoResult } from '../searchedList/noResult/NoResult.component'
import * as S from './BookListContainer.styled'

const BookList = dynamic(() => import('../bookListResults/BookListResults.component'), {
  ssr: false,
})

const ListSkeleton = dynamic(() => import('../searchedList/list/List.skeleton'), {
  ssr: false,
})

interface BookListContainerProps {
  staticFilters: SearchFilter
  hasKeyword: boolean
}

function BookListContainer({ staticFilters, hasKeyword }: BookListContainerProps) {
  const { searchFilters, getFilterProps, handleResetFilter } = useSearchFilter(staticFilters)

  return (
    <S.RecruitListContainer>
      <S.A11yTitle>loved library</S.A11yTitle>
      <FilterList filters={searchFilters} {...getFilterProps()} />
      {hasKeyword ? (
        <Suspense fallback={<ListSkeleton count={6} hasTags />}>
          <BookList filters={searchFilters} handleResetFilter={handleResetFilter} />
        </Suspense>
      ) : (
        <NoResult title="앗! 필터를 선택해주세요. 찾고 싶은 책의 키워드를 입력해주세요." />
      )}
    </S.RecruitListContainer>
  )
}

export default BookListContainer
