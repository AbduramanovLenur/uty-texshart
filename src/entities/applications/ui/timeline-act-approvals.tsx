import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { ITimelineApproval } from '../model/types';
import { approvalStatuses } from '../model/approval-statuses';
import { IconChecked, IconClock } from '@shared/assets';

import styles from './timeline-act-approvals.module.scss';

interface IProps {
  approvals: ITimelineApproval[];
  className?: string;
}

const TimelineActApprovals: FC<IProps> = ({
  approvals,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['timeline-act-approvals'], className)}>
      {approvals.map((approval) => (
        <div key={approval.id} className={styles['timeline-act-approvals__item']}>
          <div className={styles['timeline-act-approvals__left']}>
            <div className={styles['timeline-act-approvals__title']}>
              {approval.title}
            </div>
            {approval.subtitle && (
              <div className={styles['timeline-act-approvals__subtitle']}>
                {approval.subtitle}
              </div>
            )}
            <div className={styles['timeline-act-approvals__status']}>
              {approval.status === approvalStatuses.FORMED && (
                <>
                  <span className={styles['timeline-act-approvals__check-icon']}>
                    <IconChecked />
                  </span>
                  <span>{t('applicationsTimeline.formed', { date: approval.date })}</span>
                </>
              )}
              {approval.status === approvalStatuses.CONFIRMED && (
                <>
                  <span className={styles['timeline-act-approvals__check-icon']}>
                    <IconChecked />
                  </span>
                  <span>{t('applicationsTimeline.confirmed', { date: approval.date })}</span>
                </>
              )}
              {approval.status === approvalStatuses.PENDING && (
                <>
                  <span className={styles['timeline-act-approvals__clock-icon']}>
                    <IconClock />
                  </span>
                  <span>{t('applicationsTimeline.pending')}</span>
                </>
              )}
            </div>
          </div>
          <div className={styles['timeline-act-approvals__person']}>
            {approval.person}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineActApprovals;
