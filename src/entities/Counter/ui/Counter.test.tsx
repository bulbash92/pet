import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        fireEvent.click(screen.getByTestId('counter-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        fireEvent.click(screen.getByTestId('counter-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
