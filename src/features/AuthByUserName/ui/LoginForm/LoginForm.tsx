import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Enter login')} type="text" />
            <Input placeholder={t('Enter password')} type="password" />
            <Button>
                { t('Login') }
            </Button>
        </div>
    );
};
