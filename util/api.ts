export const post = async (
	url: string,
	body: KeyValueObject,
	headers: KeyValueObject = {}
) => {
	return await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
		method: 'POST',
		body: JSON.stringify(body),
	})
}
