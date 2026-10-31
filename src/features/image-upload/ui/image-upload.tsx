import { useState, useRef, useEffect, type FC } from 'react';
import { Button, type UploadFile } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import CircleProgress from './circle-progress';
import { uploadStatus } from '../model/status';

import { IconBigPlus, IconPlusImage, IconSmallClose, IconUpload } from '@shared/assets';

import styles from './image-upload.module.scss';

export interface IProps {
  value?: UploadFile[];
  onChange?: (fileList: UploadFile[]) => void;
  accept?: string;
  className?: string;
}

const ImageUpload: FC<IProps> = ({
  value,
  onChange,
  accept = '.jpg,.jpeg,.png',
  className,
}) => {
  const { t } = useTranslation();
  const [internalFileList, setInternalFileList] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeIntervalsRef = useRef<Set<ReturnType<typeof setInterval>>>(new Set());

  // Всегда используем актуальный список файлов
  const fileList = value ?? internalFileList;
  const filesRef = useRef<UploadFile[]>(fileList);

  useEffect(() => {
    filesRef.current = fileList;
  }, [fileList]);

  // Очистка таймеров при размонтировании
  useEffect(() => {
    const intervals = activeIntervalsRef.current;
    return () => {
      intervals.forEach((id) => clearInterval(id));
      intervals.clear();
    };
  }, []);

  const updateFiles = (updater: (prev: UploadFile[]) => UploadFile[]) => {
    const next = updater(filesRef.current);
    filesRef.current = next;
    setInternalFileList(next);
    onChange?.(next);
  };

  const handleOpenFileDialog = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    inputRef.current?.click();
  };

  const processFiles = (newRawFiles: File[]) => {
    const acceptedExtensions = accept.split(',').map((ext) => ext.trim().toLowerCase());
    const imageFiles = newRawFiles.filter((f) => {
      const ext = `.${f.name.split('.').pop()?.toLowerCase()}`;
      return acceptedExtensions.includes(ext) || f.type.startsWith('image/');
    });

    if (imageFiles.length === 0) return;

    const newUploadFiles: UploadFile[] = imageFiles.map((file) => {
      const uid = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const rcFile = Object.assign(file, { uid });

      return {
        uid,
        name: file.name,
        status: uploadStatus.UPLOADING,
        percent: 0,
        thumbUrl: URL.createObjectURL(file),
        originFileObj: rcFile as unknown as UploadFile['originFileObj'],
      };
    });

    // Сразу добавляем новые файлы к актуальному списку
    updateFiles((prev) => [...prev, ...newUploadFiles]);

    // Имитация прогресса загрузки от 0% до 100%
    newUploadFiles.forEach((uploadFile) => {
      let currentPercent = 0;
      const intervalId = setInterval(() => {
        currentPercent += 33;
        if (currentPercent >= 100) {
          clearInterval(intervalId);
          activeIntervalsRef.current.delete(intervalId);
          updateFiles((prev) =>
            prev.map((item) =>
              item.uid === uploadFile.uid
                ? { ...item, status: uploadStatus.DONE, percent: 100 }
                : item,
            ),
          );
        } else {
          updateFiles((prev) =>
            prev.map((item) =>
              item.uid === uploadFile.uid
                ? { ...item, percent: currentPercent }
                : item,
            ),
          );
        }
      }, 200);
      activeIntervalsRef.current.add(intervalId);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
      e.target.value = '';
    }
  };

  const handleRemove = (fileToRemove: UploadFile) => {
    updateFiles((prev) => prev.filter((f) => f.uid !== fileToRemove.uid));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div className={cn(styles['image-upload'], className)}>
      <input
        ref={inputRef}
        type='file'
        accept={accept}
        multiple
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />

      {fileList.length === 0 ? (
        <>
          <div
            className={cn(styles['image-upload__dropzone'], {
              [styles['image-upload__dropzone--dragging']]: isDragging,
            })}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleOpenFileDialog}
          >
            <div className={styles['image-upload__icon']}>
              <IconUpload />
            </div>
            <div className={styles['image-upload__title']}>
              {t('imageUpload.dropzoneTitle')}
            </div>
            <div className={styles['image-upload__subtitle']}>
              {t('imageUpload.dropzoneSubtitle')}
            </div>
          </div>

          <Button
            className={styles['image-upload__button']}
            type='primary'
            htmlType='button'
            icon={<IconPlusImage />}
            onClick={handleOpenFileDialog}
          >
            {t('imageUpload.add')}
          </Button>
        </>
      ) : (
        <div className={styles['image-upload__list']}>
          {fileList.map((file) => {
            const isUploading = file.status === uploadStatus.UPLOADING;
            const isError = file.status === uploadStatus.ERROR;

            return (
              <div
                key={file.uid}
                className={cn(styles['image-upload__item'], {
                  [styles['image-upload__item--error']]: isError,
                })}
              >
                <img
                  src={file.thumbUrl || file.url}
                  alt={file.name}
                  className={styles['image-upload__thumb']}
                />

                {isUploading && (
                  <div className={styles['image-upload__overlay']}>
                    <CircleProgress percent={file.percent ?? 0} />
                  </div>
                )}

                {isError && (
                  <div className={styles['image-upload__overlay-error']}>
                    <span>Server...</span>
                  </div>
                )}

                {!isUploading && (
                  <button
                    type='button'
                    className={styles['image-upload__remove']}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(file);
                    }}
                    title={t('imageUpload.remove')}
                  >
                    <IconSmallClose />
                  </button>
                )}
              </div>
            );
          })}

          <button
            type='button'
            className={styles['image-upload__add']}
            onClick={handleOpenFileDialog}
            title={t('imageUpload.add')}
          >
            <IconBigPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
