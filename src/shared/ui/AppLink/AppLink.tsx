import {classNames} from 'helpers/classNames';
import classes from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({className, to, theme=AppLinkTheme.PRIMARY, children, ...otherProps}) => {
    return (
        <Link to={to}
              className={classNames(classes.AppLink, {}, [className, classes[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};
