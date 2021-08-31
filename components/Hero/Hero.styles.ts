import styled from 'styled-components'
import { Colors, Fonts } from '@/styles/variables'

export const HeroElement = styled.section`
	text-align: center;
`

export const HeroMain = styled.main`
	position: relative;
`

export const HeroBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_3});
	clip-path: polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0);
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: -1;
`

export const HeroTitle = styled.h1`
	color: ${Colors.WHITE};
	font-size: 2.5rem;
	font-weight: ${Fonts.BOLD};
	padding: 80px 0 40px;
`

export const HeroTitleLarge = styled.span`
	display: block;
	font-size: 3.8rem;
`

export const HeroImage = styled.img`
	width: 800px;
`

export const HeroSubtitle = styled.h2`
	color: ${Colors.BLUE_3};
	font-size: 2.5rem;
	font-weight: ${Fonts.BOLD};
	margin: auto;
	padding: 60px 0 20px;
	width: 860px;
`

export const HeroSubtitleGreen = styled.span`
	color: ${Colors.GREEN};
`

export const HeroText = styled.p`
	color: ${Colors.BLUE_3};
	font-size: 1.3rem;
`
