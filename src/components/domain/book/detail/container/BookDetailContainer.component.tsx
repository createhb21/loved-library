import { Suspense } from 'react'
import { useBookDetailQuery } from '@/services/book'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import * as S from './BookDetailContainer.styled'

const BookDetailResults = dynamic(() => import('../bookDetailResults/BookDetailResults.component'), { ssr: false })

const BookDetailContainer = () => {
  const {
    query: { id },
  } = useRouter()
  const { data: bookDetailData } = useBookDetailQuery(id as string)

  return (
    <S.BookDetailContainer>
      <Suspense>
        <BookDetailResults data={bookDetailData?.data} />{' '}
      </Suspense>
    </S.BookDetailContainer>
  )
}

export default BookDetailContainer
