import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'A', value: 24 },
    { name: 'B', value: 18 },
    { name: 'C', value: 32 }
];
export const ChartBar = () => {
    return (React.createElement("div", { className: "w-full h-64" },
        React.createElement(ResponsiveContainer, null,
            React.createElement(BarChart, { data: data },
                React.createElement(XAxis, { dataKey: "name" }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Bar, { dataKey: "value", fill: "#4f46e5" })))));
};
