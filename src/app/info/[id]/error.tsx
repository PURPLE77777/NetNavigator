'use client'

import { FaRegFaceFrown } from 'react-icons/fa6'

import Button from '@ui/button/Button'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-6'>
			<div className='flex items-center gap-2'>
				<FaRegFaceFrown size={40} />
				<h2 className='text-2xl'>Something went wrong!</h2>
			</div>

			<Button clickHandler={() => reset()}>Try again</Button>
		</div>
	)
}
