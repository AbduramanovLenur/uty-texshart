import { Select } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { IconDownArrow } from '@shared/assets';

import { certificateOptions } from '../model/config/certificate-options';

import CertificateCard from './certificate-card';
import styles from './e-imzo.module.scss';

interface IEImzoProps {
  className?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

const EImzo: FC<IEImzoProps> = ({ className, value, onChange }) => {
  const { t } = useTranslation();

  return (
    <Select
      classNames={{
        root: cn(styles['e-imzo__select'], className),
        popup: {
          root: styles['e-imzo__popup'],
          list: styles['e-imzo__popup-list'],
          listItem: styles['e-imzo__popup-item'],
        },
      }}
      value={value}
      onChange={onChange}
      options={certificateOptions}
      optionRender={(option) => <CertificateCard option={option.data} />}
      suffixIcon={<IconDownArrow />}
      placeholder={t('authentication.eImzo.chooseKey')}
      virtual={false}
      allowClear
    />
  );
};

export default EImzo;
