import type { FC } from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { communicationRegisterStatusTagConfig } from '../model/config/communication-register-status';
import type { TStatus } from '@shared/types';

export interface IProps {
  status: TStatus;
  className?: string;
}

export const CommunicationRegisterStatusTag: FC<IProps> = ({ status, className }) => {
  const { t } = useTranslation();
  const config = communicationRegisterStatusTagConfig[status];

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

export default CommunicationRegisterStatusTag;
