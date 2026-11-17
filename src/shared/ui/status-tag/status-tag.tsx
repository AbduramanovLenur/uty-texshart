import type { FC } from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { statusTagConfig } from '../../config/settings/status-tag';
import type { TStatus } from '../../types/status';

interface IProps {
  status: TStatus;
  className?: string;
}

export const StatusTag: FC<IProps> = ({ status, className }) => {
  const { t } = useTranslation();
  const config = statusTagConfig[status];

  if (!config) {
    return <Tag className={cn(className)}>{status}</Tag>;
  }

  return (
    <Tag
      className={cn(className)}
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

export default StatusTag;
