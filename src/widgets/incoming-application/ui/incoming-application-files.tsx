import type { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { previewFilesMock } from '../model/mock';

import { PreviewFile } from '@features/preview-file';
import { open as openViewPdfModal } from '@features/view-pdf-modal';

import styles from './incoming-application-files.module.scss';

const IncomingApplicationFiles: FC = () => {
  const dispatch = useDispatch();

  const handleOpenPdf = (url: string) => {
    dispatch(openViewPdfModal({ url }));
  };

  return (
    <div className={cn(styles['incoming-application-files'])}>
      <div className={cn(styles['incoming-application-files__content'])}>
        <ul className={cn(styles['incoming-application-files__list'], 'scrollbar')}>
          {previewFilesMock.map((file) => (
            <li key={file.name} className={cn(styles['incoming-application-files__item'])}>
              <PreviewFile
                file={file}
                isDownload
                isView
                onView={() => handleOpenPdf(file.url)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncomingApplicationFiles;
