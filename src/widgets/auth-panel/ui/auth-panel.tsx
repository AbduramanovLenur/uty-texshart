import { LanguageSwitcher } from '@features/language-switcher';

import styles from './auth-panel.module.scss';

const AuthPanel = () => {
  return (
    <div className={styles['auth-panel']}>
      <div className={styles['auth-panel__top']}>
        <div className='auth-panel__logo-project'>
          <img
            src='/images/svg/logo-project.svg'
            alt='logo'
            loading='lazy'
            width={200}
            height={50}
          />
        </div>
        <LanguageSwitcher />
      </div>
      <div className={styles['auth-panel__body']}></div>
      <div className={styles['auth-panel__copyright']}>
        © 2026 O’zbekiston Temir Yo‘llari Tex-Shart
      </div>
    </div>
  );
};

export default AuthPanel;
