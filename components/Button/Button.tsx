import { FC, ButtonHTMLAttributes } from 'react'

import { ButtonElement } from './Button.styles'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => (
	<ButtonElement {...props} />
)

export default Button
