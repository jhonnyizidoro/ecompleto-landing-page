import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts, Medias } from '@/styles/variables'

export const ContactWrapper = styled.section`
	padding-bottom: 30px;
	position: relative;

	${Medias.DESKTOP} {
		margin-top: -150px;
		overflow: hidden;
	}

	${Medias.TABLET} {
		padding: 50px 15px;
	}
`

export const ContactBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_3});
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: -1;

	${Medias.DESKTOP} {
		clip-path: polygon(0 0, 100% 15%, 100% 82%, 0% 100%);
	}
`

export const ContactBackgroundDecoration = styled(LazyLoadImage)`
	${Medias.DESKTOP} {
		position: absolute;
		right: -120px;
		top: 25px;
		width: 40%;
	}

	${Medias.TABLET} {
		display: none;
	}
`

export const ContactTitle = styled.div`
	color: ${Colors.WHITE};
	font-weight: ${Fonts.BOLD};
	text-align: center;

	${Medias.DESKTOP} {
		font-size: 4rem;
		padding-top: 300px;
	}

	${Medias.TABLET} {
		font-size: 2.4rem;
	}
`

export const ContactText = styled.div`
	color: ${Colors.WHITE};
	font-size: 1.3rem;
	margin: 25px auto 80px;
	text-align: center;

	${Medias.DESKTOP} {
		max-width: 700px;
	}
`

export const ContactTextGreen = styled.span`
	color: ${Colors.GREEN};
`

export const ContactForm = styled.form`
	background: ${Colors.WHITE};
	border-radius: 20px;
	box-shadow: 0 9px 16px rgba(0, 0, 0, 0.3);

	${Medias.DESKTOP} {
		margin: auto;
		padding: 50px;
		width: 500px;
	}

	${Medias.TABLET} {
		padding: 25px;
	}
`

export const ContactFormTitle = styled.div`
	color: ${Colors.BLUE_3};
	font-weight: ${Fonts.BOLD};
	margin-bottom: 35px;
	text-align: center;

	${Medias.DESKTOP} {
		font-size: 2.2rem;
	}

	${Medias.TABLET} {
		font-size: 1.7rem;
	}
`

export const ContactInput = styled.input`
	border: 1px solid ${Colors.LIGHTGRAY};
	border-radius: 4px;
	margin-bottom: 15px;
	padding: 15px;
	width: 100%;

	${Medias.DESKTOP} {
		font-size: 1.2rem;
	}
`

export const ContactLink = styled.a`
	color: ${Colors.BLUE_1};
	display: block;
	font-size: 1.1rem;
	font-weight: ${Fonts.BOLD};
	margin-top: 25px;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
`
