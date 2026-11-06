import type { FC } from 'react';
import cn from 'classnames';

import { previewFilesMock } from '../model/mock';

import { PreviewFile } from '@features/preview-file';

import styles from './incoming-application-files.module.scss';

const IncomingApplicationFiles: FC = () => {
  return (
    <div className={styles['incoming-application-files']}>
      <div className={styles['incoming-application-files__content']}>
        <ul className={cn(styles['incoming-application-files__list'], 'scrollbar')}>
          {previewFilesMock.map((file) => (
            <li key={file.name} className={styles['incoming-application-files__item']}>
              <PreviewFile file={file} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncomingApplicationFiles;
