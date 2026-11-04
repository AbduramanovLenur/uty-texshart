import type { FC } from 'react';
import cn from 'classnames';
import { Button, Typography } from 'antd';

import { IconDownload } from '@shared/assets';

import styles from './incoming-applications.module.scss';

const { Title } = Typography;

const IncomingApplications: FC = () => {
  return (
    <section className={cn(styles['incoming-applications'], 'section')}>
      <div className={cn(styles['incoming-applications__inner'], 'section-inner')}>
        <div className={styles['incoming-applications__top']}>
          <Title className={styles['incoming-applications__title']} level={3}>
            Arizalar
          </Title>
          <Button
            className={styles['user-applications__download']}
            type='default'
            icon={<IconDownload />}
          >
            Yuklab olish
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IncomingApplications;
