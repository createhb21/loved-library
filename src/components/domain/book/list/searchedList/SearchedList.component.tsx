import type { BookOverviewServerModel } from '@/types'
import { List } from './list/List.component'

interface SearchedListProps {
  data: BookOverviewServerModel[]
}

const SearchedList = ({ data }: SearchedListProps) => {
  return (
    <List>
      {data?.map(book => (
        <li key={book.isbn13}>
          <List.Item
            title={book.title}
            subtitle={book.subtitle}
            image={book.image}
            url={book.url}
            price={book.price}
            isbn13={book.isbn13}
          />
        </li>
      ))}
    </List>
  )
}

export default SearchedList
