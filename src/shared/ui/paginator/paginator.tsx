import { Pagination } from 'antd';
import type { FC } from 'react';

import { itemRender } from './item-render';

import { IconDownArrow } from '@shared/assets';

import styles from './paginator.module.scss';

interface IProps {
  total: number;
  page: number;
  limit: number;
  onChange: (page: number, limit: number) => void;
  align?: 'start' | 'center' | 'end';
  summary?: string;
}

const Paginator: FC<IProps> = ({
  total,
  page,
  limit,
  onChange,
  align = 'center',
  summary,
}) => {
  return (
    <Pagination
      className={styles['paginator']}
      current={page}
      total={total}
      pageSize={limit}
      onChange={onChange}
      showTotal={() => summary}
      itemRender={itemRender}
      align={align}
      showSizeChanger={{
        suffixIcon: <IconDownArrow />,
      }}
    />
  );
};

export default Paginator;
