import { ResolvingMetadata } from 'next'

import Profile from '@components/Profile/Profile'

import { getTaxpayerData } from '@actions/getTaxpayerData'

import { DataType } from '@Types/data.type'
import { InfoQueryParams } from '@Types/infoQueryParams'

export const generateMetadata = async (
	{ params: { id } }: InfoQueryParams,
	parent: ResolvingMetadata
) => {
	const data = await getTaxpayerData(id)

	return {
		title: data.name.short_with_opf || id
	}
}

const ProfilePage = async ({ params: { id } }: InfoQueryParams) => {
	const data: DataType = await getTaxpayerData(id)
	return <Profile data={data} />
}

export default ProfilePage
