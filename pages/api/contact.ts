import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = 'C9F155E15358A6D5C028FB233B43A00DA1B5FF97E7013C03D6E45DEEF6E6FD58'
const ENDPOINT = 'https://app-cloud.ecompletoautos.com.br/api/sites/v1/'

const getAccessToken = async (): Promise<string> => {
	const tokenRes = await fetch(`${ENDPOINT}auth/token/${API_KEY}`)
	const { access_token } = await tokenRes.json()
	return access_token
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const accessToken = await getAccessToken()

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`,
	}

	const contactRes = await fetch(`${ENDPOINT}forms/contact?apiKey=${API_KEY}`, {
		headers,
		method: 'POST',
		body: JSON.stringify({
			...req.body,
			reasonContact: 1,
			text: 'Mensagem da LandingPage',
		}),
	})

	return res.status(contactRes.status).end()
}

export default handler
