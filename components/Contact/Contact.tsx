import { ChangeEvent, FC, FormEvent, useState } from 'react'
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
} from './Contact.styles'

const Contact: FC = () => {
	const [formData, setFormData] = useState({
		contact: '',
		email: '',
		name: '',
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData(oldState => ({ ...oldState, [name]: value }))
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})

		if (res.status === 201) {
			alert('Mensagem recebida com sucesso!')
			setFormData({
				contact: '',
				email: '',
				name: '',
			})
		} else {
			alert(
				'Erro ao enviar contato, se o problema persistir, entre em contato pelo WhatsApp.'
			)
		}
	}

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

			<ContactForm onSubmit={handleSubmit}>
				<ContactFormTitle>Veja como anda a sua presença online aqui!</ContactFormTitle>
				<ContactInput
					name="name"
					aria-label="Seu nome completo"
					type="text"
					placeholder="Nome"
					onChange={handleChange}
					required
					value={formData.name}
				/>
				<ContactInput
					name="email"
					aria-label="Seu email"
					type="email"
					placeholder="E-mail"
					onChange={handleChange}
					required
					inputMode="email"
					value={formData.email}
				/>
				<ContactInput
					name="contact"
					aria-label="Seu telefone de contato"
					type="tel"
					placeholder="Telefone de contato"
					onChange={handleChange}
					required
					value={formData.contact}
				/>
				<Button type="submit" aria-label="Enviar contato" isLarge>
					Ver resultados
				</Button>
			</ContactForm>
		</ContactWrapper>
	)
}

export default Contact
