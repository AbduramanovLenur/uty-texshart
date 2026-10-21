import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: FC = () => {
  return (
    <div className='wrapper'>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
