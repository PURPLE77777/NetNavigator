'use client'

import { useRouter } from 'next/navigation'
import { FaRegFaceFrown } from 'react-icons/fa6'

import Button from '@ui/button/Button'

export default function NotFound() {
	const { back } = useRouter()

	return (
		<div className='flex h-full flex-col items-center justify-center gap-2'>
			<FaRegFaceFrown />
			<h2 className='text-xl font-semibold'>404 Not Found</h2>
			<p>Could not find the requested invoice.</p>
			<Button clickHandler={back}>Go Back</Button>
		</div>
	)
}
