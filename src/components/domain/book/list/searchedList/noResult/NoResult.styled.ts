import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const NoResult = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: ${theme.color.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;

    & > h3 {
      ${theme.font.medium_15};
      color: ${theme.color.gray_60};
    }
  `}
`
