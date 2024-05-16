import SearcherInput from './SearcherInput'
import SearcherTitle from './SearcherTitle'

const Searcher = () => {
	return (
		<div className='relative bg-[#00ff00]'>
			<SearcherInput />
			<div className='absolute left-0 top-[-100%] flex w-full'>
				<SearcherTitle />
			</div>
		</div>
	)
}

export default Searcher
