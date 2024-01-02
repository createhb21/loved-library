import { css } from '@emotion/react'
import { color, font } from '.'

const flexBoxCenter = css`
  display: grid;
  grid-template-columns: minmax(0, max-content) 1fr;
  justify-content: center;
  align-items: center;
`

const tagCommon = css`
  ${font.medium_14};
  padding: 0 12px;
  transition: 0.3s;

  & > svg {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    fill: ${color.gray_50};
    transition: 0.3s;
  }
`

export const tag = {
  primary: css`
    ${flexBoxCenter};
    ${tagCommon};
    height: 32px;
    border-radius: 10px;
    color: ${color.gray_70};
    background-color: ${color.gray_40_3};

    @media (hover: hover) {
      &:not(:disabled):hover {
        color: ${color.gray_80};
        background-color: ${color.gray_40_7};

        & > svg {
          fill: ${color.gray_60};
        }
      }
    }
  `,
  outline: css`
    ${flexBoxCenter};
    ${tagCommon};
    height: 36px;
    border-radius: 10px;
    border: 1px solid ${color.gray_70};
    background-color: ${color.white};

    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${color.gray_20};
      }
    }
  `,
  ghost: css`
    ${flexBoxCenter};
    ${tagCommon};
    height: 28px;

    @media (hover: hover) {
      &:not(:disabled):hover {
        color: ${color.black};

        & > svg {
          fill: ${color.gray_80};
        }
      }
    }
  `,
}

export type TagTheme = typeof tag
