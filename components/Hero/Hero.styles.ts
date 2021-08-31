import styled from 'styled-components'
import { Colors, Fonts, Medias } from '@/styles/variables'

export const HeroElement = styled.section`
	text-align: center;
`

export const HeroMain = styled.main`
	position: relative;
`

export const HeroBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_3});
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: -1;

	${Medias.DESKTOP} {
		clip-path: polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0);
	}
`

export const HeroTitle = styled.h1`
	color: ${Colors.WHITE};
	font-weight: ${Fonts.BOLD};
	padding: 80px 15px 40px;

	${Medias.DESKTOP} {
		font-size: 2.5rem;
	}

	${Medias.TABLET} {
		font-size: 2rem;
	}
`

export const HeroTitleLarge = styled.span`
	display: block;

	${Medias.DESKTOP} {
		font-size: 3.8rem;
	}

	${Medias.TABLET} {
		font-size: 2.5rem;
	}
`

export const HeroImage = styled.img`
	${Medias.DESKTOP} {
		width: 800px;
	}

	${Medias.TABLET} {
		margin-bottom: -3vw;
		width: 90%;
	}
`

export const HeroSubtitle = styled.h2`
	color: ${Colors.BLUE_3};
	font-weight: ${Fonts.BOLD};
	padding: 60px 15px 20px;

	${Medias.DESKTOP} {
		font-size: 2.5rem;
		margin: auto;
		width: 860px;
	}

	${Medias.TABLET} {
		font-size: 1.5rem;
	}
`

export const HeroSubtitleGreen = styled.span`
	color: ${Colors.GREEN};
`

export const HeroText = styled.p`
	color: ${Colors.BLUE_3};
	font-size: 1.3rem;
`
