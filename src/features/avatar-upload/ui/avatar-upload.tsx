import {
  useState,
  useRef,
  useEffect,
  type FC,
  type ChangeEvent,
  type MouseEvent,
  type KeyboardEvent,
  type DragEvent,
} from 'react';
import { Image } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './avatar-upload.module.scss';

export interface IAvatarUploadProps {
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string | null) => void;
  initials?: string;
  className?: string;
}

const AvatarUpload: FC<IAvatarUploadProps> = ({
  value,
  defaultValue = null,
  onChange,
  initials = 'NW',
  className,
}) => {
  const { t } = useTranslation();
  const [internalImage, setInternalImage] = useState<string | null>(defaultValue);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const blobUrlRef = useRef<string | null>(null);
  const prevDefaultValueRef = useRef(defaultValue);

  const isControlled = value !== undefined;
  const currentImage = isControlled ? value : internalImage;
  const hasImage = Boolean(currentImage);

  const revokeBlobUrl = () => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
  };

  useEffect(() => {
    return revokeBlobUrl;
  }, []);

  useEffect(() => {
    if (!isControlled && defaultValue !== prevDefaultValueRef.current) {
      prevDefaultValueRef.current = defaultValue;
      setInternalImage(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const updateImage = (nextImage: string | null) => {
    if (!isControlled) {
      setInternalImage(nextImage);
    }
    onChange?.(nextImage);
  };

  const handleUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    console.log('file', file);

    revokeBlobUrl();
    const nextUrl = URL.createObjectURL(file);
    blobUrlRef.current = nextUrl;
    updateImage(nextUrl);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
    e.target.value = '';
  };

  const handleOpenFileDialog = () => {
    if (!hasImage) {
      fileInputRef.current?.click();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!hasImage && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleOpenFileDialog();
    }
  };

  const handlePreview = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (hasImage) {
      setIsPreviewOpen(true);
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    revokeBlobUrl();
    updateImage(null);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (hasImage) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (hasImage) return;

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  return (
    <>
      <div
        className={cn(
          styles['avatar-upload'],
          {
            [styles['avatar-upload--uploaded']]: hasImage,
            [styles['avatar-upload--empty']]: !hasImage,
            [styles['avatar-upload--dragging']]: isDragging,
          },
          className,
        )}
        onClick={handleOpenFileDialog}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role={!hasImage ? 'button' : undefined}
        tabIndex={!hasImage ? 0 : undefined}
        aria-label={!hasImage ? t('profile.upload', 'Yuklash') : undefined}
      >
        <div className={styles['avatar-upload__inner']}>
          {hasImage && currentImage ? (
            <>
              <img
                src={currentImage}
                alt='Profile'
                className={styles['avatar-upload__image']}
              />
              <div className={styles['avatar-upload__overlay']}>
                <button
                  type='button'
                  className={styles['avatar-upload__action-btn']}
                  onClick={handlePreview}
                  title={t('actions.view', "Ko'rish")}
                  aria-label={t('actions.view', "Ko'rish")}
                >
                  <EyeOutlined className={styles['avatar-upload__action-icon']} />
                </button>
                <button
                  type='button'
                  className={styles['avatar-upload__action-btn']}
                  onClick={handleDelete}
                  title={t('actions.delete', "O'chirish")}
                  aria-label={t('actions.delete', "O'chirish")}
                >
                  <DeleteOutlined className={styles['avatar-upload__action-icon']} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles['avatar-upload__initials']}>
                {initials}
              </div>
              <div className={styles['avatar-upload__hover-content']}>
                <span className={styles['avatar-upload__plus']}>+</span>
                <span className={styles['avatar-upload__text']}>
                  {t('profile.upload', 'Yuklash')}
                </span>
              </div>
            </>
          )}
        </div>

        <input
          ref={fileInputRef}
          type='file'
          accept='image/png,image/jpeg,image/webp,image/jpg'
          hidden
          onChange={handleFileChange}
        />
      </div>

      {hasImage && currentImage && (
        <div className={styles['avatar-upload__preview']}>
          <Image
            src={currentImage}
            preview={{
              visible: isPreviewOpen,
              onVisibleChange: setIsPreviewOpen,
            }}
          />
        </div>
      )}
    </>
  );
};

export default AvatarUpload;
