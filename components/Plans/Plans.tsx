import { FC } from 'react'
import { openWhatsApp } from '@/util/contact'

import Button from '@/components/Button'
import MedalIcon from '@/assets/icons/medal.svg'

import {
	PlansWrapper,
	PlansTitle,
	PlansTitleGreen,
	PlansText,
	PlansCards,
	PlansCard,
	PlansCardIcon,
	PlansCardTitle,
	PlansCardText,
	PlansCardFooter,
	PlansButtonWrapper,
} from './Plans.styles'

const Plans: FC = () => (
	<>
		<PlansTitle>
			Escolha o plano perfeito para a sua{' '}
			<PlansTitleGreen>loja de veículos.</PlansTitleGreen>
		</PlansTitle>
		<PlansText>
			Sua empresa é de grande ou pequeno porte? Bom, temos o melhor plano para qualquer
			negócio.
		</PlansText>
		<PlansWrapper>
			<PlansCards>
				<PlansCard isDark>
					<PlansCardIcon color="bronze">
						<MedalIcon />
					</PlansCardIcon>
					<PlansCardTitle>Plano sites</PlansCardTitle>
					<PlansCardText>
						Veículos ilimitados
						<br />
						30 fotos por veículos
						<br />
						Suporte
						<br />
						Aplicativo
					</PlansCardText>
				</PlansCard>

				<PlansCard>
					<PlansCardIcon color="silver">
						<MedalIcon />
					</PlansCardIcon>
					<PlansCardTitle>Plano prata</PlansCardTitle>
					<PlansCardText>
						Integração com portais
						<br />
						Armazenamento
						<br />
						Integração notas fiscais
						<br />
						Relatórios
					</PlansCardText>
					<PlansCardFooter>MAIS VENDIDO</PlansCardFooter>
				</PlansCard>

				<PlansCard isDark>
					<PlansCardIcon color="gold">
						<MedalIcon />
					</PlansCardIcon>
					<PlansCardTitle>Plano ouro</PlansCardTitle>
					<PlansCardText>
						Financeiro
						<br />
						Gestão
						<br />
						Anexos ilimitados
						<br />
						Franquia maior de visualização
					</PlansCardText>
				</PlansCard>
			</PlansCards>

			<PlansButtonWrapper>
				<Button
					type="button"
					aria-label="Entre em contato"
					isLarge
					onClick={openWhatsApp}
				>
					Falar com um <br />
					especialista
				</Button>
			</PlansButtonWrapper>
		</PlansWrapper>
	</>
)

export default Plans
