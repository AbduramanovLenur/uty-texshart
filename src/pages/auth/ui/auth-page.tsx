import type { FC } from 'react';

import { Auth, AuthTypes } from '@widgets/auth';

const AuthPage: FC = () => {
  return <Auth type={AuthTypes.SERVICES} />;
};

export default AuthPage;
