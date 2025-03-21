'use client';
import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' };
const ChartContext = React.createContext(null);
function useChart() {
    const context = React.useContext(ChartContext);
    if (!context) {
        throw new Error('useChart must be used within a <ChartContainer />');
    }
    return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;
    return (React.createElement(ChartContext.Provider, { value: { config } },
        React.createElement("div", { "data-chart": chartId, ref: ref, className: `[&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-sector[stroke='#fff']]:stroke-transparent flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none ${className || ''}`, ...props },
            React.createElement(ChartStyle, { id: chartId, config: config }),
            React.createElement(RechartsPrimitive.ResponsiveContainer, null, children))));
});
ChartContainer.displayName = 'Chart';
const ChartStyle = ({ id, config }) => {
    const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES)
                .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                .map(([key, itemConfig]) => {
                const color = itemConfig.theme?.[theme] || itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
            })
                .join('\n')}
}
`)
                .join('\n')
        } }));
};
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(({ active, payload, className, indicator = 'dot', hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || item.dataKey || item.name || 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === 'string'
            ? config[label]?.label || label
            : itemConfig?.label;
        if (labelFormatter) {
            return (React.createElement("div", { className: `font-medium ${labelClassName || ''}` }, labelFormatter(value, payload)));
        }
        if (!value) {
            return null;
        }
        return React.createElement("div", { className: `font-medium ${labelClassName || ''}` }, value);
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== 'dot';
    return (React.createElement("div", { ref: ref, className: `grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl ${className || ''}` },
        !nestLabel ? tooltipLabel : null,
        React.createElement("div", { className: "grid gap-1.5" }, payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return (React.createElement("div", { key: item.dataKey, className: `flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground ${indicator === 'dot' ? 'items-center' : ''}` }, formatter && item?.value !== undefined && item.name ? (formatter(item.value, item.name, item, index, item.payload)) : (React.createElement(React.Fragment, null,
                itemConfig?.icon ? (React.createElement(itemConfig.icon, null)) : (!hideIndicator && (React.createElement("div", { className: `shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] ${indicator === 'dot' ? 'h-2.5 w-2.5' : ''} ${indicator === 'line' ? 'w-1' : ''} ${indicator === 'dashed'
                        ? 'bg-transparent w-0 border-[1.5px] border-dashed'
                        : ''} ${nestLabel && indicator === 'dashed' ? 'my-0.5' : ''}`, style: {
                        '--color-bg': indicatorColor,
                        '--color-border': indicatorColor
                    } }))),
                React.createElement("div", { className: `flex flex-1 justify-between leading-none ${nestLabel ? 'items-end' : 'items-center'}` },
                    React.createElement("div", { className: "grid gap-1.5" },
                        nestLabel ? tooltipLabel : null,
                        React.createElement("span", { className: "text-muted-foreground" }, itemConfig?.label || item.name)),
                    item.value && (React.createElement("span", { className: "font-mono font-medium tabular-nums text-foreground" }, item.value.toLocaleString())))))));
        }))));
});
ChartTooltipContent.displayName = 'ChartTooltip';
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forwardRef(({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return (React.createElement("div", { ref: ref, className: `flex items-center justify-center gap-4 ${verticalAlign === 'top' ? 'pb-3' : 'pt-3'} ${className || ''}` }, payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return (React.createElement("div", { key: item.value, className: "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground" },
            itemConfig?.icon && !hideIcon ? (React.createElement(itemConfig.icon, null)) : (React.createElement("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: {
                    backgroundColor: item.color
                } })),
            itemConfig?.label));
    })));
});
ChartLegendContent.displayName = 'ChartLegend';
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== 'object' || payload === null) {
        return undefined;
    }
    const payloadPayload = 'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
        ? payload.payload
        : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === 'string') {
        configLabelKey = payload[key];
    }
    else if (payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key] === 'string') {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
