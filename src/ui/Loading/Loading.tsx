const Loader = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<div role='status' className='w-[400px] animate-pulse'>
				<div className='bg-gray-200 dark:bg-gray-700 mb-4 h-2.5 w-48 rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 mb-2.5 h-2 max-w-[360px] rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 mb-2.5 h-2 rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 mb-2.5 h-2 max-w-[330px] rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 mb-2.5 h-2 max-w-[300px] rounded-full'></div>
				<div className='bg-gray-200 dark:bg-gray-700 h-2 max-w-[360px] rounded-full'></div>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	)
}

export default Loader
