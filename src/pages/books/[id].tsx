import { ReactElement, Suspense } from 'react'
import { BookDetailContainer } from '@/components/domain/book/detail'
import { Layout } from '@/components/public/Layout'
import type { GetServerSideProps, NextLayoutPage } from 'next'

interface BookDetailPageProps {
  bookId: string
}

const BookDetailPage: NextLayoutPage = ({ bookId }: BookDetailPageProps) => {
  return (
    <Suspense>
      <BookDetailContainer bookId={bookId} />
    </Suspense>
  )
}

BookDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const bookId = query?.id || ''

  return {
    props: {
      bookId,
    },
  }
}

export default BookDetailPage
