import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About page')}</AppLink>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button type="button" onClick={onToggle}>togl</button>
        </div>
    );
};
