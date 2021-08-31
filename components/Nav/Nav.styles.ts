import styled, { css } from 'styled-components'
import { Colors, Medias } from '@/styles/variables'

interface NavLinksStyles {
	isActive: boolean
}

interface NavLinkStyles {
	color: 'blue' | 'green'
}

const getNavLinksStyles = ({ isActive }: NavLinksStyles) => {
	if (!isActive) {
		return css`
			${Medias.TABLET} {
				display: none;
			}
		`
	}
}

const getNavLinkStyles = ({ color }: NavLinkStyles) => {
	if (color === 'green') {
		return css`
			color: ${Colors.GREEN};
		`
	} else {
		return css`
			color: ${Colors.BLUE_1};
		`
	}
}

export const NavElement = styled.nav`
	padding: 20px 15px;
`

export const NavContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;

	${Medias.DESKTOP} {
		margin: auto;
		max-width: 100%;
		width: 1400px;
	}
`

export const NavLogo = styled.a`
	svg {
		fill: ${Colors.BLUE_2};
	}

	${Medias.DESKTOP} {
		svg {
			width: 200px;
		}
	}

	${Medias.TABLET} {
		svg {
			width: 150px;
		}
	}
`

export const NavLinks = styled.div<NavLinksStyles>`
	${getNavLinksStyles};

	${Medias.TABLET} {
		background: ${Colors.WHITE};
		padding: 20px 0;
		position: absolute;
		right: 0;
		text-align: center;
		top: 81px;
		width: 100%;
		z-index: 1;
	}
`

export const NavLink = styled.a<NavLinkStyles>`
	${getNavLinkStyles};

	${Medias.DESKTOP} {
		margin-left: 25px;
	}

	${Medias.TABLET} {
		display: block;
		padding: 20px;
	}
`
