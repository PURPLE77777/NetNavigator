import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return <div className='h-full w-full bg-gray-forth'>{children}</div>
}

export default Layout
