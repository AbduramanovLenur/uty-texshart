import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

import { Sidebar } from '@widgets/sidebar';

const RootLayout: FC = () => {
  return (
    <div className='wrapper'>
      <div className='horizontal padded'>
        <Sidebar />
        <div className='content'>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
