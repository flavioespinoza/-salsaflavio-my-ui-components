import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
	return React.createElement(
		'button',
		{
			className: `rounded-full bg-gray transition text-sm p-8 ${className}`,
			...props
		},
		children
	)
}

export default Button
