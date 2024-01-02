import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
`

interface StyledLabelProps {
  hidden: boolean
}

export const Label = styled.label<StyledLabelProps>`
  ${({ theme, hidden = false }) => css`
    ${theme.font.medium_15};
    position: relative;
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 4px;
    color: ${theme.color.gray_70};
    ${hidden && theme.a11y.visuallyHidden};
  `}
`

export const Optional = styled.span`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    display: inline-block;
    margin-left: 2px;
    color: ${theme.color.gray_50};
  `}
`

export const TextCount = styled.span`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    display: inline-block;
    margin-left: 4px;
    color: ${theme.color.gray_50};
  `}
`

export const ValidText = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-top: 4px;
    color: ${theme.color.red_20};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.input.primary};
  `}
`

export const AdditionalExpln = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    margin-top: 4px;
    color: ${theme.color.gray_60};

    &::before {
      content: '·';
      display: inline-block;
      width: 20px;
      text-align: center;
    }
  `}
`
