import { useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ViewIcon } from '@/assets/icon'
import { DEFAULT_THUMBNAIL_IMAGE } from '@/constants'

import { BookDetailServerModel } from '@/types'

import * as S from './BookDetailResults.styled'

interface BookDetailResultsProps {
  data?: BookDetailServerModel
}

const BookDetailResults = ({ data }: BookDetailResultsProps) => {
  const handleImgError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.srcset = DEFAULT_THUMBNAIL_IMAGE
  }, [])

  return (
    <S.BookDetailResults>
      <S.ListItem>
        <S.CTAWrapper>
          <S.Image>
            <LazyLoadImage
              effect="opacity"
              src={data?.image || DEFAULT_THUMBNAIL_IMAGE}
              alt=""
              width="100%"
              height="100%"
              onError={handleImgError}
            />
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
