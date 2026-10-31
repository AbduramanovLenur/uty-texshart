import { type FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';

import CreateApplicationBody from './create-application-body';
import { getBreadcrumbs } from '../model/breadcrumbs';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './create-application.module.scss';

const CreateApplication: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const breadcrumbs = getBreadcrumbs(t);

  const handleBack = () => {
    navigate(routes.APPLICATIONS);
  };

  return (
    <section className={cn(styles['notifications'], 'section')}>
      <div className={cn(styles['notifications__inner'], 'section-inner')}>
        <Breadcrumb
          classNames={{
            root: 'breadcrumbs',
            item: 'breadcrumbs__item',
          }}
          items={breadcrumbs}
        />
        <PageHeader onClick={handleBack}>
          {t('createApplication.title')}
        </PageHeader>
        <CreateApplicationBody />
      </div>
    </section>
  );
};

export default CreateApplication;
