import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts, Medias } from '@/styles/variables'

export const ChartWrapper = styled.section`
	position: relative;

	${Medias.TABLET} {
		margin-top: 60px;
		padding: 15px;
	}
`

export const ChartBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_3}, ${Colors.BLUE_1});
	clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`

export const ChartBackgroundDecorationOne = styled(LazyLoadImage)`
	${Medias.DESKTOP} {
		left: -10vw;
		position: absolute;
		top: 0;
		width: 25vw;
	}

	${Medias.TABLET} {
		display: none;
	}
`

export const ChartBackgroundDecorationTwo = styled(LazyLoadImage)`
	${Medias.DESKTOP} {
		bottom: 5vw;
		position: absolute;
		right: 0;
		width: 25vw;
	}

	${Medias.TABLET} {
		display: none;
	}
`

export const ChartCards = styled.div`
	position: relative;

	${Medias.DESKTOP} {
		display: flex;
		justify-content: center;
	}
`

export const ChartCard = styled.div`
	background: ${Colors.WHITE};
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	padding: 15px 0;
	text-align: center;

	${Medias.DESKTOP} {
		flex-basis: 200px;
		margin: -15px 20px 50px;
	}

	${Medias.TABLET} {
		margin-bottom: 20px;
	}
`

export const ChartCardTitle = styled.h4`
	color: ${Colors.BLUE_3};
	font-weight: ${Fonts.BOLD};
`

export const ChartCardSubtitle = styled.h5`
	color: ${Colors.BLUE_3};
	font-size: 2rem;
	font-weight: ${Fonts.BOLD};
`

export const ChartIcon = styled.div`
	svg {
		fill: ${Colors.BLUE_1};
		height: 50px;
		width: 50px;
	}
`

export const ChartTitle = styled.h5`
	color: ${Colors.WHITE};
	font-weight: ${Fonts.BOLD};
	position: relative;
	text-align: center;

	${Medias.DESKTOP} {
		font-size: 4rem;
	}

	${Medias.TABLET} {
		font-size: 3rem;
		margin-bottom: 15px;
	}
`

export const ChartTitleGreen = styled.span`
	color: ${Colors.GREEN};
`

export const ChartSubtitle = styled.div`
	color: ${Colors.WHITE};
	font-size: 1.5rem;
	position: relative;
	text-align: center;
`

export const ChartContent = styled.div`
	position: relative;

	${Medias.DESKTOP} {
		display: flex;
		justify-content: space-between;
		margin: 80px auto 0;
		max-width: 100%;
		width: 1000px;
	}
`

export const ChartText = styled.p`
	color: ${Colors.WHITE};
	font-size: 1.3rem;
	line-height: 1.3;

	${Medias.DESKTOP} {
		width: 40%;
	}

	${Medias.TABLET} {
		margin: 40px 0;
	}
`

export const ChartImageWrapper = styled.div`
	${Medias.DESKTOP} {
		margin-bottom: -80px;
		width: 55%;
	}
`

export const ChartImage = styled(LazyLoadImage)`
	filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.3));
	width: 100%;
`
