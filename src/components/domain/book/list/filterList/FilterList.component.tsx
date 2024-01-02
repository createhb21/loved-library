import { useMemo } from 'react'

import { filterList } from '@/constants/book'
import { KeyOf, SelectedFilterTag, ValueOf } from '@/types'
import { BookListQueryModel as SearchFilter } from '@/types/book'
import { Filter } from './Filter.component'
import * as S from './FilterList.styled'
import { FilterManagement } from './management/FilterManagement.component'
import { InputFilter } from './management/InputFilter.component'

interface FilterListProps {
  filters: SearchFilter
  handleApplyFilter: (name: KeyOf<SearchFilter>) => (options: ValueOf<SearchFilter>) => void
  handleDeleteTag: (tag: SelectedFilterTag<SearchFilter, KeyOf<SearchFilter>>) => () => void
  handleResetFilter: () => void
}

const FilterList = ({ filters, handleApplyFilter, handleDeleteTag, handleResetFilter }: FilterListProps) => {
  const selectedFilterTags = useMemo(() => {
    const result = []
    if (filters?.filter) {
      result.push({
        key: 'filter',
        value: filters.filter,
        label: filterList[filters.filter],
      })
    }
    return result
  }, [filters])

  const isShowTagManagement = selectedFilterTags.length > 0

  return (
    <S.FilterListContainer>
      <S.FilterList>
        <li>
          <Filter
            id="filter"
            name="filter"
            placeholder="필터"
            options={filterList}
            selectedOption={filters?.filter || ''}
            onSelect={handleApplyFilter('filter')}
          />
        </li>
      </S.FilterList>
      {isShowTagManagement && (
        <FilterManagement
          selectedFilterTags={selectedFilterTags}
          onDelete={handleDeleteTag}
          onReset={handleResetFilter}
        />
      )}
      {isShowTagManagement && <InputFilter handleApplyFilter={handleApplyFilter} />}
    </S.FilterListContainer>
  )
}

export default FilterList
