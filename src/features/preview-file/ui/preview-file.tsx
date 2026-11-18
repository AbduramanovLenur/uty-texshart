import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import cn from 'classnames';

import type { IPreviewFile } from '@/entities/application';
import { IconDownload, IconEye, IconFile } from '@shared/assets';
import { downloadFile } from '@shared/utils';

import styles from './preview-file.module.scss';

interface IProps {
  file: IPreviewFile;
  onDownload?: () => void;
  isDownload?: boolean;
  onView?: () => void;
  isView?: boolean;
};

const PreviewFile: FC<IProps> = ({
  file,
  onDownload,
  isDownload,
  onView,
  isView,
}) => {
  const { t } = useTranslation();

  const handleView = () => {
    onView?.();
  };

  const handleDownload = (url: string, name: string) => {
    downloadFile(url, name);
    onDownload?.();
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
      <div className={cn(styles['preview-file__actions'])}>
        {isView && (
          <Button
            className={cn(styles['preview-file__button'])}
            icon={<IconEye />}
            onClick={() => handleDownload(file.url, file.name)}
          >
            {t('actions.view')}
          </Button>
        )}
        {isDownload && (
          <Button
            className={cn(styles['preview-file__button'])}
            icon={<IconDownload />}
            onClick={() => handleDownload(file.url, file.name)}
          >
            {t('actions.downloadFile')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PreviewFile;
