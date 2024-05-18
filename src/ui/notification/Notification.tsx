import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface INotification {
	isShow: boolean
}

const Notification = ({
	children,
	isShow
}: PropsWithChildren<INotification>) => {
	return (
		<div className='fixed left-[50%] top-full flex justify-center'>
			<div
				className={clsx(
					'absolute top-0 overflow-hidden rounded-xl transition-[top] duration-200 ease-out',
					{ 'top-[-200px]': isShow }
				)}
			>
				{children}
			</div>
		</div>
	)
}

export default Notification
