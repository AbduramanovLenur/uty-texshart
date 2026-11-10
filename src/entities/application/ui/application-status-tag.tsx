import type { FC } from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

import { applicationStatusTagConfig } from '../model/config/application-status';

import type { TStatus } from '@shared/types';

export interface IProps {
  status: TStatus;
  className?: string;
}

export const ApplicationStatusTag: FC<IProps> = ({ status, className }) => {
  const { t } = useTranslation();
  const config = applicationStatusTagConfig[status];

  if (!config) {
    return <Tag className={className}>{status}</Tag>;
  }

  return (
    <Tag
      className={className}
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.borderColor}`,
      }}
    >
      {t(config.labelKey)}
    </Tag>
  );
};

export default ApplicationStatusTag;
