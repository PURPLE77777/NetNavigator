import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				dark: {
					first: '#17171a'
				},
				gray: {
					first: '#232325',
					second: '#2a2a2c',
					third: '#5f5f60',
					forth: '#161617'
				},
				yellow: {
					first: '#f5c400',
					second: '#c29b00'
				}
			}
		}
	},
	plugins: []
}
export default config
