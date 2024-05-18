import Searcher from '@components/Main/components/Searcher'

import TransitionToMapLink from './components/TransitionToMapLink'
import { ProfileProps } from './types/profileProps'

const Profile = ({ data }: ProfileProps) => {
	console.log('Profile', data)

	const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${data.address.data.geo_lat}%2C${data.address.data.geo_lon}`

	const noData = 'Нет данных'

	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div className='flex w-full max-w-3xl flex-col items-center'>
				<Searcher />
				<div className='my-5 h-[2px] w-full rounded-sm bg-gray-third'></div>
				<div className='w-full'>
					<h2 className='text-2xl'>{data.name.short_with_opf}</h2>
					<p>
						<b>Основатель:</b> {data.management.name || noData}
					</p>
					<p>
						<b>Должность:</b> {data.management.post || noData}
					</p>
					<p>
						<b>Полное наименование:</b> {data.name.full_with_opf || noData}
					</p>
					<div>
						<b>Станции метро:</b>{' '}
						<div className='inline'>
							{!!data.address.data.metro.length
								? data.address.data.metro.map((metro, i, arr) => (
										<span key={i} className='inline-flex items-center'>
											<span>
												{metro.name}, {metro.distance}км
											</span>
											{i !== arr.length - 1 && (
												<span className='mx-2 inline-block h-[18px] w-[2px] bg-gray-third' />
											)}
										</span>
									))
								: noData}
						</div>
					</div>

					<TransitionToMapLink
						url={googleMapUrl}
						address={data.address.data.source || noData}
					/>
				</div>
			</div>
		</div>
	)
}

export default Profile
