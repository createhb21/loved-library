import { css } from '@emotion/react'
import { color, font } from '.'

const flexBoxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const button = {
  size: {
    xs: css`
      ${flexBoxCenter};
      ${font.medium_14};
      height: 32px;
      border-radius: 10px;
      padding: 0 12px;
    `,
    sm: css`
      ${flexBoxCenter};
      ${font.medium_14};
      height: 36px;
      border-radius: 10px;
      padding: 0 16px;
    `,
    smd: css`
      ${flexBoxCenter};
      ${font.medium_14};
      height: 40px;
      border-radius: 10px;
      padding: 0 20px;
    `,
    md: css`
      ${flexBoxCenter};
      ${font.medium_15};
      height: 44px;
      border-radius: 10px;
      padding: 0 20px;
    `,
    lg: css`
      ${flexBoxCenter};
      ${font.medium_15};
      height: 52px;
      border-radius: 10px;
      padding: 0 24px;
    `,
  },
  variant: {
    primary: css`
      color: ${color.white};
      background-color: ${color.blue_10};
      transition: 0.3s;

      @media (hover: hover) {
        &:not(:disabled):hover {
          background-color: ${color.blue_10_40};
        }
      }

      &:disabled {
        background-color: ${color.blue_20};
        opacity: 0.4;
      }
    `,
    secondary: css`
      color: ${color.gray_60};
      background-color: ${color.gray_20};
      transition: 0.3s;

      @media (hover: hover) {
        &:not(:disabled):hover {
          background-color: ${color.gray_30};
        }
      }

      &:disabled {
        background-color: ${color.gray_20};
        opacity: 0.4;
      }
    `,
    icon: css`
      ${flexBoxCenter};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid ${color.gray_20};
      background-color: ${color.white};

      @media (hover: hover) {
        &:not(:disabled):hover {
          background-color: ${color.gray_10};
        }
      }
    `,
    ghost: css`
      ${font.regular_14};
      position: relative;
      color: ${color.gray_60};

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: transparent;
        transition: 0.3s;
      }

      @media (hover: hover) {
        &:not(:disabled):hover::before {
          background-color: ${color.gray_60};
        }
      }
    `,
    link: css`
      ${font.regular_14};
      position: relative;
      height: max-content;
      color: ${color.gray_60};
      transition: 0.3s;

      &::before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${color.gray_60};
        transition: 0.3s;
      }

      @media (hover: hover) {
        &:not(:disabled):hover {
          color: ${color.black};

          &::before {
            background-color: ${color.black};
          }
        }
      }
    `,
  },
}

export type ButtonTheme = typeof button
