import { FC } from 'react'

import {
	SEOTitle,
	SEOTitleGreen,
	SEOTitleLarge,
	SEOText,
	SEOTextBlue,
	SEOCards,
	SEOCard,
	SEOCardImage,
	SEOCardText,
	SEOCardTextLarge,
	SEOImageWrapper,
	SEOImage,
} from './SEO.styles'

const SEO: FC = () => (
	<>
		<SEOTitle>
			Sua loja com as <SEOTitleGreen>melhores</SEOTitleGreen> métricas do{' '}
			<SEOTitleLarge>Google!</SEOTitleLarge>
		</SEOTitle>

		<SEOText>
			Você sabe como funciona o sistema de buscas para o seu site? Com a presença online
			perfeita, você vende <SEOTextBlue>MUITO MAIS.</SEOTextBlue>
		</SEOText>

		<SEOCards>
			<SEOCard>
				<SEOCardImage src="/images/seo/pwa.png" alt="" />
				<SEOCardText>
					Experiência de um APP, mas <SEOCardTextLarge>sem dowload.</SEOCardTextLarge>
				</SEOCardText>
			</SEOCard>

			<SEOCard>
				<SEOCardImage src="/images/seo/seo-search-symbol.png" alt="" />
				<SEOCardText>
					A sua loja bem colocada no resultado do{' '}
					<SEOCardTextLarge>Google.</SEOCardTextLarge>
				</SEOCardText>
			</SEOCard>

			<SEOCard>
				<SEOCardImage src="/images/seo/desktop.png" alt="" />
				<SEOCardText>
					Alta performance de <SEOCardTextLarge>verdade.</SEOCardTextLarge>
				</SEOCardText>
			</SEOCard>
		</SEOCards>

		<SEOImageWrapper>
			<SEOImage src="/images/seo/logo-google.png" alt="" />
		</SEOImageWrapper>
	</>
)

export default SEO
