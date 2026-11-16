import type { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { routes } from '@shared/config';

import styles from './auth-credentials.module.scss';

interface ILoginFormValues {
  login: string;
  password: string;
}

const AuthCredentials: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm<ILoginFormValues>();

  const handleFinish = (values: ILoginFormValues) => {
    console.log('Login values:', values);
    navigate(routes.DASHBOARD);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      className={cn(styles['auth-credentials'])}
      onFinish={handleFinish}
      requiredMark
    >
      <div className={cn(styles['auth-credentials__fields'])}>
        <Form.Item
          name='login'
          label={t('authentication.login.login')}
          rules={[{ required: true, message: t('authentication.login.loginRequired') }]}
        >
          <Input
            placeholder={t('authentication.login.loginPlaceholder')}
            size='large'
          />
        </Form.Item>
        <Form.Item
          name='password'
          label={t('authentication.login.password')}
          rules={[{ required: true, message: t('authentication.login.passwordRequired') }]}
        >
          <Input.Password
            placeholder={t('authentication.login.passwordPlaceholder')}
            size='large'
          />
        </Form.Item>
      </div>
      <Button
        type='primary'
        htmlType='submit'
        size='large'
        block
        className={cn(styles['auth-credentials__submit'])}
      >
        {t('authentication.login.submit')}
      </Button>
    </Form>
  );
};

export default AuthCredentials;
