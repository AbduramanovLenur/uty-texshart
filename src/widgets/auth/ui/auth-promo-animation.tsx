import { useCallback, useRef, type FC, type MouseEvent } from 'react';
import cn from 'classnames';

import styles from './auth-promo-animation.module.scss';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
}

const AuthPromoAnimation: FC<IProps> = ({ className }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mx = (x / rect.width) * 2 - 1;
    const my = (y / rect.height) * 2 - 1;

    iframe.contentWindow.postMessage(
      {
        type: 'parent-pointermove',
        mx,
        my,
      },
      '*',
    );
  }, []);

  return (
    <div
      className={cn(styles['auth-promo-animation'], className)}
      onMouseMove={handleMouseMove}
    >
      <iframe
        ref={iframeRef}
        src='/assets/auth-sketch/index.html'
        title='Tex-Shart 3D animation'
        className={styles['auth-promo-animation__frame']}
        allowTransparency
      />
    </div>
  );
};

export default AuthPromoAnimation;
