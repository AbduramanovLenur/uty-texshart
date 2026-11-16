import type { FC } from 'react';

import { Auth, AuthTypes } from '@widgets/auth';

const LoginPage: FC = () => {
  return <Auth type={AuthTypes.CREDENTIALS} />;
};

export default LoginPage;
