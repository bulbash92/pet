import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import IconTheme from 'shared/assets/icons/icon-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
        >
            <IconTheme className={classNames(classes.icon)} />
        </Button>
    );
};
