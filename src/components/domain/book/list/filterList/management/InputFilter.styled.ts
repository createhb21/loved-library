import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const InputManagement = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 23px;
    width: 100%;
    min-height: 52px;
    padding: 10px 20px;
    background-color: ${theme.color.gray_20_4};

    @media ${theme.breakPoint.device.maxTablet} {
      flex-direction: column;
    }
  `}
`

export const BtnsBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    right: 16px;
    display: flex;
    align-items: center;
    transform: translateY(-50%);

    @media ${theme.breakPoint.device.maxTablet} {
      position: unset;
      top: unset;
      right: unset;
      margin-top: 24px;
    }
  `}
`

export const SubmitBtn = styled.button`
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

export const ResetBtn = styled(SubmitBtn)``
