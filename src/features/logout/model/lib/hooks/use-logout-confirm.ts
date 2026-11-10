import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { routes } from '@shared/config';

export const useLogoutConfirm = () => {
  const { t } = useTranslation();
  const { modal } = App.useApp();
  const navigate = useNavigate();

  const confirmLogout = () => {
    modal.confirm({
      title: t('logoutConfirm.title'),
      content: t('logoutConfirm.description'),
      okText: t('logoutConfirm.confirm'),
      cancelText: t('logoutConfirm.cancel'),
      okButtonProps: { danger: true },
      centered: true,
      onOk: () => {
        navigate(routes.AUTH);
      },
    });
  };

  return { confirmLogout };
};
