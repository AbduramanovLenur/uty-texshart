import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Statuses } from '../model/constants/stutuses';
import { ApprovalStatuses } from '../model/constants/approval-statuses';
import { statusClasses } from '../model/config/status-classes';
import type { ITimelineApproval, ITimelineStep } from '../model/types/timeline';
import ApplicationApprovals from './application-approvals';

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
    //   status: ApprovalStatuses.FORMED,
    //   date: '20.01.2026',
    //   person: "Yo'ldoshev Akrom",
    // },
    {
      id: 1,
      title: t('applicationsTimeline.approvals.pch'),
      person: 'Ahmedov Shokir',
      text: "Salar Temiryo'l masofasi",
      status: ApprovalStatuses.CONFIRMED,
      date: '20.01.2026',
    },
    {
      id: 2,
      title: t('applicationsTimeline.approvals.ech'),
      person: 'Salimov Erkin',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: ApprovalStatuses.REJECTED,
      date: '20.01.2026',
    },
    {
      id: 2,
      title: t('applicationsTimeline.approvals.shch'),
      person: 'Temirov Aziz',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: ApprovalStatuses.PENDING,
    },
    {
      id: 4,
      title: t('applicationsTimeline.approvals.applicant'),
      person: 'New World MCHJ',
      text: 'Toshkent signalizatsiya va aloqa masofasi',
      status: ApprovalStatuses.PENDING,
    },
  ];

  const timelineSteps: ITimelineStep[] = [
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-3',
      step: 3,
      title: t('applicationsTimeline.steps.title.applicationAccepted'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-6',
      step: 6,
      title: t('applicationsTimeline.steps.title.actConfirmed'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: Statuses.PENDING,
    },
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-3',
      step: 3,
      title: t('applicationsTimeline.steps.title.applicationAccepted'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-6',
      step: 6,
      title: t('applicationsTimeline.steps.title.actConfirmed'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: Statuses.ACTIVE,
    },
    {
      id: 'step-1',
      step: 1,
      title: t('applicationsTimeline.steps.title.submitted'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      buttonText: 'Invoice',
      fileUrl: 'https://google.com/',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-3',
      step: 3,
      title: t('applicationsTimeline.steps.title.applicationAccepted'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-4',
      step: 4,
      title: t('applicationsTimeline.steps.title.forwardedToRegional'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      text: 'Buxoro MTU',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-5',
      step: 5,
      title: t('applicationsTimeline.steps.title.actCreated'),
      status: Statuses.DONE,
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
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      approvals: defaultActApprovals,
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadTechnicalSpecs', { size: '2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-8',
      step: 8,
      title: t('applicationsTimeline.steps.title.projectDocumentsUploaded'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadTechnicalSpecs', { size: '2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadProjectDocuments', { size: '2.2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-10',
      step: 10,
      title: t('applicationsTimeline.steps.title.constructionStarted'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-11',
      step: 11,
      title: t('applicationsTimeline.steps.title.constructionCompleted'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-12',
      step: 12,
      title: t('applicationsTimeline.steps.title.constructionActUploaded'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
      buttonText: t('applicationsTimeline.steps.triggers.downloadConstructionAct', { size: '2.2 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-13',
      step: 13,
      title: t('applicationsTimeline.steps.title.constructionCompletionConfirmed'),
      status: Statuses.DONE,
      date: '12:32, 12.01.2026',
      employee: 'Bosh boshqarma',
    },
    {
      id: 'step-2',
      step: 2,
      title: t('applicationsTimeline.steps.title.paymentDone'),
      status: Statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-7',
      step: 7,
      title: t('applicationsTimeline.steps.title.technicalConditionsIssued'),
      status: Statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
    },
    {
      id: 'step-9',
      step: 9,
      title: t('applicationsTimeline.steps.title.constructionPermitIssued'),
      status: Statuses.ERROR,
      buttonText: t('applicationsTimeline.steps.triggers.downloadRejectionReason', { size: '5 MB' }),
      fileUrl: 'https://google.com/',
    },
  ];

  return (
    <div className={cn(styles['applications-timeline'], className)}>
      <div className={cn(styles['applications-timeline__wrapper'])}>
        <ul className={cn(styles['applications-timeline__list'])}>
          {timelineSteps.map((item, index) => (
            <li
              key={item.id ?? `${item.step}-${item.status}`}
              className={cn(
                styles['applications-timeline__item'],
                styles[statusClasses[item.status]],
              )}
            >
              <div className={cn(styles['applications-timeline__box'])}>
                <div className={cn(styles['applications-timeline__indicator'])}>
                  {item.status === Statuses.DONE ? (
                    <IconPrimaryCheck />
                  ) : (
                    <div className={cn(styles['applications-timeline__step'])}>
                      {item.step}
                    </div>
                  )}
                  {index < timelineSteps.length - 1 && (
                    <div className={cn(styles['applications-timeline__line'])} />
                  )}
                </div>
                <div className={cn(styles['applications-timeline__info-wrapper'])}>
                  <div className={cn(styles['applications-timeline__content'], { [styles['is-active']]: isAccordionOpen })}>
                    <div className={cn(styles['applications-timeline__overlay'])}>
                      <div className={cn(styles['applications-timeline__title'])}>
                        {item.title}
                      </div>
                      <div className={cn(styles['applications-timeline__info'])}>
                        {item?.status === Statuses.ERROR && (
                          <div className={cn(styles['applications-timeline__error'])}>
                            <div className={cn(styles['applications-timeline__error-icon'])}>
                              <IconXMark />
                            </div>
                            <div className={cn(styles['applications-timeline__error-label'])}>
                              {t('applicationsTimeline.steps.rejects.rejected')}
                            </div>
                          </div>
                        )}
                        {(item.status === Statuses.PENDING || item.status === Statuses.ACTIVE) && (
                          <div className={cn(styles['applications-timeline__pending'])}>
                            <div className={cn(styles['applications-timeline__pending-icon'])}>
                              <IconClock />
                            </div>
                            <div className={cn(styles['applications-timeline__pending-label'])}>
                              {t('applicationsTimeline.pending')}
                            </div>
                          </div>
                        )}
                        {item?.date && (
                          <div className={cn(styles['applications-timeline__date'])}>
                            {item.date}
                          </div>
                        )}
                        {item?.text && (
                          <div className={cn(styles['applications-timeline__text'])}>
                            {item.text}
                          </div>
                        )}
                        {item?.buttonText && (
                          <a className={cn(styles['applications-timeline__file'])} href={item.fileUrl} download>
                            <span className={cn(styles['applications-timeline__file-icon'])}>
                              <IconArrowDownBracket />
                            </span>
                            <span className={cn(styles['applications-timeline__file-text'])}>
                              {item.buttonText}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    {(item?.approvals?.length || item?.employee) && (
                      <div className={cn(styles['applications-timeline__inner'])}>
                        {item?.employee && (
                          <div className={cn(styles['applications-timeline__employee'])}>
                            {item.employee}
                          </div>
                        )}
                        {item?.approvals?.length && (
                          <button
                            type='button'
                            className={cn(styles['applications-timeline__accordion-toggle'])}
                            onClick={handleAccordionToggle}
                          >
                            <span
                              className={cn(
                                styles['applications-timeline__accordion-icon'],
                                { [styles['is-active']]: isAccordionOpen },
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
                    <ApplicationApprovals approvals={item.approvals} />
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
