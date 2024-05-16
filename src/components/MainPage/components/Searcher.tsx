import SearcherInput from './SearcherInput'
import SearcherTitle from './SearcherTitle'

const Searcher = () => {
	return (
		<div className='bg-gray-second relative mx-5 box-content w-full max-w-3xl rounded-xl border-4 border-solid border-[transparent] has-[:focus]:border-[#2a2a2c]'>
			<SearcherInput />
			<div className='absolute left-0 top-[-300%] flex w-full justify-center'>
				<SearcherTitle />
			</div>
		</div>
	)
}

export default Searcher
