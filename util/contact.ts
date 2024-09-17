export const openWhatsApp = () => {
	const phone = '554199840610'
	const endpoint = 'api.whatsapp.com'

	window.open(
		`https://${endpoint}/send?phone=${phone}&text=Olá, estou no seu site e gostaria de mais informação.`
	)
}
