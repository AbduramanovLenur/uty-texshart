import {
  useState,
  useRef,
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
  size?: number;
}

const AvatarUpload: FC<IAvatarUploadProps> = ({
  value,
  defaultValue = null,
  onChange,
  initials = 'NW',
  className,
  size,
}) => {
  const { t } = useTranslation();
  const [internalImage, setInternalImage] = useState<string | null>(defaultValue);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isControlled = value !== undefined;
  const currentImage = isControlled ? value : internalImage;

  const updateImage = (nextImage: string | null) => {
    if (!isControlled) {
      setInternalImage(nextImage);
    }
    onChange?.(nextImage);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateImage(url);
    }
    e.target.value = '';
  };

  const handleClick = () => {
    if (!currentImage) {
      fileInputRef.current?.click();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!currentImage && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  const handlePreview = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentImage) {
      setIsPreviewOpen(true);
    }
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateImage(null);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (currentImage) return;
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (currentImage) return;
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      updateImage(url);
    }
  };

  const containerStyle = size ? { width: size, height: size } : undefined;

  return (
    <>
      <div
        className={cn(
          styles['avatar-upload'],
          {
            [styles['avatar-upload--uploaded']]: Boolean(currentImage),
            [styles['avatar-upload--unloaded']]: !currentImage,
            [styles['avatar-upload--dragging']]: isDragging,
          },
          className,
        )}
        style={containerStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role={!currentImage ? 'button' : undefined}
        tabIndex={!currentImage ? 0 : undefined}
        aria-label={!currentImage ? t('profile.upload', 'Yuklash') : undefined}
      >
        <div className={styles['avatar-upload__inner']}>
          {currentImage ? (
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
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      {currentImage && (
        <div className={styles['avatar-upload__preview-hidden']}>
          <Image
            src={currentImage}
            preview={{
              visible: isPreviewOpen,
              src: currentImage,
              onVisibleChange: (visible) => setIsPreviewOpen(visible),
            }}
          />
        </div>
      )}
    </>
  );
};

export default AvatarUpload;
