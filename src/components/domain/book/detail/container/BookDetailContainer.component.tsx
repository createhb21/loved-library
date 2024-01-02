import { useBookDetailQuery } from '@/services/book'

import BookDetailResults from '../bookDetailResults/BookDetailResults.component'
import * as S from './BookDetailContainer.styled'

interface BookDetailContainerProps {
  bookId: string
}

const BookDetailContainer = ({ bookId }: BookDetailContainerProps) => {
  const { data: bookDetailData } = useBookDetailQuery(bookId)

  return (
    <S.BookDetailContainer>
      <BookDetailResults data={bookDetailData} />
    </S.BookDetailContainer>
  )
}

export default BookDetailContainer
