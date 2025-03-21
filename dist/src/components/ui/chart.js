import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 40 }
];
export const Chart = () => {
    return (React.createElement("div", { className: "w-full h-64" },
        React.createElement(ResponsiveContainer, null,
            React.createElement(LineChart, { data: data },
                React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
                React.createElement(XAxis, { dataKey: "name" }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Line, { type: "monotone", dataKey: "value", stroke: "#8884d8" })))));
};
