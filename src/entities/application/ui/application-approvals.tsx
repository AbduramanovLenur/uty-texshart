import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { ITimelineApproval } from '../model/types/timeline';
import { approvalStatusConfig } from '../model/config/approval-status';

import styles from './application-approvals.module.scss';

interface IProps {
  approvals: ITimelineApproval[];
  className?: string;
}

const ApplicationApprovals: FC<IProps> = ({ approvals, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['application-approvals'], className)}>
      {approvals.map((approval) => {
        const config = approvalStatusConfig[approval.status];

        return (
          <div key={approval.id} className={styles['application-approvals__item']}>
            <div className={styles['application-approvals__left']}>
              <div className={styles['application-approvals__title']}>
                {t(approval.title, approval.title)}
              </div>
              <div className={styles['application-approvals__person']}>
                {approval.person}
              </div>
              <div className={styles['application-approvals__text']}>
                {approval.text}
              </div>
            </div>
            <div className={styles['application-approvals__right']}>
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
              <div className={styles['application-approvals__date']}>
                {approval.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationApprovals;
