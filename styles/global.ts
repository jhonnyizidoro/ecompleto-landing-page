import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { Colors, Fonts } from '@/styles/variables'

const GlobalStyles = createGlobalStyle`
	${reset};

	* {
		box-sizing: border-box;
	}

	html,
	body,
	input,
	button,
	select,
	textarea {
		color: ${Colors.DARK};
		font-family: 'Ubuntu', sans-serif;
		font-size: 16px;
		font-weight: ${Fonts.REGULAR};
	}

	a {
		cursor: pointer;
		color: inherit;
		text-decoration: none;
	}
`

export default GlobalStyles
