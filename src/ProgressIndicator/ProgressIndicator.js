import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/progress-indicator.css';

const classnames = classnamesBind.bind(styles);

const PROGRESS_INDICATOR_TYPES = [
    'default',
    'informative',
    'positive',
    'critical',
    'negative'
];

/** A **Progress Indicator** informs the user of an progressive operation. */
const ProgressIndicator = React.forwardRef(({
    className,
    cssNamespace,
    label,
    type,
    value,
    ...props
}, ref) => {
    const percent = `${value}%`;

    const progressIndicatorClasses = classnames(
        `${cssNamespace}-progress-indicator`,
        {
            [`${cssNamespace}-progress-indicator--${type}`]: type !== 'default'
        },
        className,
    );

    return (
        <div
            {...props}
            aria-label={label}
            aria-valuemax='100'
            aria-valuemin='0'
            aria-valuenow={value}
            aria-valuetext={label}
            className={progressIndicatorClasses}
            ref={ref}
            role='progressbar'
            tabIndex='-1'>
            <div className={classnames(`${cssNamespace}-progress-indicator__container`)}>
                <div className={classnames(`${cssNamespace}-progress-indicator__progress-bar`)} style={{ minWidth: percent, width: percent }} />
                { label && (
                    <div className={classnames(`${cssNamespace}-progress-indicator__remaining`)}>
                        <span className={classnames(`${cssNamespace}-progress-indicator__icon`)} />
                        <span className={classnames(`${cssNamespace}-progress-indicator__label`)}>{label}</span>
                    </div>
                )}
            </div>
        </div>
    );
});

ProgressIndicator.displayName = 'ProgressIndicator';

ProgressIndicator.propTypes = {
    /** Progress rate value (0~100) */
    value: PropTypes.number.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Localized text for progress indicator */
    label: PropTypes.string,
    /** Message box type */
    type: PropTypes.oneOf(PROGRESS_INDICATOR_TYPES)
};

ProgressIndicator.defaultProps = {
    value: 0,
    label: '',
    type: 'default'
};

export default withStyles(ProgressIndicator);
