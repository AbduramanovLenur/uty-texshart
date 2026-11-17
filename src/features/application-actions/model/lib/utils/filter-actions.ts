import { actionsConfig } from '../../config/actions-config';
import type { IApplicationActionConfig } from '../../types/action';
import type { IActionParams } from '../../types/action-params';

export const filterActions = ({ actions }: IActionParams): IApplicationActionConfig[] => {
  if (!actions.length) {
    return [];
  }

  const actionKeys = actions.map((item) => {
    return (item.name ?? '').toUpperCase();
  });

  return actionsConfig.filter((action) => actionKeys.includes(action.key));
};
