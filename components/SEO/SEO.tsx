import { FC } from 'react'

import { Colors } from '@/styles/variables'

import Head from 'next/head'

interface SEOProps {
	title: string
	description: string
	keyWords: string
	canonical: string
}

const siteName = 'E-completo Carros'

const SEO: FC<SEOProps> = ({ title, description, keyWords, canonical }) => (
	<Head>
		<title>{title}</title>

		<meta charSet="UTF-8" />
		<meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="MobileOptimized" content="320" />
		<meta name="HandheldFriendly" content="True" />

		<meta name="description" itemProp="description" content={description} />
		<meta name="keywords" itemProp="keywords" content={keyWords} />
		<meta name="robots" content="index, follow" />
		<link rel="canonical" href={canonical} />

		<meta name="distribution" content="Global" />
		<meta name="rating" content="General" />
		<meta name="classification" content="Business" />
		<meta name="fragment" content="!" />
		<meta name="referrer" content="no-referrer-when-downgrade" />
		<meta name="google" content="notranslate" />
		<meta name="country" content="Brazil" />
		<meta name="geo.country" content="-25.480876;-49.304425" />
		<meta name="geo.region" content="BR-PR" />
		<meta name="ICBM" content="-25.480876, -49.304425" />

		<meta name="theme-color" content={Colors.BLUE} />
		<meta name="msapplication-TileColor" content={Colors.BLUE} />
		<meta name="msapplication-TileImage" content="/favicons/android-chrome-512x512.png" />

		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:locale" content="pt_BR" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={siteName} />
		<meta property="og:image" content="/favicons/android-chrome-512x512.png" />
		<meta property="og:image:secure_url" content="/favicons/android-chrome-512x512.png" />
		<meta property="og:image:alt" content={siteName} />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="512" />
		<meta property="og:image:height" content="512" />

		<meta name="twitter:title" content={title} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content="/favicons/android-chrome-512x512.png" />
		<meta name="twitter:image:src" content="/favicons/android-chrome-512x512.png" />
		<meta name="twitter:image:alt" content={siteName} />
		<meta name="twitter:image:width" content="512" />
		<meta name="twitter:image:height" content="512" />

		<link rel="manifest" href="/favicons/site.webmanifest" />
		<link rel="shortcut icon" href="/favicons/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
		<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
		<link
			href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
			rel="stylesheet"
		/>
	</Head>
)

export default SEO
