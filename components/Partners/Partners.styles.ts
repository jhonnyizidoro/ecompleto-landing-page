import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Medias } from '@/styles/variables'

export const PartnersElement = styled.section`
	background: ${Colors.LIGHTGRAY};
	margin: 80px 0;
	padding: 60px 15px;
	text-align: center;
`

export const PartnersLink = styled.a``

export const PartnersImage = styled(LazyLoadImage)`
	${Medias.DESKTOP} {
		height: 50px;
		margin: 0 25px;
	}

	${Medias.TABLET} {
		margin: 25px 0;
		width: 55%;
	}
`
