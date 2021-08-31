import styled, { css } from 'styled-components'
import { Colors, Fonts } from '@/styles/variables'
import { ButtonProps } from '@/components/Button/Button'

const getButtonStyles = ({ isLarge }: ButtonProps) => {
	if (isLarge) {
		return css`
			padding: 20px;
			width: 100%;
		`
	} else {
		return css`
			padding: 15px;
		`
	}
}

export const ButtonElement = styled.button<ButtonProps>`
	${getButtonStyles};
	background: ${Colors.GREEN};
	border: 0;
	border-radius: 6px;
	box-shadow: 0 9px 16px rgba(0, 0, 0, 0.2);
	color: ${Colors.WHITE};
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: ${Fonts.BOLD};
`
