import type { FC, ReactNode } from 'react';
import { App, ConfigProvider } from 'antd';

import QueryProvider from './query-client';
import StoreProvider from './store-provider';

interface IProps {
  children: ReactNode;
}

const AppProvider: FC<IProps> = ({ children }) => {
  return (
    <ConfigProvider>
      <StoreProvider>
        <QueryProvider>
          <App>
            {children}
          </App>
        </QueryProvider>
      </StoreProvider>
    </ConfigProvider>
  );
};

export default AppProvider;
