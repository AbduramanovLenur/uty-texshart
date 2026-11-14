import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import cn from 'classnames';

import type { IPreviewFile } from '@/entities/application';
import { IconDownload, IconFile } from '@shared/assets';
import { downloadFile } from '@shared/utils';

import styles from './preview-file.module.scss';

interface IProps {
  file: IPreviewFile;
};

const PreviewFile: FC<IProps> = ({ file }) => {
  const { t } = useTranslation();

  const handleDownload = (url: string, name: string) => {
    downloadFile(url, name);
  };

  return (
    <div className={cn(styles['preview-file'])}>
      <div className={cn(styles['preview-file__content'])}>
        <div className={cn(styles['preview-file__icon'])}>
          <IconFile />
        </div>
        <div className={cn(styles['preview-file__wrapper'])}>
          <div className={cn(styles['preview-file__name'])}>
            {file.name}
          </div>
          <div className={cn(styles['preview-file__info'])}>
            {file.extensionFile} ({file.size})
          </div>
        </div>
      </div>
      <Button
        className={cn(styles['preview-file__button'])}
        icon={<IconDownload />}
        onClick={() => handleDownload(file.url, file.name)}
      >
        {t('actions.downloadFile')}
      </Button>
    </div>
  );
};

export default PreviewFile;
