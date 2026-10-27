import { Select, Typography } from 'antd';
import type { FC, ReactNode } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './e-imzo-auth.module.scss';

const { Title } = Typography;

type CertificateOption = {
  value: string;
  label: string;
  card: ReactNode;
};

const EImzoAuth: FC = () => {
  const { t } = useTranslation();
  const state = true;

  const options: CertificateOption[] = [
    {
      label: 'Tech Innovations LLC',
      card: (
        <div className={styles['e-imzo-auth__label']}>
          <Title className={styles['e-imzo-auth__name']} level={5}>
            Tech Innovations LLC
          </Title>
          <div className={styles['e-imzo-auth__information']}>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.director')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  Khamidov R.
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.pinfl')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  321 654 987 012
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.type')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  {t('authentication.eImzo.legalEntity')}
                </div>
              </div>
            </div>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.certificate')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  EF32165498700
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.validityPeriod')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  30.12.2025
                </div>
              </div>
              <div className={styles['e-imzo-auth__status']}>
                ({t('authentication.eImzo.expired')})
              </div>
            </div>
          </div>
        </div>
      ),
      value: '0',
    },
    {
      label: 'Future Solutions LLC',
      card: (
        <div className={styles['e-imzo-auth__label']}>
          <Title className={styles['e-imzo-auth__name']} level={5}>
            Future Solutions LLC
          </Title>
          <div className={cn(styles['e-imzo-auth__information'], state && styles['e-imzo-auth__information-disabled'])}>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.director')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  Saidov B.
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.pinfl')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  123 456 789 012
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.type')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  {t('authentication.eImzo.legalEntity')}
                </div>
              </div>
            </div>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.certificate')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  CD98765432100
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.validityPeriod')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  30.12.2025
                </div>
              </div>
              <div className={styles['e-imzo-auth__status']}>
                ({t('authentication.eImzo.expired')})
              </div>
            </div>
          </div>
        </div>
      ),
      value: '1',
    },
    {
      label: 'Global Trade LLC',
      card: (
        <div className={styles['e-imzo-auth__label']}>
          <Title className={styles['e-imzo-auth__name']} level={5}>
            Global Trade LLC
          </Title>
          <div className={styles['e-imzo-auth__information']}>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.director')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  Khamidov R.
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.pinfl')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  321 654 987 012
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.type')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  {t('authentication.eImzo.legalEntity')}
                </div>
              </div>
            </div>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.certificate')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  EF32165498700
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.validityPeriod')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  30.12.2025
                </div>
              </div>
              <div className={styles['e-imzo-auth__status']}>
                ({t('authentication.eImzo.expired')})
              </div>
            </div>
          </div>
        </div>
      ),
      value: '2',
    },
    {
      label: 'Jumayev T.',
      card: (
        <div className={styles['e-imzo-auth__label']}>
          <Title className={styles['e-imzo-auth__name']} level={5}>
            Jumayev T.
          </Title>
          <div className={styles['e-imzo-auth__information']}>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.pinfl')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  1234 5678 9012 3456 78
                </div>
              </div>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.type')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  {t('authentication.eImzo.individual')}
                </div>
              </div>
            </div>
            <div className={styles['e-imzo-auth__column']}>
              <div className={styles['e-imzo-auth__item']}>
                <div className={styles['e-imzo-auth__title']}>
                  {t('authentication.eImzo.validityPeriod')}:&nbsp;
                </div>
                <div className={styles['e-imzo-auth__value']}>
                  30.12.2025
                </div>
              </div>
              <div className={styles['e-imzo-auth__status']}>
                ({t('authentication.eImzo.expired')})
              </div>
            </div>
          </div>
        </div>
      ),
      value: '3',
    },
  ];

  return (
    <Select
      classNames={{
        root: styles['e-imzo-auth__select'],
        popup: {
          root: styles['e-imzo-auth__popup'],
          list: styles['e-imzo-auth__popup-list'],
          listItem: styles['e-imzo-auth__popup-item'],
        },
      }}
      options={options}
      optionRender={(option) => option.data.card}
      suffixIcon={
        <svg width='12' height='12' viewBox='0 0 12 12'>
          <use href='/images/svg/sprite.svg#icon-down-arrow' />
        </svg>
      }
      placeholder={t('authentication.eImzo.chooseKey')}
      virtual={false}
      allowClear
    />
  );
};

export default EImzoAuth;
