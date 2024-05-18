import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return <main className='h-full w-full bg-gray-forth'>{children}</main>
}

export default Layout
