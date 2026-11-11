import type { ChangeEvent, FC } from 'react';
import { Input, Space } from 'antd';

import { PHONE_COUNTRY_CODE } from '../model/constants/register';
import { formatUzPhone } from '../model/lib/utils/phone';

interface IPhoneInputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const PhoneInput: FC<IPhoneInputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(formatUzPhone(event.target.value));
  };

  return (
    <Space.Compact className={className} size='large' block>
      <Space.Addon>{PHONE_COUNTRY_CODE}</Space.Addon>
      <Input
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={12}
        inputMode='numeric'
      />
    </Space.Compact>
  );
};

export default PhoneInput;
