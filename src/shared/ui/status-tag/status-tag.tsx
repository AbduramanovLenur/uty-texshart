import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { statusTagConfig as defaultStatusTagConfig } from '../../config/settings/status-tag';
import type { IStatusTagConfig } from '../../types/status-tag';
import type { TStatus } from '../../types/status';

interface IProps<T extends string | number = TStatus> {
  status: T;
  config?: Record<T, IStatusTagConfig>;
  className?: string;
}

export const StatusTag = <T extends string | number = TStatus>({
  status,
  config = defaultStatusTagConfig as unknown as Record<T, IStatusTagConfig>,
  className,
}: IProps<T>) => {
  const { t } = useTranslation();
  const itemConfig = config?.[status];

  if (!itemConfig) {
    return <Tag className={cn(className)}>{status}</Tag>;
  }

  return (
    <Tag
      className={cn(className)}
      style={{
        backgroundColor: itemConfig.bg,
        color: itemConfig.color,
        border: `1px solid ${itemConfig.borderColor}`,
      }}
    >
      {t(itemConfig.labelKey)}
    </Tag>
  );
};

export default StatusTag;
