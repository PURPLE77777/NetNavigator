import { PropsWithChildren } from 'react'

interface ButtonProps {
	clickHandler?: () => void
}

const Button = ({ children, clickHandler }: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			onClick={clickHandler}
			className={
				'rounded-xl bg-yellow-first p-2 text-[black] hover:bg-yellow-second'
			}
		>
			{children}
		</button>
	)
}

export default Button
