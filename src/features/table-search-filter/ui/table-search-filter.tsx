import type { FC } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import type { TFilterDropdownControls } from '@shared/types';

import styles from './table-search-filter.module.scss';

interface IProps extends TFilterDropdownControls {
  placeholder: string;
  clearLabel: string;
  searchLabel: string;
}

const TableSearchFilter: FC<IProps> = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  placeholder,
  clearLabel,
  searchLabel,
}) => {
  const [search] = selectedKeys as string[];

  const handleChange = (value: string) => {
    setSelectedKeys(value ? [value] : []);
  };

  const handleClear = () => {
    clearFilters?.();
    confirm();
  };

  return (
    <div className={styles['table-search-filter']}>
      <Input
        className={styles['table-search-filter__input']}
        placeholder={placeholder}
        value={search}
        onChange={(event) => handleChange(event.target.value)}
        onPressEnter={() => confirm()}
      />
      <div className={styles['table-search-filter__buttons']}>
        <Button onClick={handleClear} size='small'>
          {clearLabel}
        </Button>
        <Button
          type='primary'
          onClick={() => confirm()}
          icon={<SearchOutlined />}
          size='small'
        >
          {searchLabel}
        </Button>
      </div>
    </div>
  );
};

export default TableSearchFilter;
