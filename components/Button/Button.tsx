import { FC, ButtonHTMLAttributes } from 'react'

import { ButtonElement } from './Button.styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLarge?: boolean
}

const Button: FC<ButtonProps> = props => <ButtonElement {...props} />

export default Button
