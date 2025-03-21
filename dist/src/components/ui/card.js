import * as React from 'react';
const CardWrapper = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `outline-stone-950/5 rounded-xl bg-white text-card-foreground shadow-md outline outline-1 ${className || ''}`, ...props })));
CardWrapper.displayName = 'CardWrapper';
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `flex flex-col space-y-1.5 p-6 ${className || ''}`, ...props })));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `text-2xl font-semibold leading-none tracking-tight ${className || ''}`, ...props })));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `text-sm text-muted-foreground ${className || ''}`, ...props })));
CardDescription.displayName = 'CardDescription';
const CardContent = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `p-6 pt-0 ${className || ''}`, ...props })));
CardContent.displayName = 'CardContent';
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { ref: ref, className: `flex items-center p-6 pt-0 ${className || ''}`, ...props })));
CardFooter.displayName = 'CardFooter';
const Card = ({ className, title, description, children, footer, height, ...props }) => {
    return (React.createElement(CardWrapper, { className: `w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${height && (typeof height === 'number' ? `h-[${height}px]` : height)} ${className || ''}`, ...props },
        React.createElement(CardHeader, null,
            title && React.createElement(CardTitle, null, title),
            description && React.createElement(CardDescription, null, description)),
        React.createElement(CardContent, null, children),
        footer && React.createElement(CardFooter, null, footer)));
};
const CardAchievement = ({ className, title, description, children, footer, height, ...props }) => {
    return (React.createElement(CardWrapper, { className: `w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${height && (typeof height === 'number' ? `h-[${height}px]` : height)} ${className || ''}`, ...props },
        React.createElement(CardContent, null, children),
        React.createElement(CardFooter, null,
            title && React.createElement(CardTitle, null, title),
            description && React.createElement(CardDescription, null, description),
            React.createElement("button", null, "Circle Icon Plus Button"))));
};
export { CardWrapper, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAchievement };
export default Card;
