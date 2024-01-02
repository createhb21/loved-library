import { Button } from '@/components/common'
import { DEFAULT_THUMBNAIL_IMAGE } from '@/constants'

// import { RecruitDetail } from '@/types'
import NextImage from 'next/image'
import Link from 'next/link'

import * as S from './BookDetailResults.styled'
// import { ViewIcon } from '@/assets/icons'
// import { getCurrentDateTime } from '@/utils/getCurrentDateTime'

interface BookDetailResultsProps {
  // data?: RecruitDetail
}

const BookDetailResults = () => {
  // const secondDepthPositions = data?.position_arr?.reduce((acc, cur) => {
  //   return [...acc, cur?.task?.sub_task_arr?.join(',')]
  // }, [] as string[])

  return (
    <S.BookDetailResults>
      <S.ListItem>
        <S.CTAWrapper>
          {/* <S.Image>
            <NextImage src={data?.company?.logo_url || DEFAULT_THUMBNAIL_IMAGE} alt="" fill />
          </S.Image>
          <S.DescList>
            <S.TimeDesc>
              {getCurrentDateTime(data?.start_time)}~{getCurrentDateTime(data?.end_time)}
            </S.TimeDesc>
            <S.CompanyName>{data?.company?.name}</S.CompanyName>
            <S.Title>{data?.title}</S.Title>
            <S.IconDesc>
              <ViewIcon />
              {data?.view}
            </S.IconDesc>
            <Link href={data?.apply_url || '/jd/list'} target="_blank" rel="noopener noreferrer">
              <Button css={S.recruitButton} size="smd" label="지원하기" variant="secondary" />
            </Link>
          </S.DescList> */}
        </S.CTAWrapper>
      </S.ListItem>
      <S.OneDepthPositionList>
        {/* {data?.position_arr?.map(item => {
          return (
            <S.OneDepthPosition key={item?.id}>
              <Button size="xs" label={item?.task?.main_task} variant="primary" />
            </S.OneDepthPosition>
          )
        })} */}
      </S.OneDepthPositionList>
      <S.SecondDepthPositionList>
        {/* {secondDepthPositions?.map((item, idx) => {
          return (
            <S.SecondDepthPosition key={idx}>
              <Button size="xs" label={item !== '' ? item : '없음'} variant="secondary" />
            </S.SecondDepthPosition>
          );
        })} */}
      </S.SecondDepthPositionList>
    </S.BookDetailResults>
  )
}

export default BookDetailResults
