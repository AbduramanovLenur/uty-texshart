import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const stats: IStatusCard[] = [
    {
      title: t('dashboard.statistics.draft'),
      count: 45,
      icon: <IconEdit />,
    },
    {
      title: t('dashboard.statistics.accepted'),
      count: 8,
      icon: <IconDone />,
    },
    {
      title: t('dashboard.statistics.forwarded'),
      count: 23,
      icon: <IconCircleArrow />,
    },
    {
      title: t('dashboard.statistics.actCreated'),
      count: 31,
      icon: <IconCheckFile />,
    },
    {
      title: t('dashboard.statistics.technicalConditionsIssued'),
      count: 124,
      icon: <IconBook />,
    },
    {
      title: t('dashboard.statistics.inConstruction'),
      count: 65,
      icon: <IconConstruction />,
    },
    {
      title: t('dashboard.statistics.successful'),
      count: 25,
      icon: <IconTrophy />,
    },
    {
      title: t('dashboard.statistics.rejected'),
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
