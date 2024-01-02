import { ReactElement, Suspense } from 'react'
import { Layout } from '@/components/public/Layout'
import type { GetServerSideProps, NextLayoutPage } from 'next'
import dynamic from 'next/dynamic'

const BookDetailContainer = dynamic(
  () => import('@/components/domain/book/detail/container/BookDetailContainer.component'),
  { ssr: false }
)

interface BookDetailPageProps {
  bookId: string
}

const BookDetailPage: NextLayoutPage<BookDetailPageProps> = ({ bookId }: BookDetailPageProps) => {
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
