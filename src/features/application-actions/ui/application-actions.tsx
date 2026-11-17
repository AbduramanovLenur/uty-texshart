import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { filterActions } from '../model/lib/utils/filter-actions';
import type { TApplicationActionHandler, TApplicationActionKey } from '../model/types/action';
import type { IAction } from '../model/types/action-params';

import styles from './application-actions.module.scss';

interface IProps {
  actions: IAction[],
  handlers: Partial<Record<TApplicationActionKey, TApplicationActionHandler>>;
}

const ApplicationActions: FC<IProps> = ({ actions, handlers }) => {
  const { t } = useTranslation();

  const visibleActions = filterActions({ actions });

  if (visibleActions.length === 0) {
    return null;
  }

  const handleClick = (key: TApplicationActionKey) => {
    handlers?.[key]?.(key);
  };

  return (
    <div className={cn(styles['application-actions'])}>
      {visibleActions.map((action) => (
        <Button
          key={action.key}
          className={cn(
            styles['application-actions__btn'],
            { [styles[action.className!]]: action.className },
          )}
          size='large'
          icon={action.icon}
          iconPlacement='end'
          onClick={() => handleClick(action.key)}
        >
          {t(action.labelKey)}
        </Button>
      ))}
    </div>
  );
};

export default ApplicationActions;
