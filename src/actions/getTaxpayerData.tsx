'use server'

var url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'
var token = '39f9bcce46ec8df2bf22d861b68402942da8c77a'
var query = '7707083893'

var options = {
	method: 'POST',
	// mode: "cors",
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: 'Token ' + token
	},
	body: JSON.stringify({ query, branch_type: 'MAIN' })
}

export const getTaxpayerData = async () => {
	return await fetch(url, { ...options })
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error))
}
