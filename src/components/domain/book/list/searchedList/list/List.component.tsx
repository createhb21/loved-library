import { useCallback } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BookmarkIcon, ViewIcon } from '@/assets/icon'
import { DEFAULT_THUMBNAIL_IMAGE, PATH } from '@/constants'
import Link from 'next/link'

import * as S from './List.styled'

interface ListProps {
  className?: string
  children?: React.ReactNode
}

interface ListItemProps {
  className?: string
  title: string
  subtitle: string
  image: string
  url: string
  price: string
  isbn13: string
}

export const List = ({ className, children }: ListProps) => {
  return <S.List className={className}>{children}</S.List>
}

List.Item = function ListItem({ className, title, subtitle, image, url, price, isbn13 }: ListItemProps) {
  const handleImgError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.srcset = DEFAULT_THUMBNAIL_IMAGE
  }, [])

  return (
    <S.ListItem className={className}>
      <Link href={`${PATH.DETAIL}/${isbn13}`} passHref>
        <S.AnchorWrapper>
          <S.Image>
            <LazyLoadImage
              effect="opacity"
              src={image || DEFAULT_THUMBNAIL_IMAGE}
              alt=""
              width="100%"
              height="100%"
              onError={handleImgError}
            />
          </S.Image>
          <S.DescList>
            <S.CompanyName>{subtitle}</S.CompanyName>
            <S.Title>{title}</S.Title>
            <S.FloatDesc>
              <S.IconDesc>
                <BookmarkIcon /> {price}
              </S.IconDesc>
              <S.IconDesc>
                <ViewIcon />
                {url}
              </S.IconDesc>
            </S.FloatDesc>
          </S.DescList>
        </S.AnchorWrapper>
      </Link>
    </S.ListItem>
  )
}
