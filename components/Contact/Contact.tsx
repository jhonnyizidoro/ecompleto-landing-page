import { FC } from 'react'
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

const Contact: FC = () => (
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
				É só preencher o formulário e pronto, você receberá uma análise de como o seu site
				está sendo visto pelas métricas do Google.
			</ContactTextGreen>{' '}
			E o melhor, sem custo nenhum para o seu negócio.
		</ContactText>

		<ContactForm>
			<ContactFormTitle>Veja como anda a sua presença online aqui!</ContactFormTitle>
			<ContactInput
				name="name"
				aria-label="Seu nome completo"
				type="text"
				placeholder="Nome"
			/>
			<ContactInput
				name="site"
				aria-label="Seu site atual"
				type="url"
				placeholder="Site"
			/>
			<ContactInput
				name="contact"
				aria-label="Seu telefone de contato"
				type="tel"
				placeholder="Telefone de contato"
			/>
			<ContactInput
				name="state"
				aria-label="Estado onde reside"
				placeholder="Seu estado"
			/>
			<Button type="submit" aria-label="Enviar contato" isLarge>
				Ver resultados
			</Button>
		</ContactForm>
	</ContactWrapper>
)

export default Contact
