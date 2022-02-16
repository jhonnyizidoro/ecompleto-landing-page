import { ChangeEvent, FC, FormEvent, useCallback, useRef, useState } from 'react'
import { post } from '@/util/api'

import Button from '@/components/Button'

import {
	ContactWrapper,
	ContactBackground,
	ContactBackgroundDecoration,
	ContactTitle,
	ContactText,
	ContactTextGreen,
	ContactForm,
	ContactFormTitle,
	ContactInput,
	ContactLink,
} from './Contact.styles'

const Contact: FC = () => {
	const formRef = useRef(null)
	const [link, setLink] = useState('')

	const handleSubmit = useCallback(async (event: FormEvent) => {
		event.preventDefault()

		const formElement = formRef.current as unknown as HTMLFormElement
		const inputs = formElement.querySelectorAll('input')
		const body: KeyValueObject = {}

		inputs.forEach(({ name, value }) => {
			body[name] = value
		})

		const res = await post('/api/contact', body)

		if (res.status === 201) {
			alert('Mensagem recebida com sucesso!')
		} else {
			alert(
				'Erro ao enviar contato, se o problema persistir, entre em contato pelo WhatsApp.'
			)
		}
	}, [])

	const handleSiteChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setLink(value)
	}, [])

	return (
		<ContactWrapper>
			<ContactBackground />
			<ContactBackgroundDecoration src="/images/contact/shape-1.png" alt="" />

			<ContactTitle>
				Já tem um site?
				<br />
				Ele é de alta performance?
			</ContactTitle>
			<ContactText>
				DESCUBRA AGORA!{' '}
				<ContactTextGreen>
					É só preencher o formulário e pronto, você receberá uma análise de como o seu
					site está sendo visto pelas métricas do Google.
				</ContactTextGreen>{' '}
				E o melhor, sem custo nenhum para o seu negócio.
			</ContactText>

			<ContactForm onSubmit={handleSubmit} ref={formRef}>
				<ContactFormTitle>Veja como anda a sua presença online aqui!</ContactFormTitle>
				<ContactInput
					name="name"
					aria-label="Seu nome completo"
					type="text"
					placeholder="Nome"
					required
				/>
				<ContactInput
					name="email"
					aria-label="Seu email"
					type="email"
					placeholder="E-mail"
					required
					inputMode="email"
				/>
				<ContactInput
					name="contact"
					aria-label="Seu telefone de contato"
					type="tel"
					placeholder="Telefone de contato"
					required
				/>
				<ContactInput
					name="site"
					aria-label="Seu site atual"
					type="url"
					placeholder="Seu site atual (caso tenha)"
					onChange={handleSiteChange}
				/>
				<Button type="submit" aria-label="Enviar contato" isLarge>
					Ver resultados
				</Button>
				{link && (
					<ContactLink
						target="_blank"
						rel="noopener"
						href={`https://pagespeed.web.dev/report?url=${link}`}
					>
						Clique aqui e veja a avaliação do seu site atual
					</ContactLink>
				)}
			</ContactForm>
		</ContactWrapper>
	)
}

export default Contact
