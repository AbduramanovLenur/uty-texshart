import type { FC } from 'react';
import { Button, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IPreviewFile } from '@shared/types';
import { IconUploadOutlined } from '@shared/assets';
import { formatFileSize } from '@shared/utils';
import PreviewFile from '../preview-file/preview-file';

import styles from './upload-file-field.module.scss';

export interface IProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
  accept?: string;
  beforeUpload?: (file: File) => boolean;
  className?: string;
  buttonText?: string;
}

export const UploadFileField: FC<IProps> = ({
  value,
  onChange,
  accept,
  beforeUpload,
  className,
}) => {
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

  const handleBeforeUpload: UploadProps['beforeUpload'] = (file) => {
    if (beforeUpload && !beforeUpload(file)) {
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
      accept={accept}
      beforeUpload={handleBeforeUpload}
      showUploadList={false}
      maxCount={1}
    >
      <Button
        className={cn(styles['upload-file-field__btn'], className)}
        icon={<IconUploadOutlined />}
      >
        {t('actions.upload')}
      </Button>
    </Upload>
  );
};

export default UploadFileField;
