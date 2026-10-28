import type { FC } from 'react';
import { Typography, Button } from 'antd';

import { ApplicationPreview, type IApplicationPreview } from '@entities/applications';
import { IconPlus } from '@shared/assets';

import styles from './recent-applications.module.scss';

const { Title } = Typography;

const RecentApplications: FC = () => {
  const applications: IApplicationPreview[] = [
    {
      id: 1,
      code: 'AR-2026-000008',
      type: 'oil_pipeline',
      title: 'Neft / neft mahsulotlari quvuri',
      subtitle: 'Samarkand-3-Kushbegi, 5230 km, 5pk',
      icon: '/images/test/oil.svg',
      active: true,
    },
    {
      id: 2,
      code: 'AR-2026-000009',
      type: 'power_line',
      title: 'Havo elektr uzatish liniyasi',
      subtitle: 'Samarkand-Bukhara, 120 km, 2pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 3,
      code: 'AR-2026-000012',
      type: 'fiber_optic',
      title: 'Optik tolali aloqa kabeli',
      subtitle: 'Tashkent-Khiva, 600 km, 1pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 4,
      code: 'AR-2026-000010',
      type: 'gas_pipeline',
      title: 'Gaz quvuri',
      subtitle: 'Tashkent-Samarkand, 300 km, 5pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 5,
      code: 'AR-2026-000011',
      type: 'sewage_pipeline',
      title: 'Kanalizatsiya quvuri',
      subtitle: 'Bukhara-Nukus, 540 km, 4pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 6,
      code: 'AR-2026-000011',
      type: 'oil_pipeline',
      title: 'Neft / neft mahsulotlari quvuri',
      subtitle: 'Samarkand-3-Kushbegi, 5230 km, 5pk',
      icon: '/images/test/oil.svg',
    },
  ];

  return (
    <div className={styles['recent-applications']}>
      <div className={styles['recent-applications__top']}>
        <Title className={styles['recent-applications__title']} level={4}>
          Oxirgi arizalar
        </Title>
        <Button className={styles['recent-applications__button']} icon={<IconPlus />}>
          Yangi ariza
        </Button>
      </div>
      <ul className={styles['recent-applications__list']}>
        {applications.map((item) => (
          <li key={item.id} className={styles['recent-applications__item']}>
            <ApplicationPreview item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentApplications;
