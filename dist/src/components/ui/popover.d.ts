import React from 'react';
interface PopoverProps {
    label: string;
    children: React.ReactNode;
    show?: boolean;
}
declare const Popover: React.FC<PopoverProps>;
export default Popover;
