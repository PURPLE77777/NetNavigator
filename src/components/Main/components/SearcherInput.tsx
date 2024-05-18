'use client'

import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

import Button from '@ui/button/Button'

const SearcherInput = () => {
	const { push } = useRouter()

	const inputRef = useRef<HTMLInputElement | null>(null)

	const search = async () => {
		if (inputRef.current && inputRef.current.value) {
			push(`/info/${inputRef.current.value}`)
		}
	}

	return (
		<div className='flex rounded-xl bg-gray-second p-1'>
			<div className='flex w-full rounded-xl bg-gray-first'>
				<div className='grow px-2'>
					<input
						ref={inputRef}
						placeholder='Укажите ИНН'
						className='h-full w-full bg-[transparent] outline-none'
					/>
				</div>
				<Button clickHandler={search}>
					<FaSearch size={30} />
				</Button>
			</div>
		</div>
	)
}

export default SearcherInput
