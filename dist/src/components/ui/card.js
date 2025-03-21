import React from 'react';
export const Card = ({ title, children }) => {
    return (React.createElement("div", { className: "p-6 bg-white rounded-xl shadow" },
        React.createElement("h2", { className: "text-lg font-semibold mb-2" }, title),
        React.createElement("div", null, children)));
};
