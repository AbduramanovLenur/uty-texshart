import type { FC } from 'react';
import cn from 'classnames';

import { statuses } from '../model/stutuses';
import { statusClasses } from '../model/status-classes';

import { IconArrowDownBracket, IconClock, IconPrimaryCheck, IconXMark } from '@shared/assets';

import styles from './application-timeline.module.scss';

interface ITimelineStep {
  step?: number;
  title?: string;
  subtitle?: string;
  error?: string;
  comment?: string;
  file?: boolean;
  button?: string;
  status: string;
}

const ApplicationsTimeline: FC = () => {

  const timelineSteps: ITimelineStep[] = [
    {
      step: 1,
      title: 'Ariza qabul qilindi',
      status: statuses.PENDING,
    },
    {
      step: 1,
      title: 'Ariza qabul qilindi',
      status: statuses.ACTIVE,
    },
    {
      step: 1,
      title: 'Ariza qabul qilindi',
      subtitle: '12:32, 12.01.2026',
      status: statuses.DONE,
    },
    {
      step: 2,
      title: "Hududiy bo'limga yo'naltirildi",
      status: statuses.ACTIVE,
    },
    {
      step: 2,
      title: "Hududiy bo'limga yo'naltirildi",
      status: statuses.PENDING,
    },
    {
      step: 2,
      title: "Hududiy bo'limga yo'naltirildi",
      subtitle: "Toshkent viloyati yo'l distansiyasi",
      status: statuses.DONE,
    },
    {
      step: 2,
      title: 'Rad etildi',
      error: 'Xujjatlarda kamchilik topildi',
      comment: 'Muddati o’tkan',
      status: statuses.ERROR,
    },
    {
      step: 3,
      title: 'Dalolatnoma shakllantirildi',
      status: statuses.ACTIVE,
    },
    {
      step: 3,
      title: 'Dalolatnoma shakllantirildi',
      file: true,
      button: 'Dalolatnomani yuklash',
      status: statuses.DONE,
    },
    {
      step: 3,
      title: 'Dalolatnoma shakllantirildi',
      status: statuses.PENDING,
    },
    {
      step: 4,
      title: 'Texnik-shart berildi',
      status: statuses.ACTIVE,
    },
    {
      step: 4,
      title: 'Texnik-shart berildi',
      subtitle: 'Lorem',
      status: statuses.DONE,
    },
    {
      step: 4,
      title: 'Texnik-shart berildi',
      status: statuses.PENDING,
    },
    {
      step: 4,
      title: 'Rad etildi',
      error: 'Texnik shart berilmadi',
      button: 'Rad etish sababi (2.4 MB)',
      file: true,
      status: statuses.ERROR,
    },
    {
      step: 5,
      title: 'Qurilish boshlandi',
      subtitle: 'Kutilmoqda',
      status: 'pending',
    },
    {
      step: 6,
      title: 'Muvaffaqiyatli yakunlandi',
      subtitle: 'Kutilmoqda',
      status: 'pending',
    },
  ];

  return (
    <div className={styles['applications-timeline']}>
      <div className={styles['applications-timeline__wrapper']}>
        <ul className={styles['applications-timeline__list']}>
          {timelineSteps.map((item, index) => (
            <li
              key={item.step}
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
                        Kutilmoqda
                      </div>
                    </div>
                  )}
                  {item?.subtitle && (
                    <div className={styles['applications-timeline__subtitle']}>
                      {item.subtitle}
                    </div>
                  )}
                  {item?.comment && (
                    <div className={styles['applications-timeline__comment']}>
                      Izoh: {item.comment}
                    </div>
                  )}
                  {item?.file && (
                    <a className={styles['applications-timeline__file']} href='' download>
                      <span className={styles['applications-timeline__file-icon']}>
                        <IconArrowDownBracket />
                      </span>
                      <span className={styles['applications-timeline__file-text']}>
                        {item?.button}
                      </span>
                    </a>
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
