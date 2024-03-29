import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const FilterManagement = styled.div`
  ${({ theme }) => css`
    display: none;
    grid-template-columns: 1fr 98px;
    justify-content: space-between;
    align-items: center;
    column-gap: 23px;
    width: 100%;
    min-height: 52px;
    padding: 10px 20px;
    background-color: ${theme.color.gray_20_4};

    @media ${theme.breakPoint.device.desktop} {
      display: grid;
    }
  `}
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
`

export const tagBtn = css`
  padding: 0 4px;
`

export const ResetBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.medium_15};
    display: flex;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    padding: 4px;
    color: ${theme.color.gray_50};
    transition: 0.3s;

    & > svg {
      fill: ${theme.color.gray_50};
      margin-right: 4px;
      transition: 0.3s;
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        color: ${theme.color.black};

        & > svg {
          fill: ${theme.color.black};
        }
      }
    }
  `}
`
