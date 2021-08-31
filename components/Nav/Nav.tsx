import { FC, useCallback, useState } from 'react'

import Logo from '@/assets/logo.svg'
import Hamburger from '@/components/Hamburger'

import { NavElement, NavContainer, NavLogo, NavLinks, NavLink } from './Nav.styles'

const Nav: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const toggleMenu = useCallback(() => {
		setIsActive(oldState => !oldState)
	}, [setIsActive])

	return (
		<NavElement>
			<NavContainer>
				<NavLogo href="/">
					<Logo />
				</NavLogo>

				<Hamburger isActive={isActive} onClick={toggleMenu} />

				<NavLinks isActive={isActive}>
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
}

export default Nav
