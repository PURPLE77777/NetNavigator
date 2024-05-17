import { PropsWithChildren } from 'react'

interface ButtonProps {
	clickHandler?: () => void
	className?: string
}

const Button = ({
	children,
	clickHandler,
	className
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			onClick={clickHandler}
			className={
				className ||
				'block rounded-xl bg-yellow-first p-2 text-[black] hover:bg-yellow-second'
			}
		>
			{children}
		</button>
	)
}

export default Button
