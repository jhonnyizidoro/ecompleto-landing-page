import styled, { css } from 'styled-components'
import { Colors, Fonts, Medias } from '@/styles/variables'

interface PlansCardStyles {
	isDark?: boolean
}

interface PlansCardIconStyles {
	color: 'bronze' | 'silver' | 'gold'
}

const getPlansCardStyles = ({ isDark }: PlansCardStyles) => {
	if (isDark) {
		return css`
			background: ${Colors.BLACK};
			color: ${Colors.BLUE_1};
		`
	} else {
		return css`
			background: ${Colors.BLUE_2};
			color: ${Colors.WHITE};
		`
	}
}

const getPlansCardIconStyles = ({ color }: PlansCardIconStyles) => {
	if (color === 'gold') {
		return css`
			svg {
				fill: ${Colors.GOLD};
			}
		`
	} else if (color === 'silver') {
		return css`
			svg {
				fill: ${Colors.SILVER};
			}
		`
	} else if (color === 'bronze') {
		return css`
			svg {
				fill: ${Colors.BRONZE};
			}
		`
	}
}

export const PlansWrapper = styled.div`
	${Medias.DESKTOP} {
		background: linear-gradient(
			to bottom,
			transparent,
			transparent 200px,
			${Colors.BLUE_3} 200px,
			${Colors.BLUE_1}
		);
	}
`

export const PlansTitle = styled.h5`
	color: ${Colors.BLUE_3};
	font-weight: ${Fonts.BOLD};
	text-align: center;

	${Medias.DESKTOP} {
		font-size: 3.5rem;
		margin: 150px auto 0;
		max-width: 950px;
	}

	${Medias.TABLET} {
		font-size: 1.6rem;
		margin: 100px 0 15px;
		padding: 0 15px;
	}
`

export const PlansTitleGreen = styled.span`
	color: ${Colors.GREEN};
`

export const PlansText = styled.p`
	color: ${Colors.BLUE_3};
	text-align: center;

	${Medias.DESKTOP} {
		font-size: 1.3rem;
		margin: 25px auto 80px;
		max-width: 600px;
	}

	${Medias.TABLET} {
		padding: 0 15px;
	}
`

export const PlansCards = styled.div`
	${Medias.DESKTOP} {
		align-items: flex-end;
		display: flex;
		justify-content: center;
	}

	${Medias.MOBILE} {
		padding: 0 15px;
	}
`

export const PlansCard = styled.div<PlansCardStyles>`
	${getPlansCardStyles};
	border-radius: 20px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	padding: 25px;
	position: relative;

	${Medias.DESKTOP} {
		flex-basis: 280px;
		margin: 0 30px;
	}

	${Medias.MOBILE} {
		margin: 25px 0;
	}
`

export const PlansCardIcon = styled.div<PlansCardIconStyles>`
	${getPlansCardIconStyles};
	position: absolute;
	top: -20px;

	svg {
		width: 50px;
	}

	${Medias.DESKTOP} {
		right: -20px;
	}

	${Medias.MOBILE} {
		right: 10px;
	}
`

export const PlansCardTitle = styled.div`
	font-size: 1.3rem;
	margin-bottom: 25px;
	text-transform: uppercase;
`

export const PlansCardText = styled.p`
	color: ${Colors.WHITE};
	line-height: 2;
`

export const PlansCardFooter = styled.div`
	border-top: 1px solid ${Colors.WHITE};
	font-size: 1.5rem;
	margin-top: 25px;
	padding-top: 25px;
	text-align: center;
`

export const PlansButtonWrapper = styled.div`
	text-align: center;

	${Medias.DESKTOP} {
		margin: auto;
		max-width: 400px;
		padding: 200px 0;
	}

	${Medias.MOBILE} {
		padding: 50px 15px;
	}
`
