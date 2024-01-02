import type { BookOverviewServerModel } from '@/types'
import { List } from './list/List.component'

interface SearchedListProps {
  data: BookOverviewServerModel[]
}

const SearchedList = ({ data }: SearchedListProps) => {
  return (
    <List>
      {data?.map(book => (
        <li key={book.image}>{/* <List.Item title={book.title} /> */}</li>
      ))}
    </List>
  )
}

export default SearchedList
