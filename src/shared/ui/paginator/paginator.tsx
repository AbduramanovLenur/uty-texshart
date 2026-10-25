import { Pagination } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import { useEffect } from 'react';
import type { FC } from 'react';

import { useQueryParams } from '@shared/lib';
import { queries, defaultValues } from '@shared/config';
import { parsePositiveInt } from '@shared/utils';

import { itemRender } from './item-render';
import styles from './paginator.module.scss';

interface IProps {
  total: number;
  defaultCurrent?: number;
  align?: 'start' | 'center' | 'end';
  pageSize?: number;
  summary?: string;
}

const Paginator: FC<IProps> = ({
  total,
  defaultCurrent = defaultValues.PAGE,
  align = 'center',
  pageSize = defaultValues.LIMIT,
  summary,
}) => {
  const { setMany, get } = useQueryParams();
  const pageFromUrl = parsePositiveInt(get(queries.PAGE));
  const limitFromUrl = parsePositiveInt(get(queries.LIMIT));

  const page = pageFromUrl ?? defaultCurrent;
  const limit = limitFromUrl ?? pageSize;

  useEffect(() => {
    const params: Record<string, number> = {};

    if (pageFromUrl === null) {
      params[queries.PAGE] = defaultCurrent;
    }

    if (limitFromUrl === null) {
      params[queries.LIMIT] = pageSize;
    }

    if (Object.keys(params).length > 0) {
      setMany(params);
    }
  }, [pageFromUrl, limitFromUrl, defaultCurrent, pageSize, setMany]);

  const handleChange: PaginationProps['onChange'] = (nextPage, nextPageSize) => {
    setMany({
      [queries.PAGE]: nextPage,
      [queries.LIMIT]: nextPageSize,
    });
  };

  return (
    <Pagination
      className={styles['paginator']}
      defaultCurrent={defaultCurrent}
      current={page}
      total={total}
      pageSize={limit}
      onChange={handleChange}
      showTotal={() => summary}
      itemRender={itemRender}
      align={align}
      showSizeChanger={{
        suffixIcon: (
          <img
            src='/images/svg/down-arrow.svg'
            alt='prev'
            loading='lazy'
            width={12}
            height={12}
          />
        ),
      }}
    />
  );
};

export default Paginator;
