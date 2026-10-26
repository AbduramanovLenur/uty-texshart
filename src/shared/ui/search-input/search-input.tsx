import { Input } from 'antd';
import type { FC } from 'react';
import cn from 'classnames';

import styles from './search-input.module.scss';

const { Search } = Input;

interface IProps {
  className?: string;
  placeholder?: string;
}

const SearchInput: FC<IProps> = ({ className, placeholder }) => {
  return (
    <Search
      className={cn(styles['search-input'], className)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
