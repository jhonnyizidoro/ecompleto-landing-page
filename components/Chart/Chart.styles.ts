import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts } from '@/styles/variables'

export const ChartWrapper = styled.section`
	position: relative;
`

export const ChartBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_3}, ${Colors.BLUE_1});
	clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
	height: 100%;
	position: absolute;
	width: 100%;
`

export const ChartBackgroundDecorationOne = styled(LazyLoadImage)`
	left: -10vw;
	position: absolute;
	top: 0;
	width: 25vw;
`

export const ChartBackgroundDecorationTwo = styled(LazyLoadImage)`
	bottom: 5vw;
	position: absolute;
	right: 0;
	width: 25vw;
`

export const ChartCards = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`

export const ChartCard = styled.div`
	background: ${Colors.WHITE};
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	flex-basis: 200px;
	margin: -15px 20px 50px;
	padding: 15px 0;
	text-align: center;
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
	font-size: 4rem;
	font-weight: ${Fonts.BOLD};
	position: relative;
	text-align: center;
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
	display: flex;
	justify-content: space-between;
	margin: 80px auto 0;
	max-width: 100%;
	position: relative;
	width: 1000px;
`

export const ChartText = styled.p`
	color: ${Colors.WHITE};
	font-size: 1.5rem;
	line-height: 2;
	width: 30%;
`

export const ChartImageWrapper = styled.div`
	margin-bottom: -80px;
	width: 65%;
`

export const ChartImage = styled(LazyLoadImage)`
	filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.3));
	width: 100%;
`
