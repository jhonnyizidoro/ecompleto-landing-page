import styled from 'styled-components'
import { Colors, Fonts } from '@/styles/variables'

export const ButtonElement = styled.button`
	background: ${Colors.GREEN};
	border: 0;
	border-radius: 6px;
	box-shadow: 0 9px 16px rgba(0, 0, 0, 0.2);
	color: ${Colors.WHITE};
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: ${Fonts.BOLD};
	padding: 15px;
`
