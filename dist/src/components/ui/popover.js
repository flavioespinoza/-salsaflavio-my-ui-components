import React from 'react';
const Popover = ({ label, children, show = false }) => {
    return (React.createElement("div", { className: "group relative" },
        children,
        show && (React.createElement("div", { className: "absolute left-12 top-1/2 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-xs text-[#FFFFFF] opacity-0 transition-opacity duration-200 group-hover:opacity-100" }, label))));
};
export default Popover;
