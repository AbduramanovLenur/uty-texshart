import { type FC } from 'react';
import cn from 'classnames';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ApplicationBody from './application-body';
import { getBreadcrumbs } from '../model/breadcrumbs';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './application.module.scss';

const Application: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const breadcrumbs = getBreadcrumbs(t);

  const handleBack = () => {
    navigate(routes.APPLICATIONS);
  };

  return (
    <section className={cn(styles['application'], 'section')}>
      <div className={cn(styles['application__inner'], 'section-inner')}>
        <Breadcrumb
          classNames={{
            root: 'breadcrumbs',
            item: 'breadcrumbs__item',
          }}
          items={breadcrumbs}
        />
        <PageHeader onClick={handleBack}>
          ARZ-31234123
        </PageHeader>
        <ApplicationBody />
      </div>
    </section>
  );
};

export default Application;
