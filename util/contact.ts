import { isMobile } from '@/util/device'

export const openWhatsApp = () => {
	const phone = '554199840610'
	const endpoint = isMobile.any() ? 'api.whatsapp.com' : 'web.whatsapp.com'

	window.open(
		`https://${endpoint}/send?phone=${phone}&text=Olá, estou no seu site e gostaria de mais informação.`
	)
}
