import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { statuses } from '../model/stutuses';
import { statusClasses } from '../model/status-classes';
import type { ITimelineStep } from '../model/types';

import { IconArrowDownBracket, IconClock, IconPrimaryCheck, IconXMark } from '@shared/assets';

import styles from './application-timeline.module.scss';

interface IProps {
  className?: string;
}

const ApplicationsTimeline: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  const timelineSteps: ITimelineStep[] = [
    {
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      status: statuses.PENDING,
    },
    {
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      status: statuses.ACTIVE,
    },
    {
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
    },
    {
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      status: statuses.ACTIVE,
    },
    {
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      status: statuses.PENDING,
    },
    {
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
    },
    {
      step: 2,
      title: t('applicationsTimeline.steps.rejected'),
      error: t('applicationsTimeline.steps.deficienciesFound'),
      comment: t('applicationsTimeline.steps.expired'),
      status: statuses.ERROR,
    },
    {
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      status: statuses.ACTIVE,
    },
    {
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      button: t('applicationsTimeline.steps.downloadAct', { size: '1.2 MB' }),
      status: statuses.DONE,
      time: '12:32, 12.01.2026',
    },
    {
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      status: statuses.PENDING,
    },
    {
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.ACTIVE,
    },
    {
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
      button: t('applicationsTimeline.steps.downloadTechnicalSpecs', { size: '2.4 MB' }),
      time: '12:32, 12.01.2026',
    },
    {
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.PENDING,
    },
    {
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsNotIssued'),
      error: t('applicationsTimeline.steps.technicalConditionsDenied'),
      button: t('applicationsTimeline.steps.downloadRejectionReason', { size: '2.4 MB' }),
      status: statuses.ERROR,
    },
    {
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      status: statuses.ACTIVE,
    },
    {
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      status: statuses.PENDING,
    },
    {
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      button: t('applicationsTimeline.steps.downloadConstructionEstimate', { size: '3.0 MB' }),
      employee: 'Bosh boshqarma',
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
    },
    {
      step: 6,
      title: t('applicationsTimeline.steps.completedSuccessfully'),
      status: statuses.ACTIVE,
    },
    {
      step: 6,
      title: t('applicationsTimeline.steps.completedSuccessfully'),
      status: statuses.PENDING,
    },
    {
      step: 6,
      title: t('applicationsTimeline.steps.completedSuccessfully'),
      button: t('applicationsTimeline.steps.downloadFinalAct', { size: '2.0 MB' }),
      employee: 'Bosh boshqarma',
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
    },
  ];

  return (
    <div className={cn(styles['applications-timeline'], className)}>
      <div className={styles['applications-timeline__wrapper']}>
        <ul className={styles['applications-timeline__list']}>
          {timelineSteps.map((item, index) => (
            <li
              key={`${item.step}`}
              className={
                cn(
                  styles['applications-timeline__item'],
                  styles[statusClasses[item.status]],
                )
              }
            >
              <div className={styles['applications-timeline__indicator']}>
                {item.status === statuses.DONE ? (
                  <IconPrimaryCheck />
                ) : (
                  <div className={styles['applications-timeline__step']}>
                    {item?.step}
                  </div>
                )}
                {index < timelineSteps.length - 1 && (
                  <div className={styles['applications-timeline__line']} />
                )}
              </div>
              <div className={styles['applications-timeline__content']}>
                <div className={styles['applications-timeline__overlay']}>
                  <div className={styles['applications-timeline__title']}>
                    {item.title}
                  </div>
                  <div className={styles['applications-timeline__info']}>
                    {item?.error && (
                      <div className={styles['applications-timeline__error']}>
                        <div className={styles['applications-timeline__error-icon']}>
                          <IconXMark />
                        </div>
                        <div className={styles['applications-timeline__error-label']}>
                          {item.error}
                        </div>
                      </div>
                    )}
                    {(item.status === statuses.PENDING || item.status === statuses.ACTIVE) && (
                      <div className={styles['applications-timeline__pending']}>
                        <div className={styles['applications-timeline__pending-icon']}>
                          <IconClock />
                        </div>
                        <div className={styles['applications-timeline__pending-label']}>
                          {t('applicationsTimeline.pending')}
                        </div>
                      </div>
                    )}
                    {item?.button && (
                      <a className={styles['applications-timeline__file']} href='' download>
                        <span className={styles['applications-timeline__file-icon']}>
                          <IconArrowDownBracket />
                        </span>
                        <span className={styles['applications-timeline__file-text']}>
                          {item.button}
                        </span>
                      </a>
                    )}
                    {item?.time && (
                      <div className={styles['applications-timeline__time']}>
                        {item.time}
                      </div>
                    )}
                    {item?.comment && (
                      <div className={styles['applications-timeline__comment']}>
                        {t('applicationsTimeline.comment')}: {item.comment}
                      </div>
                    )}
                  </div>
                </div>
                {item?.employee && (
                  <div className={styles['applications-timeline__employee']}>
                    {item.employee}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicationsTimeline;
