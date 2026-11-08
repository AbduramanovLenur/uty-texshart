import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import {
  ApplicationPreview,
  NetworkTypes,
  type IApplicationPreview,
} from '@entities/applications';
import { routes } from '@shared/config';
import { IconPlus } from '@shared/assets';

import styles from './recent-applications.module.scss';

const { Title } = Typography;

const RecentApplications: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const applications: IApplicationPreview[] = [
    {
      id: 1,
      code: 'AR-2026-000008',
      type: NetworkTypes.OIL_PIPELINE,
      title: 'Neft / neft mahsulotlari quvuri',
      subtitle: 'Samarkand-3-Kushbegi, 5230 km, 5pk',
      icon: '/images/test/oil.svg',
      active: true,
    },
    {
      id: 2,
      code: 'AR-2026-000009',
      type: NetworkTypes.POWER_LINE,
      title: 'Havo elektr uzatish liniyasi',
      subtitle: 'Samarkand-Bukhara, 120 km, 2pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 3,
      code: 'AR-2026-000012',
      type: NetworkTypes.FIBER_OPTIC,
      title: 'Optik tolali aloqa kabeli',
      subtitle: 'Tashkent-Khiva, 600 km, 1pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 4,
      code: 'AR-2026-000010',
      type: NetworkTypes.GAS_PIPELINE,
      title: 'Gaz quvuri',
      subtitle: 'Tashkent-Samarkand, 300 km, 5pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 5,
      code: 'AR-2026-000011',
      type: NetworkTypes.SEWAGE_PIPELINE,
      title: 'Kanalizatsiya quvuri',
      subtitle: 'Bukhara-Nukus, 540 km, 4pk',
      icon: '/images/test/oil.svg',
    },
    {
      id: 6,
      code: 'AR-2026-000011',
      type: NetworkTypes.OIL_PIPELINE,
      title: 'Neft / neft mahsulotlari quvuri',
      subtitle: 'Samarkand-3-Kushbegi, 5230 km, 5pk',
      icon: '/images/test/oil.svg',
    },
  ];

  const handleCreateApplication = () => {
    navigate(routes.CREATE_APPLICATION());
  };

  return (
    <div className={styles['recent-applications']}>
      <div className={styles['recent-applications__top']}>
        <Title className={styles['recent-applications__title']} level={4}>
          {t('dashboard.recentApplications.title')}
        </Title>
        <Button
          className={styles['recent-applications__button']}
          icon={<IconPlus />}
          onClick={handleCreateApplication}
        >
          {t('dashboard.recentApplications.create')}
        </Button>
      </div>
      <ul className={styles['recent-applications__list']}>
        {applications.map((item) => (
          <li key={item.id} className={styles['recent-applications__item']}>
            <ApplicationPreview item={item} />
          </li>
        ))}
      </ul>
      <div className={styles['recent-applications__bottom']}>
        <Link
          className={styles['recent-applications__link']}
          to={routes.APPLICATIONS}
        >
          {t('dashboard.recentApplications.viewAll')}
        </Link>
      </div>
    </div>
  );
};

export default RecentApplications;
