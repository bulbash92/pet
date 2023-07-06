import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Simulate } from 'react-dom/test-utils';
import classes from './Sidebar.module.scss';
import toggle = Simulate.toggle;

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
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('toggle')}
            </button>
        </div>
    );
};
