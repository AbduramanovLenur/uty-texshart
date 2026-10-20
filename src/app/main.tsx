import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

import { initI18n } from '@shared/config';

initI18n();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
