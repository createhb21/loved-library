/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type ChangeEvent, type FormEventHandler } from 'react'
import { ResetIcon, SearchIcon } from '@/assets/icon'

import LabelInput from '@/components/common/labelInput/LabelInput.component'
import useBoolean from '@/hooks/useBoolean'
import useInput from '@/hooks/useInput'
import { KeyOf, ValueOf } from '@/types'
import { BookListQueryModel as SearchFilter } from '@/types/book'
import * as S from './InputFilter.styled'

interface InputFilterProps {
  handleApplyFilter: (name: KeyOf<SearchFilter>) => (options: ValueOf<SearchFilter>) => void
}

export const InputFilter = ({ handleApplyFilter }: InputFilterProps) => {
  const [text, onTextChange, resetValue] = useInput()
  const [isBlur, _, setTrue, setFalse] = useBoolean(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setTrue()

    if (text.trim() === '') {
      //   showToast({
      //     content: '앗! 입력값을 다시 확인해주세요. (공백X, 최대 16자)',
      //   })
      resetValue()

      return
    } else {
      //   onInputSubmit(text)
      handleApplyFilter('keyword')(text)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFalse()
    onTextChange(e)
  }

  const onReset = () => {
    resetValue()
  }

  return (
    <S.InputManagement onSubmit={onSubmit} onBlur={onSubmit}>
      <LabelInput id="keyword-input" label="책 키워드">
        <LabelInput.Input
          ref={inputRef}
          name="bookKeyword"
          placeholder="키워드를 입력해주세요"
          value={text}
          onFocus={setFalse}
          onChange={onChange}
        />
      </LabelInput>
      {text && isBlur && (
        <S.BtnsBox>
          <S.SubmitBtn type="button" onClick={onReset}>
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
