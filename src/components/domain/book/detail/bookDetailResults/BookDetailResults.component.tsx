import { ViewIcon } from '@/assets/icon'
import { DEFAULT_THUMBNAIL_IMAGE } from '@/constants'

import { BookDetailServerModel } from '@/types'
import NextImage from 'next/image'

import * as S from './BookDetailResults.styled'

interface BookDetailResultsProps {
  data?: BookDetailServerModel
}

const BookDetailResults = ({ data }: BookDetailResultsProps) => {
  return (
    <S.BookDetailResults>
      <S.ListItem>
        <S.CTAWrapper>
          <S.Image>
            <NextImage src={data?.image || DEFAULT_THUMBNAIL_IMAGE} alt="" fill />
          </S.Image>
          <S.DescList>
            <S.AuthorsDesc>{data?.authors}</S.AuthorsDesc>
            <S.PublisherName>{data?.publisher}</S.PublisherName>
            <S.Title>{data?.title}</S.Title>
            <S.IconDesc>
              <ViewIcon />
              {data?.rating}
            </S.IconDesc>
          </S.DescList>
        </S.CTAWrapper>
      </S.ListItem>
      <S.Description>{data?.desc}</S.Description>
    </S.BookDetailResults>
  )
}

export default BookDetailResults
