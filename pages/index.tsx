import { FC } from 'react'

import SEO from '@/components/SEO'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Sell from '@/components/Sell'
import Chart from '@/components/Chart'

const HomePage: FC = () => (
	<>
		<SEO title="E-completo Carros" description="" keyWords="" canonical="" />
		<Nav />
		<Hero />
		<Partners />
		<Sell />
		<Chart />
	</>
)

export default HomePage
