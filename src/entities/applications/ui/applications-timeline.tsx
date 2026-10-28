import type { FC } from 'react';
import { Typography } from 'antd';
import cn from 'classnames';

import { IconClock, IconPrimaryCheck } from '@shared/assets';

import styles from './application-timeline.module.scss';

const { Text } = Typography;

interface ITimelineStep {
  step: number;
  title: string;
  subtitle: string;
  status: 'done' | 'active' | 'pending';
}

const TIMELINE_STEPS: ITimelineStep[] = [
  {
    step: 1,
    title: 'Ariza qabul qilindi',
    subtitle: '12:32, 12.01.2026',
    status: 'done',
  },
  {
    step: 2,
    title: "Hududiy bo'limga yo'naltirildi",
    subtitle: "Toshkent viloyati yo'l distansiyasi",
    status: 'done',
  },
  {
    step: 3,
    title: 'Dalolatnoma shakllantirildi',
    subtitle: 'Kutilmoqda',
    status: 'active',
  },
  {
    step: 4,
    title: 'Texnik-shart berildi',
    subtitle: 'Kutilmoqda',
    status: 'pending',
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

const ApplicationsTimeline: FC = () => {
  return (
    <div className={styles['applications-timeline']}>
      <div className={styles['applications-timeline__wrapper']}>
        <ul className={styles['applications-timeline__list']}>
          {TIMELINE_STEPS.map((item, index) => (
            <li
              key={item.step}
              className={
                cn(
                  styles['applications-timeline__item'],
                  styles[`applications-timeline__item--${item.status}`],
                )
              }
            >
              <div className={styles['applications-timeline__indicator']}>
                {item.status === 'done' ? (
                  <IconPrimaryCheck />
                ) : (
                  <div className={styles['applications-timeline__dot-number']}>{item.step}</div>
                )}
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className={styles['applications-timeline__line']} />
                )}
              </div>
              <div className={styles['applications-timeline__content']}>
                <Text className={styles['applications-timeline__title']}>{item.title}</Text>
                <div className={styles['applications-timeline__subtitle-row']}>
                  {item.status !== 'done' && (
                    <IconClock />
                  )}
                  <Text className={styles['applications-timeline__subtitle']}>{item.subtitle}</Text>
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
