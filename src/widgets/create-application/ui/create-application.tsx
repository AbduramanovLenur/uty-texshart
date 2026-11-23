import { type FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';

import CreateApplicationBody from './create-application-body';
import { getBreadcrumbs } from '../model/lib/utils/get-breadcrumbs';

import { LeaveConfirmModal } from '@features/leave-confirm-modal';
import { ViewInvoiceModal } from '@features/view-invoice-modal';
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
    <section className={cn('section')}>
      <div className={cn('section-single-inner')}>
        <Breadcrumb
          classNames={{
            root: cn('breadcrumbs'),
            item: cn('breadcrumbs__item'),
          }}
          items={breadcrumbs}
        />
        <PageHeader className={styles['create-application__overlay']} onClick={handleBack}>
          {t('createApplication.title')}
        </PageHeader>
        <CreateApplicationBody />
        <LeaveConfirmModal />
        <ViewInvoiceModal />
      </div>
    </section>
  );
};

export default CreateApplication;
