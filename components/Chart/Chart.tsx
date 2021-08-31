import { FC } from 'react'

import RefreshIcon from '@/assets/icons/refresh.svg'
import GoogleIcon from '@/assets/icons/google.svg'
import SEOIcon from '@/assets/icons/seo.svg'

import {
	ChartWrapper,
	ChartBackground,
	ChartBackgroundDecorationOne,
	ChartBackgroundDecorationTwo,
	ChartCards,
	ChartCard,
	ChartIcon,
	ChartCardTitle,
	ChartCardSubtitle,
	ChartTitle,
	ChartTitleGreen,
	ChartSubtitle,
	ChartContent,
	ChartText,
	ChartImageWrapper,
	ChartImage,
} from './Chart.styles'

const Chart: FC = () => (
	<ChartWrapper>
		<ChartBackground />
		<ChartBackgroundDecorationOne src="/images/chart/shape-1.png" alt="" />
		<ChartBackgroundDecorationTwo src="/images/chart/shape-2.png" alt="" />

		<ChartCards>
			<ChartCard>
				<ChartIcon>
					<RefreshIcon />
				</ChartIcon>
				<ChartCardTitle>Carregamento</ChartCardTitle>
				<ChartCardSubtitle>rápido</ChartCardSubtitle>
			</ChartCard>
			<ChartCard>
				<ChartIcon>
					<GoogleIcon />
				</ChartIcon>
				<ChartCardTitle>Resultados orgânicos</ChartCardTitle>
				<ChartCardSubtitle>no Google</ChartCardSubtitle>
			</ChartCard>
			<ChartCard>
				<ChartIcon>
					<SEOIcon />
				</ChartIcon>
				<ChartCardTitle>SEO único em cada</ChartCardTitle>
				<ChartCardSubtitle>veículo</ChartCardSubtitle>
			</ChartCard>
		</ChartCards>

		<ChartTitle>
			Resultados <ChartTitleGreen>Garantidos</ChartTitleGreen>
		</ChartTitle>
		<ChartSubtitle>
			Comprovamos tudo isso com resultados reais de nossos clientes.
		</ChartSubtitle>

		<ChartContent>
			<ChartText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
				gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
			</ChartText>
			<ChartImageWrapper>
				<ChartImage src="/images/chart/chart.png" alt="Resultados E-completo Carros" />
			</ChartImageWrapper>
		</ChartContent>
	</ChartWrapper>
)

export default Chart
