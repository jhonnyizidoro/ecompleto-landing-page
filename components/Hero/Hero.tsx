import { FC } from 'react'

import {
	HeroElement,
	HeroMain,
	HeroBackground,
	HeroTitle,
	HeroTitleLarge,
	HeroImage,
	HeroSubtitle,
	HeroSubtitleGreen,
	HeroText,
} from './Hero.styles'

const Hero: FC = () => (
	<HeroElement>
		<HeroMain>
			<HeroBackground />
			<HeroTitle>
				Quer o melhor site do mercado?
				<HeroTitleLarge>Nós vamos te ajudar!</HeroTitleLarge>
			</HeroTitle>
			<HeroImage
				src="/images/hero/site-devices.png"
				alt="Site ShiftCar na versão mobile e desktop"
			/>
		</HeroMain>
		<HeroSubtitle>
			Tenha a sua loja em destaque nos buscadores e aumente em até
			<HeroSubtitleGreen> 3X os acessos diários</HeroSubtitleGreen>
		</HeroSubtitle>
		<HeroText>
			Com a nossa indexação a sua loja aparece bem colocada nos resultados de busca
		</HeroText>
	</HeroElement>
)

export default Hero
