import { memo, type FC } from 'react';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

import { userStatusTagConfig } from '../model/config/user-status';
import type { TUserStatus } from '../model/types/user-status';

export interface IUserStatusTagProps {
  status: TUserStatus;
  className?: string;
}

export const UserStatusTag: FC<IUserStatusTagProps> = memo(({ status, className }) => {
  const { t } = useTranslation();
  const config = userStatusTagConfig[status];

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
});

UserStatusTag.displayName = 'UserStatusTag';

export default UserStatusTag;
