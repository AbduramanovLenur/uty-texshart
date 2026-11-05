import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { statuses } from '../model/stutuses';
import { approvalStatuses } from '../model/approval-statuses';
import { statusClasses } from '../model/status-classes';
import type { ITimelineApproval, ITimelineStep } from '../model/types';
import TimelineActApprovals from './timeline-act-approvals';

import {
  IconArrowDownBracket,
  IconClock,
  IconDownArrow,
  IconPrimaryCheck,
  IconXMark,
} from '@shared/assets';

import styles from './application-timeline.module.scss';

interface IProps {
  className?: string;
}

const defaultActApprovals: ITimelineApproval[] = [
  {
    title: "Hududiy bo'lim boshlig'i",
    subtitle: 'Qarshi MTU',
    status: approvalStatuses.FORMED,
    date: '20.01.2026',
    person: "Yo'ldoshev Akrom",
  },
  {
    title: 'PCH',
    subtitle: "Salar Temiryo'l masofasi",
    status: approvalStatuses.CONFIRMED,
    date: '20.01.2026',
    person: 'Usmonov Hamdam',
  },
  {
    title: 'ECH',
    subtitle: 'Toshkent signalizatsiya va aloqa masofasi',
    status: approvalStatuses.CONFIRMED,
    date: '20.01.2026',
    person: 'Yunusov Temur',
  },
  {
    title: 'SHCH',
    subtitle: "Toshkent elektr ma'lumot masofasi",
    status: approvalStatuses.PENDING,
    person: 'Temirov Komil',
  },
  {
    title: 'Arizachi',
    status: approvalStatuses.PENDING,
    person: 'New World MCHJ',
  },
];

const ApplicationsTimeline: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  const timelineSteps: ITimelineStep[] = [
    {
      id: '1-pending',
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      status: statuses.PENDING,
    },
    {
      id: '1-active',
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      status: statuses.ACTIVE,
    },
    {
      id: '1-done',
      step: 1,
      title: t('applicationsTimeline.steps.applicationAccepted'),
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
    },
    {
      id: '2-active',
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      status: statuses.ACTIVE,
    },
    {
      id: '2-pending',
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      status: statuses.PENDING,
    },
    {
      id: '2-done',
      step: 2,
      title: t('applicationsTimeline.steps.forwardedToRegional'),
      info: 'Qarshi MTU',
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
    },
    {
      id: '2-error',
      step: 2,
      title: t('applicationsTimeline.steps.rejected'),
      error: t('applicationsTimeline.steps.deficienciesFound'),
      comment: t('applicationsTimeline.steps.expired'),
      status: statuses.ERROR,
    },
    {
      id: '3-active',
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      status: statuses.ACTIVE,
    },
    {
      id: '3-done',
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      button: t('applicationsTimeline.steps.downloadAct', { size: '1.2 MB' }),
      status: statuses.DONE,
      time: '12:32, 12.01.2026',
      approvals: defaultActApprovals,
    },
    {
      id: '3-pending',
      step: 3,
      title: t('applicationsTimeline.steps.actCreated'),
      status: statuses.PENDING,
    },
    {
      id: '4-active',
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.ACTIVE,
    },
    {
      id: '4-done',
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.DONE,
      employee: 'Bosh boshqarma',
      button: t('applicationsTimeline.steps.downloadTechnicalSpecs', { size: '2.4 MB' }),
      time: '12:32, 12.01.2026',
    },
    {
      id: '4-pending',
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsIssued'),
      status: statuses.PENDING,
    },
    {
      id: '4-error',
      step: 4,
      title: t('applicationsTimeline.steps.technicalConditionsNotIssued'),
      error: t('applicationsTimeline.steps.technicalConditionsDenied'),
      button: t('applicationsTimeline.steps.downloadRejectionReason', { size: '2.4 MB' }),
      status: statuses.ERROR,
    },
    {
      id: '5-active',
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      status: statuses.ACTIVE,
    },
    {
      id: '5-pending',
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      status: statuses.PENDING,
    },
    {
      id: '5-done',
      step: 5,
      title: t('applicationsTimeline.steps.constructionStarted'),
      button: t('applicationsTimeline.steps.downloadConstructionEstimate', { size: '3.0 MB' }),
      employee: 'Bosh boshqarma',
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
    },
    {
      id: '6-active',
      step: 6,
      title: t('applicationsTimeline.steps.completedSuccessfully'),
      status: statuses.ACTIVE,
    },
    {
      id: '6-pending',
      step: 6,
      title: t('applicationsTimeline.steps.completedSuccessfully'),
      status: statuses.PENDING,
    },
    {
      id: '6-done',
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
              key={item.id ?? `${item.step}-${item.status}`}
              className={cn(
                styles['applications-timeline__item'],
                styles[statusClasses[item.status]],
              )}
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
                      <div className={styles['applications-timeline__actions-row']}>
                        <a className={styles['applications-timeline__file']} href='' download>
                          <span className={styles['applications-timeline__file-icon']}>
                            <IconArrowDownBracket />
                          </span>
                          <span className={styles['applications-timeline__file-text']}>
                            {item.button}
                          </span>
                        </a>
                        {item?.approvals?.length && (
                          <button
                            type='button'
                            className={styles['applications-timeline__accordion-toggle']}
                            onClick={handleAccordionToggle}
                          >
                            <span
                              className={cn(
                                styles['applications-timeline__accordion-icon'],
                                isAccordionOpen && styles['is-active'],
                              )}
                            >
                              <IconDownArrow />
                            </span>
                            <span>{t('actions.more')}</span>
                          </button>
                        )}
                      </div>
                    )}
                    {item?.approvals && isAccordionOpen && (
                      <TimelineActApprovals approvals={item.approvals} />
                    )}
                    {item?.info && (
                      <div className={styles['applications-timeline__information']}>
                        {item.info}
                      </div>
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
