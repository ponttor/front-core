import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('AuthForm.Title')} />
      {error && <Text text={t('AuthForm.InvalidCredentials')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t('AuthForm.UsernamePlaceholder')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('AuthForm.PasswordPlaceholder')}
        onChange={onChangePassword}
        value={password}
      />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
        {t('AuthForm.LoginButton')}
      </Button>
    </div>
  );
});
