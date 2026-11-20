import type { FC } from 'react';
import { Button, message, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IPreviewFile } from '@shared/types';
import { IconUploadOutlined } from '@shared/assets';
import { PreviewFile } from '@shared/ui';
import { formatFileSize } from '@shared/utils';

import { isZipFile } from '../model/lib/helpers/validators';

import styles from './upload-file-field.module.scss';

interface IProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
}

const UploadFileField: FC<IProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const previewFile: IPreviewFile | null = value
    ? {
        name: value.name.substring(0, value.name.lastIndexOf('.')) || value.name,
        size: formatFileSize(value.size),
        extensionFile: value.name.split('.').pop()?.toUpperCase() ?? 'FILE',
        url: '',
      }
    : null;

  const handleRemoveFile = () => {
    onChange?.(null);
  };

  const handleBeforeUpload = (file: File) => {
    if (!isZipFile(file)) {
      message.error(t('uploadProjectFilesModal.validation.onlyZip'));
      return false;
    }

    onChange?.(file);
    return false;
  };

  if (previewFile) {
    return (
      <PreviewFile
        file={previewFile}
        isDelete
        onDelete={handleRemoveFile}
      />
    );
  }

  return (
    <Upload
      accept='.zip,application/zip,application/x-zip-compressed'
      beforeUpload={handleBeforeUpload}
      showUploadList={false}
      maxCount={1}
    >
      <Button
        className={cn(styles['upload-file-field__btn'])}
        icon={<IconUploadOutlined />}
      >
        {t('actions.upload')}
      </Button>
    </Upload>
  );
};

export default UploadFileField;
