import type { FC } from 'react';
import cn from 'classnames';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import IncomingApplicationBody from './incoming-application-body';
import { getBreadcrumbs } from '../model/lib/get-breadcrumbs';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './incoming-application.module.scss';

const IncomingApplication: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const breadcrumbs = getBreadcrumbs(t);

  const handleBack = () => {
    navigate(routes.APPLICATIONS);
  };

  return (
    <section className={cn(styles['incoming-application'], 'section')}>
      <div className={cn(styles['incoming-application__inner'], 'section-inner')}>
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
        <IncomingApplicationBody />
      </div>
    </section>
  );
};

export default IncomingApplication;
