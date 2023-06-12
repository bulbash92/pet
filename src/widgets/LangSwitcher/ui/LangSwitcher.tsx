import {classNames} from 'helpers/classNames';
import classes from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru'? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
};
