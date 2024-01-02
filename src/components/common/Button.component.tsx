import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export type ButtonSize = 'xs' | 'sm' | 'smd' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  size: ButtonSize
  variant: ButtonVariant
  label: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
}

interface ButtonStyledProps {
  size: ButtonSize
  variant: ButtonVariant
}

const Button = ({ className, type = 'button', size, variant, label, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonStyled type={type} className={className} size={size} variant={variant} disabled={disabled} onClick={onClick}>
      {label}
    </ButtonStyled>
  )
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, size, variant }) => css`
    ${size === 'xs' && theme.button.size.xs}
    ${size === 'sm' && theme.button.size.sm};
    ${size === 'smd' && theme.button.size.smd};
    ${size === 'md' && theme.button.size.md};
    ${size === 'lg' && theme.button.size.lg};
    ${variant === 'primary' && theme.button.variant.primary};
    ${variant === 'secondary' && theme.button.variant.secondary};
  `}
`

export default Button
