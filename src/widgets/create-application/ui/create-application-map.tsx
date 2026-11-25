import type { FC } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';

import { Map } from '@features/map';

import { validateCoordinates } from '../model/lib/helpers/validators';
import { FormFields } from '../model/constants/form-fields';

import styles from './create-application-map.module.scss';

const { Item } = Form;

interface ICreateApplicationMapProps {
  isActive?: boolean;
}

const CreateApplicationMap: FC<ICreateApplicationMapProps> = ({
  isActive = true,
}) => {
  const { t } = useTranslation();

  return (
    <Item
      className={styles['create-application-map']}
      name={FormFields.COORDINATES}
      rules={
        isActive
          ? [
              {
                required: true,
                validator: validateCoordinates(t),
              },
            ]
          : []
      }
    >
      <Map />
    </Item>
  );
};

export default CreateApplicationMap;
