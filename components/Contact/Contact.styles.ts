import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Colors, Fonts } from '@/styles/variables'

export const ContactWrapper = styled.section`
	margin-top: -150px;
	overflow: hidden;
	padding-bottom: 30px;
	position: relative;
`

export const ContactBackground = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_3});
	clip-path: polygon(0 0, 100% 15%, 100% 82%, 0% 100%);
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: -1;
`

export const ContactBackgroundDecoration = styled(LazyLoadImage)`
	position: absolute;
	right: -120px;
	top: 25px;
	width: 40%;
`

export const ContactTitle = styled.div`
	color: ${Colors.WHITE};
	font-size: 4rem;
	font-weight: ${Fonts.BOLD};
	padding-top: 300px;
	text-align: center;
`

export const ContactText = styled.div`
	color: ${Colors.WHITE};
	font-size: 1.3rem;
	margin: 25px auto 80px;
	max-width: 700px;
	text-align: center;
`

export const ContactTextGreen = styled.span`
	color: ${Colors.GREEN};
`

export const ContactForm = styled.form`
	background: ${Colors.WHITE};
	border-radius: 20px;
	box-shadow: 0 9px 16px rgba(0, 0, 0, 0.3);
	margin: auto;
	padding: 50px;
	width: 500px;
`

export const ContactFormTitle = styled.div`
	color: ${Colors.BLUE_3};
	font-size: 2.2rem;
	font-weight: ${Fonts.BOLD};
	margin-bottom: 35px;
	text-align: center;
`

export const ContactInput = styled.input`
	border: 1px solid ${Colors.LIGHTGRAY};
	border-radius: 4px;
	font-size: 1.2rem;
	margin-bottom: 15px;
	padding: 15px;
	width: 100%;
`
