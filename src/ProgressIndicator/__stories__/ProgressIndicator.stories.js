/* eslint-disable react/no-multi-comp */
import ProgressIndicator from '../ProgressIndicator';
import React from 'react';
import {
    number,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/ProgressIndicator',
    component: ProgressIndicator
};

export const primary = () => (<ProgressIndicator
    label='32%'
    type='positive'
    value='32' />);

/** The progress indicator can visualize different value states that are represented by various theme-dependent semantic colors.
 * The states are: `default`, `informative`, `positive`, `critical`, and `negative`. */

export const states = () => (
    <div className='fddocs-container'>
        <ProgressIndicator label='42%' value='42' />
        <ProgressIndicator
            label='42%'
            type='informative'
            value='42' />
        <ProgressIndicator
            label='42%'
            type='positive'
            value='42' />
        <ProgressIndicator
            label='42%'
            type='critical'
            value='42' />
        <ProgressIndicator
            label='42%'
            type='negative'
            value='42' />
    </div>
);

states.storyName = 'States';

export const dev = () => (
    <ProgressIndicator
        type={select('type', { 'default': 'default', 'informative': 'informative', 'positive': 'positive', 'critical': 'critical', 'negative': 'negative' })}
        value={number('show', 50, {
            range: true,
            min: 0,
            max: 100,
            step: 1
        })} />
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (<ProgressIndicator cssNamespace='xxx' show />);
noStyles.parameters = { docs: { disable: true } };
