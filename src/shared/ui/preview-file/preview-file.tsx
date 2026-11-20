import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import cn from 'classnames';

import type { IPreviewFile } from '@shared/types';
import { IconDownload, IconEye, IconFile, IconTrash } from '@shared/assets';
import { downloadFile } from '@shared/utils';

import styles from './preview-file.module.scss';

export interface IPreviewFileProps {
  file: IPreviewFile;
  onDownload?: () => void;
  isDownload?: boolean;
  onView?: () => void;
  isView?: boolean;
  onDelete?: () => void;
  isDelete?: boolean;
}

const PreviewFile: FC<IPreviewFileProps> = ({
  file,
  onDownload,
  isDownload,
  onView,
  isView,
  onDelete,
  isDelete,
}) => {
  const { t } = useTranslation();

  const handleView = () => {
    onView?.();
  };

  const handleDownload = (url: string, name: string) => {
    downloadFile(url, name);
    onDownload?.();
  };

  const handleDelete = () => {
    onDelete?.();
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
            onClick={handleView}
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
        {isDelete && (
          <Button
            className={cn(styles['preview-file__button'], styles['preview-file__button--delete'])}
            icon={<IconTrash />}
            onClick={handleDelete}
          >
            {t('actions.delete')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PreviewFile;
