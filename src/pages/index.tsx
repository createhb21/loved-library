import { ReactElement } from 'react'
import { BookListContainer } from '@/components/domain/book/list'
import { Layout } from '@/components/public/Layout'
import type { BookListQueryModel as SearchFilter } from '@/types/book'
import type { GetServerSideProps, NextLayoutPage } from 'next'

interface BookSearchPageProps {
  staticFilters?: SearchFilter
}

const BookSearchPage: NextLayoutPage = ({ staticFilters = {} as SearchFilter }: BookSearchPageProps) => {
  return <BookListContainer staticFilters={staticFilters} />
}

BookSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filter = query?.filter || ''

  return {
    props: {
      filter,
    },
  }
}

export default BookSearchPage
