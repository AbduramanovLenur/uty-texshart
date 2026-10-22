import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: FC = () => {
  return (
    <div className='wrapper'>
      <div className='content default-padded'>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
