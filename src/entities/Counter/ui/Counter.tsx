import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="counter-increment"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="counter-decrement"
                onClick={decrement}
            >
                {t('decrement')}

            </Button>
        </div>
    );
};
