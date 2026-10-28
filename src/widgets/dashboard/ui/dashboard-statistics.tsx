import type { FC } from 'react';

import { StatusCard, type IStatusCard } from '@entities/statistics';
import {
  IconBook,
  IconCheckFile,
  IconCircleArrow,
  IconConstruction,
  IconDataWrong,
  IconDone,
  IconEdit,
  IconTrophy,
} from '@shared/assets';

import styles from './dashboard-statistics.module.scss';

const DashboardStatistics: FC = () => {
  const stats: IStatusCard[] = [
    {
      title: 'Qoralama',
      count: 45,
      icon: <IconEdit />,
    },
    {
      title: 'Qabul qilindi',
      count: 8,
      icon: <IconDone />,
    },
    {
      title: 'Yo‘naltirildi',
      count: 23,
      icon: <IconCircleArrow />,
    },
    {
      title: 'Dalolatnoma tuzildi',
      count: 31,
      icon: <IconCheckFile />,
    },
    {
      title: 'Texnik shart berildi',
      count: 124,
      icon: <IconBook />,
    },
    {
      title: 'Qurilish jarayonida',
      count: 65,
      icon: <IconConstruction />,
    },
    {
      title: 'Muvaffaqiyatli',
      count: 25,
      icon: <IconTrophy />,
    },
    {
      title: 'Rad qilindi',
      count: 11,
      icon: <IconDataWrong />,
    },
  ];

  return (
    <ul className={styles['dashboard-statistics']}>
      {stats.map((item) => (
        <li className={styles['dashboard-statistics__item']} key={item.title}>
          <StatusCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default DashboardStatistics;
