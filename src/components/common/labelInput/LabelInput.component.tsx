import { createContext, useContext, useMemo, forwardRef, ForwardedRef, HTMLInputTypeAttribute } from 'react'

import * as S from './LabelInput.styled'

interface LabelInputProps {
  id: string
  className?: string
  label: string
  error?: string
  additionalExpln?: string
  labelHidden?: boolean
  errorHidden?: boolean
  optional?: boolean
  valueLength?: { length: number; maxLength: number }
  children?: React.ReactNode
}

interface InputProps {
  type?: HTMLInputTypeAttribute
  name: string
  disabled?: boolean
  placeholder: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

interface LabelInputContextValue {
  id: string
  title: string
  required: boolean
  isError: boolean
}

const LabelInputContext = createContext({} as LabelInputContextValue)

const LabelInput = ({
  id,
  className,
  label,
  error,
  additionalExpln,
  labelHidden = false,
  errorHidden = false,
  optional = false,
  valueLength,
  children,
}: LabelInputProps) => {
  const isShowValidError = !errorHidden && error
  const providerValue = useMemo(
    () => ({ id, title: label, required: !optional, isError: Boolean(error) }),
    [error, id, label, optional]
  )

  return (
    <LabelInputContext.Provider value={providerValue}>
      <S.Wrapper className={className}>
        <S.Label htmlFor={id} hidden={labelHidden}>
          {label}
          {optional && <S.Optional>(선택)</S.Optional>}
          {valueLength && (
            <S.TextCount>
              ({valueLength.length}/{valueLength.maxLength})
            </S.TextCount>
          )}
        </S.Label>
        {children}
        {additionalExpln && <S.AdditionalExpln>{additionalExpln}</S.AdditionalExpln>}
        {isShowValidError && (
          <S.ValidText id={`${id}-errMsg`} role="alert">
            {error}
          </S.ValidText>
        )}
      </S.Wrapper>
    </LabelInputContext.Provider>
  )
}

LabelInput.Input = forwardRef(function Input(
  { type = 'text', name, disabled = false, placeholder, value, onChange, onBlur, onFocus }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { id, required, isError } = useContext(LabelInputContext)

  return (
    <S.Input
      ref={ref}
      id={id}
      type={type}
      aria-required={required ? 'true' : 'false'}
      aria-invalid={isError ? 'true' : 'false'}
      aria-errormessage={`${id}-errMsg`}
      name={name}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  )
})

export default LabelInput
