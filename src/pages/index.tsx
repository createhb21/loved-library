import { ReactElement } from 'react'
import { BookListContainer } from '@/components/domain/book/list'
import { Layout } from '@/components/public/Layout'
import type { BookListQueryModel as SearchFilter } from '@/types/book'
import { isServer } from '@/utils/common'
import type { GetServerSideProps, NextLayoutPage } from 'next'
import { useRouter } from 'next/router'

interface BookSearchPageProps {
  filter?: SearchFilter
  hasKeyword: boolean
}

const BookSearchPage: NextLayoutPage<BookSearchPageProps> = ({ filter = {} as SearchFilter, hasKeyword }) => {
  const { query } = useRouter()
  const hasKeywordOnPage = isServer() ? hasKeyword : Boolean(query?.keyword)

  return <BookListContainer staticFilters={filter} hasKeyword={hasKeywordOnPage} />
}

BookSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const hasKeyword = Boolean(query?.keyword)
  const hasFilter = query?.filter || ''

  return {
    props: {
      hasKeyword,
      filter: { ...(hasFilter && { filter: query?.filter }) },
    },
  }
}

export default BookSearchPage
