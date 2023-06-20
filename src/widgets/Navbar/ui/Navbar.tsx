import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div
            className={classNames(classes.Navbar, {}, [className])}
            data-testid="navbar"
        >

            <div className={classNames(classes.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
                <Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>
                    {t('Sign in')}
                </Button>
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                test
            </Modal>
        </div>
    );
}
