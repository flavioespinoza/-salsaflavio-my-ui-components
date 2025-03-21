import React from 'react';
export const CardSection = ({ title, children }) => {
    return (React.createElement("div", { className: "border-t pt-4 mt-4" },
        React.createElement("h3", { className: "font-medium text-sm mb-2" }, title),
        children));
};
