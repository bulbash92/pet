import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInvert',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [classes.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(classes.Button, mods, [className, classes[theme], classes[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
