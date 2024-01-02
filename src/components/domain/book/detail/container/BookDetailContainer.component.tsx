import { useBookDetailQuery } from '@/services/book'
import dynamic from 'next/dynamic'

import * as S from './BookDetailContainer.styled'

const BookDetailResults = dynamic(() => import('../bookDetailResults/BookDetailResults.component'), { ssr: false })

interface BookDetailContainerProps {
  bookId: string
}

const BookDetailContainer = ({ bookId }: BookDetailContainerProps) => {
  const { data: bookDetailData } = useBookDetailQuery(bookId)
  console.log('bookDetailData:', bookDetailData)

  return (
    <S.BookDetailContainer>
      <BookDetailResults data={bookDetailData?.data} />
    </S.BookDetailContainer>
  )
}

export default BookDetailContainer
