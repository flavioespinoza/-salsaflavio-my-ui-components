import * as React from 'react'

const CardWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={`outline-stone-950/5 rounded-xl bg-white text-card-foreground shadow-md outline outline-1 ${className || ''}`}
			{...props}
		/>
	)
)
CardWrapper.displayName = 'CardWrapper'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props} />
	)
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}
			{...props}
		/>
	)
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={`text-sm text-muted-foreground ${className || ''}`} {...props} />
	)
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props} />
	)
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={`flex items-center p-6 pt-0 ${className || ''}`} {...props} />
	)
)
CardFooter.displayName = 'CardFooter'

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode
	description?: React.ReactNode
	footer?: React.ReactNode
	height?: string | number
}

const Card: React.FC<CardProps> = ({
	className,
	title,
	description,
	children,
	footer,
	height,
	...props
}) => {
	return (
		<CardWrapper
			className={`w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${
				height && (typeof height === 'number' ? `h-[${height}px]` : height)
			} ${className || ''}`}
			{...props}
		>
			<CardHeader>
				{title && <CardTitle>{title}</CardTitle>}
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
			{footer && <CardFooter>{footer}</CardFooter>}
		</CardWrapper>
	)
}

const CardAchievement: React.FC<CardProps> = ({
	className,
	title,
	description,
	children,
	footer,
	height,
	...props
}) => {
	return (
		<CardWrapper
			className={`w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${
				height && (typeof height === 'number' ? `h-[${height}px]` : height)
			} ${className || ''}`}
			{...props}
		>
			<CardContent>{children}</CardContent>
			<CardFooter>
				{title && <CardTitle>{title}</CardTitle>}
				{description && <CardDescription>{description}</CardDescription>}
				<button>Circle Icon Plus Button</button>
			</CardFooter>
		</CardWrapper>
	)
}

export {
	CardWrapper,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	CardAchievement
}
export default Card
