import React from 'react';
export const Input = (props) => {
    return React.createElement("input", { ...props, className: "border rounded px-3 py-2 w-full" });
};
