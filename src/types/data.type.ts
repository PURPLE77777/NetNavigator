type MetroType = {
	name: string
	line: string
	distance: number
}

export type DataType = {
	kpp: string
	management: {
		name: string
		post: string
		disqualified: string | null
	}
	state: {
		status: string
		code: string | null
		actuality_date: number
		registration_date: number
		liquidation_date: string | null
	}
	opf: {
		type: string
		code: string
		full: string
		short: string
	}
	name: {
		full_with_opf: string
		short_with_opf: string
		latin: string | null
		full: string
		short: string
	}
	address: {
		value: string
		unrestricted_value: string
		invalidity: string | null
		data: {
			postal_code: string
			country: string
			country_iso_code: string
			federal_district: string
			region: string
			tax_office: string
			tax_office_legal: string
			timezone: string
			geo_lat: string
			geo_lon: string
			metro: MetroType[]
			source: string
		}
	}
	phones: string | null
	emails: string | null
	ogrn_date: number
	okved_type: string
	employee_count: number | null
}

export type DataResponse = {
	suggestions: {
		value: string
		data: DataType
	}[]
}
