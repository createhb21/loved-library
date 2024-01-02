import { TagVariant } from '@/types'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface TagBtnProps {
  variant: TagVariant
}

export const TagBtn = styled.button<TagBtnProps>`
  ${({ theme, variant }) => css`
    ${variant === 'primary' && theme.tag.primary};
    ${variant === 'outline' && theme.tag.outline};
    ${variant === 'ghost' && theme.tag.ghost};

    & > span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `}
`
