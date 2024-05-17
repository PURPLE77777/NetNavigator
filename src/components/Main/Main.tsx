import Searcher from './components/Searcher'
import SearcherTitle from './components/SearcherTitle'

const Main = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<Searcher>
				<div className='absolute left-0 top-[-300%] flex w-full justify-center'>
					<SearcherTitle />
				</div>
			</Searcher>
		</div>
	)
}
export default Main
