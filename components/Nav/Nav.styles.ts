import styled, { css } from 'styled-components'
import { Colors } from '@/styles/variables'

interface NavLinkStyles {
	color: 'blue' | 'green'
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
	padding: 20px 0;
`

export const NavContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: auto;
	max-width: 100%;
	width: 1400px;
`

export const NavLogo = styled.a`
	svg {
		fill: ${Colors.BLUE_2};
		width: 200px;
	}
`

export const NavLinks = styled.div``

export const NavLink = styled.a<NavLinkStyles>`
	${getNavLinkStyles};
	margin-left: 25px;
`
