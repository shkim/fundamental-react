import * as React from 'react';

export type ProgressIndicatorProps = {
    className?: string;
    label?: string;
    type?: 'default' | 'informative' | 'positive' | 'critical' | 'negative';
    value: number;
} & React.HTMLAttributes<HTMLDivElement>;

declare const ProgressIndicator: React.FunctionComponent<ProgressIndicatorProps>;

export default ProgressIndicator;
