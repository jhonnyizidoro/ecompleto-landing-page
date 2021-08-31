import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts } from '@/styles/variables'

export const SellElement = styled.section`
	display: flex;
	margin: auto;
	max-width: 100%;
	width: 1400px;
`

export const SellImageWrapper = styled.div`
	flex-grow: 1;
	padding-top: 80px;
`

export const SellImage = styled(LazyLoadImage)`
	width: 120%;
`

export const SellContent = styled.div`
	flex-shrink: 0;
	text-align: right;
`

export const SellTitle = styled.h3`
	color: ${Colors.BLUE_3};
	font-size: 1.6rem;
	font-weight: ${Fonts.BOLD};
`

export const SellTitleLarge = styled.span`
	display: block;
	font-size: 2.8rem;
`

export const SellSubtitle = styled.h4`
	color: ${Colors.GREEN};
	font-size: 5rem;
	font-weight: ${Fonts.BOLD};
	margin-bottom: 30px;
`
