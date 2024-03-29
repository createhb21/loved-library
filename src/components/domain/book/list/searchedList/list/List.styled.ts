import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  gap: 10px;
`

export const ListItem = styled.article`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.color.gray_20};
    border-radius: 20px;
    padding: 0 2px;
    transition: 0.3s;

    @media (hover: hover) {
      &:hover {
        border-color: ${theme.color.gray_40};
      }
    }
  `}
`

export const AnchorWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 20px 18px;
`

export const Image = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

export const DescList = styled.dl`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin-top: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 4px;
`

export const TimeDesc = styled.span`
  margin-bottom: 20px;
`

export const CompanyName = styled.strong``

export const IconDesc = styled.span`
  display: flex;
  align-items: center;
  column-gap: 4px;
  width: max-content;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.font.medium_16};
    position: absolute;
    left: 0;
    bottom: 0;
    color: ${theme.color.black};
  `}
`

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    position: relative;
    display: flex;
    color: ${theme.color.gray_70};
  `}
`

export const FloatDesc = styled.span`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 8px;
    bottom: 6px;
    right: 4px;

    @media ${theme.breakPoint.device.maxDesktop} {
      bottom: unset;
      top: 16px;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }
  `}
`

export const ListItemSkeleton = styled.li`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    min-height: 112px;
    border-bottom: 1px solid ${theme.color.gray_20};
    padding: 16px 18px;
  `}
`

export const ContentSkeleton = styled.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  width: 100%;
`

export const ImageSkeleton = styled.div`
  width: 80px;
  height: 80px;
`

export const TagList = styled.ul`
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  justify-self: flex-end;
  column-gap: 8px;
  margin-top: 12px;
`

export const paddingOnSkeleton = css`
  padding: 40px 0;
`
