import React from 'react';
const Button = ({ children, className = '', ...props }) => {
    return React.createElement('button', {
        className: `rounded-full bg-gray transition text-sm p-8 ${className}`,
        ...props
    }, children);
};
export default Button;
