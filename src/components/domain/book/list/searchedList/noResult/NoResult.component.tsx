import type { PropsWithChildren } from 'react'
import Image from 'next/image'

import * as S from './NoResult.styled'

interface NoResultProps {
  title: string
}

export const NoResult = ({ children, title }: PropsWithChildren<NoResultProps>) => {
  return (
    <S.NoResult>
      <S.Content>
        <Image src="/images/search.png" width="52" height="52" alt="" priority />
        <h3>{title}</h3>
      </S.Content>
      {children}
    </S.NoResult>
  )
}
