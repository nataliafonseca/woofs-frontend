import { InputHTMLAttributes, ReactNode, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { InputWrapper, InputStyled, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: string;
    icon?: ReactNode;
}

export function Input ({ label, type, icon, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [passwordInputType, setPasswordInputType] = useState(type)

    const inputRef = useRef<HTMLInputElement>(null)
    const isPasswordInput = type === 'password'

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

    const showPassword = () => {
        setPasswordInputType('text')
    }

    const hidePassword = () => {
        setPasswordInputType('password')
    }

    return (
        <InputWrapper isFocused={isFocused}>
            <Label 
                isEmpty={isEmpty}
                onClick={handleClickInLabel}
            >
                {label}
            </Label>
            <InputStyled 
                ref={inputRef}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
                type={passwordInputType}
                {...rest}
            />

            {isPasswordInput && (
                passwordInputType === 'password' 
                ? <FaEyeSlash onClick={showPassword} />
                : <FaEye onClick={hidePassword} />
            )}

            {icon}
        </InputWrapper>
    )
}