import { PageTemplate } from '@/components/public/PageTemplate'
import { useBookDetailQuery } from '@/services/book'

import BookDetailResults from '../bookDetailResults/BookDetailResults.component'
import * as S from './BookDetailContainer.styled'

interface BookDetailContainerProps {
  bookId: string
}

const BookDetailContainer = ({ bookId }: BookDetailContainerProps) => {
  const { data: bookDetailData } = useBookDetailQuery(bookId)

  return (
    <PageTemplate>
      <PageTemplate.PageContentsSection css={S.bookDetailContainerCss}>
        <BookDetailResults data={bookDetailData} />
      </PageTemplate.PageContentsSection>
    </PageTemplate>
  )
}

export default BookDetailContainer
