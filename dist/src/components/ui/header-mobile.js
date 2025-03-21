import React from 'react';
export default function HeaderMobile() {
    return (React.createElement("header", { className: "flex" },
        React.createElement("div", { className: "flex-1" },
            React.createElement("span", { className: "font-bold text-white" }, "Bless"),
            React.createElement("span", { className: "font-bold text-white" }, "Online")),
        React.createElement("div", { className: "flex-shrink-0" },
            React.createElement("button", { className: "font-bold text-white" }, "Menu"))));
}
