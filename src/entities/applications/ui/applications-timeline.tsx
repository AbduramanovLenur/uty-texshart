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
    // {
    //   id: 1,
    //   title: t('applicationsTimeline.approvals.regionalHead'),
    //   subtitle: 'Qarshi MTU',
    //   status: approvalStatuses.FORMED,
    //   date: '20.01.2026',
    //   person: "Yo'ldoshev Akrom",
    // },
    {
      id: 1,
      title: t('applicationsTimeline.approvals.pch'),
      person: 'Ahmedov Shokir',
      text: "Salar Temiryo'l masofasi",
      status: approvalStatuses.CONFIRMED,
      date: '20.01.2026',
    },
    {
      id: 2,
      title: t('applicationsTimeline.approvals.ech'),
      person: 'Salimov Erkin',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: approvalStatuses.CONFIRMED,
      date: '20.01.2026',
    },
    {
      id: 2,
      title: t('applicationsTimeline.approvals.shch'),
      person: 'Temirov Aziz',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: approvalStatuses.PENDING,
    },
    {
      id: 4,
      title: t('applicationsTimeline.approvals.applicant'),
      person: 'New World MCHJ',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: approvalStatuses.PENDING,
    },
  ];

  const timelineSteps: ITimelineStep[] = [
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: statuses.PENDING,
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: statuses.PENDING,
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
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: statuses.PENDING,
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: statuses.PENDING,
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
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: statuses.PENDING,
    },
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: statuses.ACTIVE,
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
      status: statuses.ACTIVE,
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-6',
      step: 6,
      title: t('applicationsTimeline.steps.title.actConfirmed'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: statuses.ACTIVE,
    },
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      buttonText: 'Invoice',
      fileUrl: 'https://google.com/',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-3',
      step: 3,
      title: t('applicationsTimeline.steps.title.applicationAccepted'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      text: 'Buxoro MTU',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      text: 'Yo’ldoshev Akrom',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadAct', { size: '1 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-6',
      step: 6,
      title: t('applicationsTimeline.steps.title.actConfirmed'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      approvals: defaultActApprovals,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadTechnicalSpecs', { size: '2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadTechnicalSpecs', { size: '2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadProjectDocuments', { size: '2.2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadConstructionAct', { size: '2.2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
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
              <div className={styles['applications-timeline__box']}>
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
                <div className={styles['applications-timeline__info-wrapper']}>
                  <div className={cn(styles['applications-timeline__content'], { [styles['is-active']]: isAccordionOpen })}>
                    <div className={styles['applications-timeline__overlay']}>
                      <div className={styles['applications-timeline__title']}>
                        {item.title}
                      </div>
                      <div className={styles['applications-timeline__info']}>
                        {item?.status === statuses.ERROR && (
                          <div className={styles['applications-timeline__error']}>
                            <div className={styles['applications-timeline__error-icon']}>
                              <IconXMark />
                            </div>
                            <div className={styles['applications-timeline__error-label']}>
                              {t('applicationsTimeline.steps.rejects.rejected')}
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
                        {item?.date && (
                          <div className={styles['applications-timeline__date']}>
                            {item.date}
                          </div>
                        )}
                        {item?.text && (
                          <div className={styles['applications-timeline__text']}>
                            {item.text}
                          </div>
                        )}
                        {item?.buttonText && (
                          <a className={styles['applications-timeline__file']} href={item.fileUrl} download>
                            <span className={styles['applications-timeline__file-icon']}>
                              <IconArrowDownBracket />
                            </span>
                            <span className={styles['applications-timeline__file-text']}>
                              {item.buttonText}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    {(item?.approvals?.length || item?.employee) && (
                      <div className={styles['applications-timeline__inner']}>
                        {item?.employee && (
                          <div className={styles['applications-timeline__employee']}>
                            {item.employee}
                          </div>
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
                  </div>
                  {item?.approvals && isAccordionOpen && (
                    <TimelineActApprovals approvals={item.approvals} />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicationsTimeline;
