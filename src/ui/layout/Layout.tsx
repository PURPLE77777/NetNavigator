import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return <main className='bg-dark-first h-full w-full'>{children}</main>
}

export default Layout
