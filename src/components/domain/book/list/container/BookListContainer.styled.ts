import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'

export const bookListContainerCss = (theme: Theme) => css`
  ${theme.size.container};
  min-height: inherit;
  margin: 0 auto;
  padding: 40px 0;

  @media ${theme.breakPoint.device.tablet} {
    padding: 40px 20px;
  }
`

export const A11yTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`
