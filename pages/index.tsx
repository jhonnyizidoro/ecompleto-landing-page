import { FC } from 'react'

import Head from '@/components/Head'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Sell from '@/components/Sell'
import Chart from '@/components/Chart'
import SEO from '@/components/SEO'
import Contact from '@/components/Contact'
import Plans from '@/components/Plans'

const HomePage: FC = () => (
	<>
		<Head title="E-completo Carros" description="" keyWords="" canonical="" />
		<Nav />
		<Hero />
		<Partners />
		<Sell />
		<Chart />
		<SEO />
		<Contact />
		<Plans />
	</>
)

export default HomePage
