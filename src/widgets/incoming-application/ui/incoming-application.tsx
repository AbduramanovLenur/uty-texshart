import type { FC } from 'react';
import cn from 'classnames';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import IncomingApplicationBody from './incoming-application-body';
import { getBreadcrumbs } from '../model/lib/utils/get-breadcrumbs';

import {
  ApplicationActions,
  ApplicationActionKeys,
  type TApplicationActionHandler,
  type TApplicationActionKey,
} from '@features/application-actions';
import {
  ForwardApplicationModal,
  open as openForwardApplicationModal,
} from '@features/forward-application-modal';
import {
  RejectApplicationModal,
  open as openRejectApplicationModal,
} from '@features/reject-application-modal';
import { PageHeader } from '@shared/ui';
import { routes } from '@shared/config';

import styles from './incoming-application.module.scss';

const IncomingApplication: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breadcrumbs = getBreadcrumbs(t);

  const actions = [
    { 'name': ApplicationActionKeys.FORWARD,  'key': 'employee' },
    { 'name': ApplicationActionKeys.REJECT, 'key': 'employee' },
  ];

  const handleBack = () => {
    navigate(routes.APPLICATIONS);
  };

  const actionHandlers: Partial<Record<TApplicationActionKey, TApplicationActionHandler>> = {
    [ApplicationActionKeys.REJECT]: (key: TApplicationActionKey) => {
      dispatch(openRejectApplicationModal({ id: 'ARZ-31234123', key }));
    },
    [ApplicationActionKeys.FORWARD]: (key: TApplicationActionKey) => {
      dispatch(openForwardApplicationModal({ id: 'ARZ-31234123', key }));
    },
  };

  return (
    <section className={cn(styles['incoming-application'], 'section')}>
      <div className={cn(styles['incoming-application__inner'], 'section-inner')}>
        <Breadcrumb
          classNames={{
            root: cn('breadcrumbs'),
            item: cn('breadcrumbs__item'),
          }}
          items={breadcrumbs}
        />
        <div className={styles['incoming-application__top']}>
          <PageHeader onClick={handleBack}>
            ARZ-31234123
          </PageHeader>
          <ApplicationActions actions={actions} handlers={actionHandlers} />
        </div>
        <IncomingApplicationBody />
        <ForwardApplicationModal />
        <RejectApplicationModal />
      </div>
    </section>
  );
};

export default IncomingApplication;
