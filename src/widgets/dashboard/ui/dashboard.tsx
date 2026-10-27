import type { FC } from 'react';
import { Typography } from 'antd';
import cn from 'classnames';

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

import styles from './dashboard.module.scss';

const { Title } = Typography;

const Dashboard: FC = () => {
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
    <section className={cn(styles['dashboard'], 'section')}>
      <div className={styles['dashboard__inner']}>
        <Title className={styles['dashboard__title']} level={3}>
          Asosiy sahifa
        </Title>
        <ul className={styles['dashboard__list']}>
          {stats.map((item) => (
            <li className={styles['dashboard__item']} key={item.title}>
              <StatusCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
