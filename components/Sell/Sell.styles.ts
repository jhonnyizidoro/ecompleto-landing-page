import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts, Medias } from '@/styles/variables'

export const SellElement = styled.section`
	${Medias.DESKTOP} {
		display: flex;
		margin: auto;
		max-width: 100%;
		width: 1400px;
	}
`

export const SellImageWrapper = styled.div`
	${Medias.DESKTOP} {
		flex-grow: 1;
		padding-top: 80px;
	}

	${Medias.TABLET} {
		display: none;
	}
`

export const SellImage = styled(LazyLoadImage)`
	width: 120%;
`

export const SellContent = styled.div`
	${Medias.DESKTOP} {
		flex-shrink: 0;
		text-align: right;
	}

	${Medias.TABLET} {
		padding: 0 15px;
		text-align: center;
	}
`

export const SellTitle = styled.h3`
	color: ${Colors.BLUE_3};
	font-weight: ${Fonts.BOLD};

	${Medias.DESKTOP} {
		font-size: 1.6rem;
	}

	${Medias.TABLET} {
		font-size: 1.4rem;
	}
`

export const SellTitleLarge = styled.span`
	display: block;

	${Medias.DESKTOP} {
		font-size: 2.8rem;
	}

	${Medias.TABLET} {
		font-size: 2rem;
	}
`

export const SellSubtitle = styled.h4`
	color: ${Colors.GREEN};
	font-weight: ${Fonts.BOLD};
	margin-bottom: 30px;

	${Medias.DESKTOP} {
		font-size: 5rem;
	}

	${Medias.TABLET} {
		font-size: 4rem;
	}
`
