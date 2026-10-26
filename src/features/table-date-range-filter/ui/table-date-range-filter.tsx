import type { FC } from 'react';
import { Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import type { TFilterDropdownControls, TRangeValue } from '@shared/types';

import styles from './table-date-range-filter.module.scss';

const { RangePicker } = DatePicker;

interface IProps extends TFilterDropdownControls {
  displayFormat: string;
  valueFormat: string;
  clearLabel: string;
  searchLabel: string;
}

const TableDateRangeFilter: FC<IProps> = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  displayFormat,
  valueFormat,
  clearLabel,
  searchLabel,
}) => {
  const [from, to] = selectedKeys as string[];

  const handleChange = (dates: TRangeValue) => {
    if (dates?.[0] && dates?.[1]) {
      setSelectedKeys([
        dates[0].format(valueFormat),
        dates[1].format(valueFormat),
      ]);
      return;
    }

    setSelectedKeys([]);
  };

  const handleClear = () => {
    clearFilters?.();
    confirm();
  };

  return (
    <div className={styles['table-date-range-filter']}>
      <RangePicker
        className={styles['table-date-range-filter__picker']}
        format={displayFormat}
        value={from && to ? [dayjs(from), dayjs(to)] : null}
        onChange={handleChange}
      />
      <div className={styles['table-date-range-filter__buttons']}>
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

export default TableDateRangeFilter;
