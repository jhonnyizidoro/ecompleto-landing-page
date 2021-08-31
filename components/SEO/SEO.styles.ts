import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts } from '@/styles/variables'

export const SEOTitle = styled.h5`
	color: ${Colors.BLUE_3};
	font-size: 3.5rem;
	font-weight: ${Fonts.BOLD};
	margin: 150px auto 0;
	max-width: 950px;
	text-align: center;
`

export const SEOTitleGreen = styled.span`
	color: ${Colors.GREEN};
`

export const SEOTitleLarge = styled.span`
	font-size: 6rem;
`

export const SEOText = styled.p`
	color: ${Colors.GREEN};
	font-size: 1.3rem;
	margin: 25px auto 50px;
	max-width: 700px;
	text-align: center;
`

export const SEOTextBlue = styled.span`
	color: ${Colors.BLUE_3};
`

export const SEOCards = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 1;
`

export const SEOCard = styled.div`
	background: ${Colors.GREEN};
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	flex-basis: 300px;
	margin: 0 20px;
	padding: 35px 0;
	text-align: center;
`

export const SEOCardImage = styled(LazyLoadImage)`
	height: 80px;
`

export const SEOCardText = styled.div`
	color: ${Colors.WHITE};
	font-weight: ${Fonts.BOLD};
	margin-top: 15px;
`

export const SEOCardTextLarge = styled.span`
	color: ${Colors.BLUE_3};
	display: block;
	font-size: 1.2rem;
`

export const SEOImageWrapper = styled.div`
	text-align: center;
`

export const SEOImage = styled(LazyLoadImage)`
	filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.3));
	margin: -30px 450px 0 0;
	width: 450px;
`
