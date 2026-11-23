import { Typography } from 'antd';
import type { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import type { CertificateOption } from '../model/types/certificate-option';

import styles from './certificate-card.module.scss';

const { Title } = Typography;

type Props = {
  option: CertificateOption;
};

const CertificateCard: FC<Props> = ({ option }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Title className={cn(styles['certificate-card__name'])} level={5}>
        {option.label}
      </Title>
      <div
        className={cn(
          styles['certificate-card__information'],
          { [styles['certificate-card__information-disabled']]: option.disabled },
        )}
      >
        <div>
          {option.director && (
            <div className={cn(styles['certificate-card__item'])}>
              <div className={cn(styles['certificate-card__title'])}>
                {t('authentication.eImzo.director')}:&nbsp;
              </div>
              <div className={cn(styles['certificate-card__value'])}>{option.director}</div>
            </div>
          )}
          <div className={cn(styles['certificate-card__item'])}>
            <div className={cn(styles['certificate-card__title'])}>
              {t('authentication.eImzo.pinfl')}:&nbsp;
            </div>
            <div className={cn(styles['certificate-card__value'])}>{option.pinfl}</div>
          </div>
          <div className={cn(styles['certificate-card__item'])}>
            <div className={cn(styles['certificate-card__title'])}>
              {t('authentication.eImzo.type')}:&nbsp;
            </div>
            <div className={cn(styles['certificate-card__value'])}>
              {t(`authentication.eImzo.${option.type}`)}
            </div>
          </div>
        </div>
        <div>
          {option.certificate && (
            <div className={cn(styles['certificate-card__item'])}>
              <div className={cn(styles['certificate-card__title'])}>
                {t('authentication.eImzo.certificate')}:&nbsp;
              </div>
              <div className={cn(styles['certificate-card__value'])}>{option.certificate}</div>
            </div>
          )}
          <div className={cn(styles['certificate-card__item'])}>
            <div className={cn(styles['certificate-card__title'])}>
              {t('authentication.eImzo.validityPeriod')}:&nbsp;
            </div>
            <div className={cn(styles['certificate-card__value'])}>{option.validityPeriod}</div>
          </div>
          <div className={cn(styles['certificate-card__status'])}>
            ({t('authentication.eImzo.expired')})
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
