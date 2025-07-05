import React, { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t('login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <div>jjjjjjjjjjjjjj ttttttttttttttt uuuuuuuuuuuuuuu</div>
      </Modal>
    </div>
  );
};
