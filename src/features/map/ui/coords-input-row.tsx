import { useState, type FC, type ChangeEvent } from 'react';
import { Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';

import { parseCoords } from '../model/lib/utils/parse-coords';

import styles from './coords-input-row.module.scss';

interface IProps {
  initialValue: string;
  onApplyManualCoords: (coords: [number, number]) => void;
}

const CoordsInputRow: FC<IProps> = ({
  initialValue,
  onApplyManualCoords,
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(initialValue);

  const handleApply = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    const coords = parseCoords(trimmed);
    if (coords) {
      onApplyManualCoords(coords);
      return;
    }

    message.error(t('map.invalidCoordinates'));
  };

  return (
    <div className={styles['coords-input-row']}>
      <Input
        value={value}
        placeholder={t('map.coordinatesPlaceholder')}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        onPressEnter={handleApply}
        allowClear
        size='large'
      />
      <Button
        type='primary'
        className={styles['coords-input-row__locate-btn']}
        onClick={handleApply}
        size='large'
      >
        {t('map.locate')}
      </Button>
    </div>
  );
};

export default CoordsInputRow;
