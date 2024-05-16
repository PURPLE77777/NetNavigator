'use client'

import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

import { getTaxpayerData } from '@actions/getTaxpayerData'

const SearcherInput = () => {
	const { push } = useRouter()

	const inputRef = useRef<HTMLInputElement | null>(null)

	const search = async () => {
		if (inputRef.current) {
			console.log('Input value', inputRef.current.value)
			const data = await getTaxpayerData()
			console.log('taxpayer data:', data)
		}
	}

	return (
		<div className='border-gray-second m-1 flex overflow-hidden rounded-xl'>
			<div className='bg-gray-first flex w-full'>
				<div className='shrink grow px-2'>
					<input
						ref={inputRef}
						placeholder='Укажите ИНН'
						className='h-full w-full bg-[transparent] outline-none'
					/>
				</div>
				<button
					onClick={search}
					className='bg-yellow-first hover:bg-yellow-second block rounded-xl p-2 text-[black]'
				>
					<FaSearch size={30} />
				</button>
			</div>
		</div>
	)
}

export default SearcherInput
