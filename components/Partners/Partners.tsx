import { FC } from 'react'

import { PartnersElement, PartnersLink, PartnersImage } from './Partners.styles'

const Partners: FC = () => {
	const partners = [
		{
			link: 'https://www.7place.com.br/',
			image: '/images/partners/7place.png',
			name: '7place',
		},
		{
			link: 'https://www.gtocs.com.br/',
			image: '/images/partners/gto.png',
			name: 'GTO Car Specialists',
		},
		{
			link: 'https://www.autoshoppingcuritiba.com.br/',
			image: '/images/partners/autoshopping-curitiba.png',
			name: 'AutoShopping Curitiba',
		},
		{
			link: 'https://www.autowynn.com.br/',
			image: '/images/partners/autowynn.png',
			name: 'Auto Wynn',
		},
	]

	return (
		<PartnersElement>
			{partners.map(({ name, image, link }) => (
				<PartnersLink href={link} rel="noreferrer" target="_blank" key={name}>
					<PartnersImage src={image} alt={name} />
				</PartnersLink>
			))}
		</PartnersElement>
	)
}

export default Partners
