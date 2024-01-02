import { Button } from '@/components/common'
import { useBookListQuery } from '@/services/book'
import { BookListQueryModel as SearchFilter } from '@/types/book'
import { NoResult } from '../searchedList/noResult/NoResult.component'
import SearchedList from '../searchedList/SearchedList.component'

import * as S from './BookListResults.styled'

interface RecruitListResultsProps {
  filters: SearchFilter
  handleResetFilter: () => void
}

const RecruitListResults = ({ filters, handleResetFilter }: RecruitListResultsProps) => {
  const { data: searchedRecruitListData } = useBookListQuery(filters)

  return (
    <S.SearchResults>
      {searchedRecruitListData?.data?.length ? (
        <SearchedList data={searchedRecruitListData?.data} />
      ) : (
        <NoResult title="찾고 있는 검색 결과가 없어요.">
          <Button css={S.resetBtn} size="md" label="필터 초기화" variant="secondary" onClick={handleResetFilter} />
        </NoResult>
      )}
      {/* {Boolean(searchedRecruitListData?.data?.length) && <Pagination pageInfo={searchedRecruitListData?.page_result} />} */}
    </S.SearchResults>
  )
}

export default RecruitListResults
