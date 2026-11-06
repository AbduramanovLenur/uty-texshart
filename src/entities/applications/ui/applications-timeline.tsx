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

const ApplicationsTimeline: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  const defaultActApprovals: ITimelineApproval[] = [
    {
      id: 1,
      title: t('applicationsTimeline.approvals.regionalHead'),
      subtitle: 'Qarshi MTU',
      status: approvalStatuses.FORMED,
      date: '20.01.2026',
      person: "Yo'ldoshev Akrom",
    },
    {
      id: 2,
      title: t('applicationsTimeline.approvals.pch'),
      subtitle: "Salar Temiryo'l masofasi",
      status: approvalStatuses.CONFIRMED,
      date: '20.01.2026',
      person: 'Usmonov Hamdam',
    },
    {
      id: 3,
      title: t('applicationsTimeline.approvals.ech'),
      subtitle: 'Toshkent signalizatsiya va aloqa masofasi',
      status: approvalStatuses.CONFIRMED,
      date: '20.01.2026',
      person: 'Yunusov Temur',
    },
    {
      id: 4,
      title: t('applicationsTimeline.approvals.shch'),
      subtitle: "Toshkent elektr ma'lumot masofasi",
      status: approvalStatuses.PENDING,
      person: 'Temirov Komil',
    },
    {
      id: 5,
      title: t('applicationsTimeline.approvals.applicant'),
      status: approvalStatuses.PENDING,
      person: 'New World MCHJ',
    },
  ];

  const timelineSteps: ITimelineStep[] = [
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      time: '12:32, 12.01.2026',
      status: statuses.DONE,
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-3',
      step: 3,
      title: t('applicationsTimeline.steps.title.applicationAccepted'),
      status: statuses.PENDING,
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: statuses.PENDING,
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadAct', { size: '1.2 MB' }),
      approvals: defaultActApprovals,
    },
    {
      id: 'step-6',
      step: 6,
      title: t('applicationsTimeline.steps.title.actConfirmed'),
      status: statuses.PENDING,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadTechnicalSpecs', { size: '2.4 MB' }),
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadProjectDocuments', { size: '1.5 MB' }),
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadConstructionPermit', { size: '3.0 MB' }),
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: statuses.PENDING,
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: statuses.PENDING,
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadConstructionAct', { size: '1.8 MB' }),
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: statuses.PENDING,
      button: t('applicationsTimeline.steps.triggers.downloadFinalAct', { size: '2.0 MB' }),
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
                    {(item?.button || item?.approvals?.length) && (
                      <div className={styles['applications-timeline__actions-row']}>
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
