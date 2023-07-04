import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(classes.Button, {}, [className, classes[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
