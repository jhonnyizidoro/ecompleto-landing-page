import { FC } from 'react'

import Button from '@/components/Button'

import {
	SellElement,
	SellImageWrapper,
	SellImage,
	SellContent,
	SellTitle,
	SellTitleLarge,
	SellSubtitle,
} from './Sell.styles'

const Sell: FC = () => (
	<SellElement>
		<SellImageWrapper>
			<SellImage src="/images/sell/vehicles.png" alt="" />
		</SellImageWrapper>
		<SellContent>
			<SellTitle>
				Somos especializados em sites
				<SellTitleLarge>dos mais diversos</SellTitleLarge>
			</SellTitle>
			<SellSubtitle>veículos</SellSubtitle>
			<Button type="button" aria-label="Entre em contato conosco">
				Quero vender mais
			</Button>
		</SellContent>
	</SellElement>
)

export default Sell
