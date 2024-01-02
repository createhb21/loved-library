import { useMemo } from 'react'
import { Button, IntersectionArea } from '@/components/common'
import { useBookListQuery } from '@/services/book'
import { BookOverviewServerModel, BookListQueryModel as SearchFilter } from '@/types/book'
import { NoResult } from '../searchedList/noResult/NoResult.component'
import SearchedList from '../searchedList/SearchedList.component'

import * as S from './BookListResults.styled'

interface RecruitListResultsProps {
  filters: SearchFilter
  handleResetFilter: () => void
}

const RecruitListResults = ({ filters, handleResetFilter }: RecruitListResultsProps) => {
  const { data: searchedBookListData, hasNextPage, isFetchingNextPage, fetchNextPage } = useBookListQuery(filters)

  const books: BookOverviewServerModel[] = useMemo(
    () => (searchedBookListData ? searchedBookListData.pages.flatMap(data => data.books) : []),
    [searchedBookListData]
  )

  const shouldFetchNextPage = !isFetchingNextPage && hasNextPage

  return (
    <S.SearchResults>
      {books?.length ? (
        <SearchedList data={books} />
      ) : (
        <NoResult title="찾고 있는 검색 결과가 없어요.">
          <Button css={S.resetBtn} size="md" label="필터 초기화" variant="secondary" onClick={handleResetFilter} />
        </NoResult>
      )}
      {shouldFetchNextPage && <IntersectionArea hasMore={Boolean(hasNextPage)} onImpression={fetchNextPage} />}
    </S.SearchResults>
  )
}

export default RecruitListResults
