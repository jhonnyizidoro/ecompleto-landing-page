import { FC } from 'react'

import { HamburgerElement } from './Hamburger.styles'

interface HamburgerProps {
	isActive: boolean
	onClick: () => void
}

const Hamburger: FC<HamburgerProps> = ({ isActive, onClick }) => (
	<HamburgerElement
		type="button"
		aria-label="Abrir menu"
		isActive={isActive}
		onClick={onClick}
	/>
)

export default Hamburger
