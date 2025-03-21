import * as React from 'react';
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (React.createElement("input", { type: type, className: `shadow-inner-slate my-4 box-border flex h-[78px] w-full rounded-full border border-input bg-slate px-8 py-2 text-xl ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`, ref: ref, ...props }));
});
Input.displayName = 'Input';
export default Input;
