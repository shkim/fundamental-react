import * as React from 'react';

export type MessageBoxProps = {
    actions: React.ReactNode[];
    title: string;
    backdropClassName?: string;
    bodyProps?: any;
    className?: string;
    contentProps?: any;
    footerProps?: any;
    headerProps?: any;
    /** Set to **true** to make the dialog visible */
    show?: boolean;
    size?: 's' | 'm' | 'l' | 'xl';
    type?: 'default' | 'confirmation' | 'error' | 'success' | 'warning' | 'information';
    onClose?: ((...args: any[]) => any);
} & React.HTMLAttributes<HTMLSpanElement>;

declare class MessageBox extends React.Component<MessageBoxProps> {}

export default MessageBox;
