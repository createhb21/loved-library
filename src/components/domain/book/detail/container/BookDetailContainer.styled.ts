import { Theme } from '@emotion/react'
import { css } from '@emotion/react'

export const bookDetailContainerCss = (theme: Theme) => css`
  ${theme.size.container};
  min-height: inherit;
  margin: 0 auto;
  padding: 40px 20px;
`
