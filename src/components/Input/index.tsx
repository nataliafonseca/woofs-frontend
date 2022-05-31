import { useRef, useState } from 'react'
import { InputWrapper, InputStyled, Label } from './styles'

export function Input () {
    const [isFocused, setIsFocused] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocusInput = () => {
        setIsEmpty(true)
        setIsFocused(true)
    }

    const handleBlurInput = () => {
        const inputValue = inputRef.current?.value
        setIsFocused(false)

        if(inputValue) return

        setIsEmpty(false)
    }

    const handleClickInLabel = () => {
        if(inputRef.current)
            inputRef.current.focus()
    }

    return (
        <InputWrapper isFocused={isFocused}>
            <Label 
                isEmpty={isEmpty}
                onClick={handleClickInLabel}
            >
                Nome
            </Label>
            <InputStyled 
                ref={inputRef}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
            />
        </InputWrapper>
    )
}