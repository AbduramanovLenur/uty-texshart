import type { FC } from 'react';
import { Button, TimePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs, { type Dayjs } from 'dayjs';
import cn from 'classnames';

import type { TFilterDropdownControls } from '@shared/types';

import styles from './table-time-filter.module.scss';

interface IProps extends TFilterDropdownControls {
  format?: string;
  clearLabel: string;
  searchLabel: string;
  placeholder?: string;
}

const TableTimeFilter: FC<IProps> = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  format = 'HH:mm',
  clearLabel,
  searchLabel,
  placeholder,
}) => {
  const [time] = selectedKeys as string[];

  const handleChange = (timeValue: Dayjs | null) => {
    if (timeValue) {
      setSelectedKeys([timeValue.format(format)]);
      return;
    }

    setSelectedKeys([]);
  };

  const handleClear = () => {
    clearFilters?.();
    confirm();
  };

  return (
    <div className={cn(styles['table-time-filter'])}>
      <TimePicker
        className={cn(styles['table-time-filter__picker'])}
        format={format}
        value={time ? dayjs(time, format) : null}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div className={cn(styles['table-time-filter__buttons'])}>
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

export default TableTimeFilter;
