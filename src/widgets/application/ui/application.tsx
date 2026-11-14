import { type FC } from 'react';
import cn from 'classnames';
import { Breadcrumb, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ApplicationBody from './application-body';
import { getBreadcrumbs } from '../model/lib/utils/get-breadcrumbs';

import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';
import { IconPen } from '@shared/assets';

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
            root: cn('breadcrumbs'),
            item: cn('breadcrumbs__item'),
          }}
          items={breadcrumbs}
        />
        <div className={cn(styles['application__top'])}>
          <PageHeader onClick={handleBack}>
            ARZ-31234123
          </PageHeader>
          <Button className={cn(styles['application__btn'])} type='default' icon={<IconPen />}>
            {t('actions.editApplication')}
          </Button>
        </div>
        <ApplicationBody />
      </div>
    </section>
  );
};

export default Application;
