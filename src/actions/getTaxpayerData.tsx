'use server'

import { notFound } from 'next/navigation'

import { DataResponse } from '@Types/data.type'

// var url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'
// var token = '39f9bcce46ec8df2bf22d861b68402942da8c77a'
// var query = '7707083893'

export const getTaxpayerData = async (id: string) => {
	const options = {
		method: 'POST',
		// mode: "cors",
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Token ' + process.env.NEXT_PUBLIC_TOKEN
		},
		body: JSON.stringify({ query: id, branch_type: 'MAIN' })
	}

	try {
		const response = await fetch(
			'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
			{ ...options }
		)
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
