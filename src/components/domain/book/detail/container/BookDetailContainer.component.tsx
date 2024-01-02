import { Suspense } from 'react'
import { useRouter } from 'next/router'

import BookDetailResults from '../bookDetailResults/BookDetailResults.component'
import * as S from './BookDetailContainer.styled'
// import { useBookDetailQuery } from '@/queries/book'

const BookDetailContainer = () => {
  const {
    query: { id },
  } = useRouter()
  // const { data: bookDetailData } = useBookDetailQuery(id as string)

  return (
    <S.BookDetailContainer>
      <Suspense>{/* <BookDetailResults data={bookDetailData?.data} /> */}</Suspense>
    </S.BookDetailContainer>
  )
}

export default BookDetailContainer
