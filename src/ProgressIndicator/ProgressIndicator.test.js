import { mount } from 'enzyme';
import ProgressIndicator from './ProgressIndicator';
import React from 'react';

describe('<ProgressIndicator />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Progress Indicator component', () => {
            const element = mount(<ProgressIndicator data-sample='Sample' value='42' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <ProgressIndicator ref={ref} value='72' />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-progress-indicator');
    });
});
