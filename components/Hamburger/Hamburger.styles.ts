import styled, { css } from 'styled-components'
import { Colors, Medias } from '@/styles/variables'

interface HamburgerStyles {
	isActive: boolean
}

const getHamburgerStyles = ({ isActive }: HamburgerStyles) => {
	if (isActive) {
		return css`
			${Medias.TABLET} {
				&::after,
				&::before {
					right: 7px;
				}

				&::before {
					top: 19px;
					transform: rotateZ(45deg);
				}

				&::after {
					bottom: 19px;
					transform: rotateZ(-45deg);
				}
			}
		`
	} else {
		return css`
			${Medias.TABLET} {
				&::after,
				&::before {
					right: 7px;
				}

				&::before {
					top: 13px;
				}

				&::after {
					bottom: 13px;
				}
			}
		`
	}
}

export const HamburgerElement = styled.button<HamburgerStyles>`
	${getHamburgerStyles};

	${Medias.DESKTOP} {
		display: none;
	}

	${Medias.TABLET} {
		background: ${Colors.BLUE_1};
		border: 0;
		border-radius: 50%;
		height: 40px;
		position: relative;
		width: 40px;

		&::after,
		&::before {
			background: ${Colors.WHITE};
			content: '';
			height: 3px;
			position: absolute;
			transition: 250ms;
			width: 25px;
		}
	}
`
