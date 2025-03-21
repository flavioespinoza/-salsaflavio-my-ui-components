import React from 'react';
export const Popover = ({ trigger, children }) => {
    return (React.createElement("div", { className: "relative inline-block" },
        trigger,
        React.createElement("div", { className: "absolute left-0 top-full mt-2 p-4 bg-white rounded shadow" }, children)));
};
