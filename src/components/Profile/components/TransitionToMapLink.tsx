'use client'

import Link from 'next/link'
import { useState } from 'react'

import Notification from '@ui/notification/Notification'

import { TransitionToMapLinkProps } from '../types/profileProps'

const TransitionToMapLink = ({ url, address }: TransitionToMapLinkProps) => {
	const [isNotificationShow, setIsNotificationShow] = useState<boolean>(false)

	const showNotification = () => {
		setIsNotificationShow(true)
	}

	const hideNotification = () => {
		setIsNotificationShow(false)
	}

	return (
		<>
			<p>
				<b>Локация:</b>{' '}
				<span
					className='cursor-pointer hover:underline'
					onClick={showNotification}
				>
					{address}
				</span>
			</p>

			<Notification isShow={isNotificationShow}>
				<div className='flex w-[300px] flex-col gap-2 bg-gray-second p-2'>
					<div>
						<p className='text-center'>
							Вы действительно хотите перейти на внешний ресурс?
						</p>
					</div>
					<div className='flex justify-around'>
						<Link
							className='rounded-xl bg-yellow-first p-2 text-[black] hover:bg-yellow-second'
							href={url}
						>
							Перейти
						</Link>
						<button
							className='rounded-xl bg-gray-third p-2 hover:bg-gray-first'
							onClick={hideNotification}
						>
							Отмена
						</button>
					</div>
				</div>
			</Notification>
		</>
	)
}

export default TransitionToMapLink
