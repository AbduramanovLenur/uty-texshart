import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { ITimelineApproval } from '../model/types';
import { approvalStatusConfig } from '../model/approval-status-config';

import styles from './timeline-act-approvals.module.scss';

interface IProps {
  approvals: ITimelineApproval[];
  className?: string;
}

const TimelineActApprovals: FC<IProps> = ({ approvals, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['timeline-act-approvals'], className)}>
      {approvals.map((approval) => {
        const config = approvalStatusConfig[approval.status];

        return (
          <div key={approval.id} className={styles['timeline-act-approvals__item']}>
            <div className={styles['timeline-act-approvals__left']}>
              <div className={styles['timeline-act-approvals__title']}>
                {t(approval.title, approval.title)}
              </div>
              <div className={styles['timeline-act-approvals__person']}>
                {approval.person}
              </div>
              <div className={styles['timeline-act-approvals__text']}>
                {approval.text}
              </div>
            </div>
            <div className={styles['timeline-act-approvals__right']}>
              {config && (
                <div className={styles[config.className]}>
                  <span>
                    <config.icon />
                  </span>
                  <span>
                    {t(config.labelKey)}
                  </span>
                </div>
              )}
              <div className={styles['timeline-act-approvals__date']}>
                {approval.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineActApprovals;
