import { LoginModal } from 'features/AuthByUserName';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div
            className={classNames(classes.Navbar, {}, [className])}
            data-testid="navbar"
        >

            <div className={classNames(classes.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                    {t('Sign in')}
                </Button>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </div>
    );
}
