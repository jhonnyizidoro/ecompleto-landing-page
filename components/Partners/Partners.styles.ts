import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors } from '@/styles/variables'

export const PartnersElement = styled.section`
	background: ${Colors.LIGHTGRAY};
	margin: 80px 0;
	padding: 60px 0;
	text-align: center;
`

export const PartnersLink = styled.a``

export const PartnersImage = styled(LazyLoadImage)`
	height: 50px;
	margin: 0 25px;
`
