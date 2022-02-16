import type { NextApiRequest, NextApiResponse } from 'next'
import { post } from '@/util/api'

const API_KEY = 'C9F155E15358A6D5C028FB233B43A00DA1B5FF97E7013C03D6E45DEEF6E6FD58'
const ENDPOINT = 'https://app-cloud.ecompletoautos.com.br/api/sites/v1/'

const getAccessToken = async (): Promise<string> => {
	const tokenRes = await fetch(`${ENDPOINT}auth/token/${API_KEY}`)
	const { access_token } = await tokenRes.json()
	return access_token
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const accessToken = await getAccessToken()

	const contactRes = await post(
		`${ENDPOINT}forms/genericForm?apiKey=${API_KEY}`,
		{
			...req.body,
			type: 'Contato LP vendas',
			title: 'Novo contato LP vendas',
		},
		{
			Authorization: `Bearer ${accessToken}`,
		}
	)

	return res.status(contactRes.status).end()
}

export default handler
