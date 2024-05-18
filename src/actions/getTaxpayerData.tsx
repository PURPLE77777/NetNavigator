'use server'

import { notFound } from 'next/navigation'

import { DataResponse } from '@Types/data.type'

const getTaxpayerData = async (id: string) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Token ' + process.env.NEXT_PUBLIC_TOKEN
		},
		body: JSON.stringify({ query: id, branch_type: 'MAIN' })
	}

	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
			...options
		})
		const data: DataResponse = await response.json()
		console.log('data', data)

		if (!data?.suggestions.length) {
			notFound()
		}
		return data.suggestions[0].data
	} catch (error) {
		console.error('Error:', error)
		throw new Error('Something went wrong')
	}
}

export default getTaxpayerData
