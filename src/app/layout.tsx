import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import App from '@components/App'

import Layout from '@ui/layout/Layout'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: 'NetNavigator | %s',
		default: 'NetNavigator'
	},
	description: 'Generated by create next app',
	generator: 'Next.js',
	applicationName: 'NetNavigator',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'TypeScript', 'net-navigator', 'NetNavigator'],
	authors: [{ name: 'PURPLE77777', url: 'https://github.com/PURPLE77777' }],
	creator: 'PURPLE77777',
	publisher: 'PURPLE77777',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	}
}

export const viewport: Viewport = {
	themeColor: 'black'
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<App>
					<Layout>{children}</Layout>
				</App>
			</body>
		</html>
	)
}

export default RootLayout
