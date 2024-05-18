import { PropsWithChildren } from 'react'

import SearcherInput from './SearcherInput'

const Searcher = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative mx-5 box-content w-full max-w-3xl rounded-xl p-1 has-[:focus]:bg-gray-second'>
			<SearcherInput />
			{children}
		</div>
	)
}

export default Searcher
