import { useRef, type ChangeEvent, type FormEventHandler } from 'react'
import { ResetIcon, SearchIcon } from '@/assets/icon'

import LabelInput from '@/components/common/labelInput/LabelInput.component'
import useBoolean from '@/hooks/useBoolean'
import useInput from '@/hooks/useInput'
import { KeyOf, ValueOf } from '@/types'
import { BookListQueryModel as SearchFilter } from '@/types/book'
import * as S from './InputFilter.styled'

interface InputFilterProps {
  filters: SearchFilter
  handleApplyFilter: (name: KeyOf<SearchFilter>) => (options: ValueOf<SearchFilter>) => void
}

export const InputFilter = ({ filters, handleApplyFilter }: InputFilterProps) => {
  const [text, onTextChange, resetValue] = useInput()
  const [isBlur, toggleBlur, setBlurTrue, setBlurFalse] = useBoolean(false)
  const [isErr, toggleErr, setErrTrue, setErrFalse] = useBoolean(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const additionalExpln = filters?.filter
    ? filters?.filter === 'or'
      ? '콤마 (|)로 키워드를 구분해주세요. 최대 두개의 키워드를 입력가능해요.'
      : '슬래시 (-)로 키워드를 구분해주세요. 최대 두개의 키워드를 입력가능해요.'
    : ''

  const onSubmit: FormEventHandler<HTMLFormElement | HTMLButtonElement> = e => {
    e.preventDefault()
    setBlurTrue()

    if (text.trim() === '') {
      //   showToast({
      //     content: '앗! 입력값을 다시 확인해주세요. (공백X)',
      //   })
      resetValue()

      return
    } else {
      const hasComma = text.includes('|')
      const hasSlash = text.includes('-')

      if ((filters?.filter === 'or' && hasSlash) || (filters?.filter === 'not' && hasComma)) {
        setErrTrue()

        return
      }

      if (filters?.filter === 'or' && hasComma) {
        const isOverflowedMaxKeywordLength = text?.split('|')?.length > 2

        if (isOverflowedMaxKeywordLength) {
          setErrTrue()

          return
        }
      }

      if (filters?.filter === 'not' && hasSlash) {
        const isOverflowedMaxKeywordLength = text?.split('-')?.length > 2

        if (isOverflowedMaxKeywordLength) {
          setErrTrue()

          return
        }
      }

      setErrFalse()
      handleApplyFilter('keyword')(text)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlurFalse()
    onTextChange(e)
  }

  const onReset = () => {
    setErrFalse()
    resetValue()
  }

  return (
    <S.InputManagement onSubmit={onSubmit} onBlur={onSubmit}>
      <LabelInput
        id="keyword-input"
        label="책 키워드"
        additionalExpln={additionalExpln}
        error={isErr ? '앗! 키워드 검색 형식을 확인해주세요' : ''}
      >
        <LabelInput.Input
          ref={inputRef}
          name="bookKeyword"
          placeholder="키워드를 입력해주세요"
          value={text}
          onFocus={setBlurFalse}
          onChange={onChange}
        />
      </LabelInput>
      {text && isBlur && (
        <S.BtnsBox>
          <S.SubmitBtn type="button" onClick={onSubmit}>
            <SearchIcon />
            <span>키워드 검색</span>
          </S.SubmitBtn>
          <S.ResetBtn type="button" onClick={onReset}>
            <ResetIcon />
            <span>키워드 초기화</span>
          </S.ResetBtn>
        </S.BtnsBox>
      )}
    </S.InputManagement>
  )
}
