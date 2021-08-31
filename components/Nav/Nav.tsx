import { FC } from 'react'

import Logo from '@/assets/logo.svg'

import { NavElement, NavContainer, NavLogo, NavLinks, NavLink } from './Nav.styles'

const Nav: FC = () => (
	<NavElement>
		<NavContainer>
			<NavLogo href="/">
				<Logo />
			</NavLogo>

			<NavLinks>
				<NavLink color="blue" href="/">
					Home
				</NavLink>
				<NavLink color="blue" href="/">
					Resultados
				</NavLink>
				<NavLink color="green" href="/">
					WhatsApp
				</NavLink>
			</NavLinks>
		</NavContainer>
	</NavElement>
)

export default Nav
