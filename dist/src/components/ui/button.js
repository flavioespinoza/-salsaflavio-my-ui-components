import React from 'react';
export const Button = ({ children, className = '', ...props }) => {
    return (React.createElement("button", { className: `rounded-full bg-gray transition text-sm p-8 ${className}`, ...props }, children));
};
