import {classNames} from 'helpers/classNames';
import classes from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import IconTheme from 'shared/assets/icons/icon-theme.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
                className={classNames(classes.ThemeSwitcher, {}, [className])}
        >
            <IconTheme className={classNames(classes.icon)}/>
        </Button>
    );
};


