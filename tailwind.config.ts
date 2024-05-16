import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			dark: {
				first: '#17171a'
			},
			gray: {
				first: '#232325',
				second: '#2a2a2c',
				third: '#5f5f60'
			},
			yellow: {
				first: '#f5c400',
				second: '#f5c400'
			}
		},
		extend: {}
	},
	plugins: []
}
export default config
