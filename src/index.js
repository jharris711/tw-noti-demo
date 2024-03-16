import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider } from 'tw-noti';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToastProvider
      persist={true}
      reverseStackOrder={true}
      containerClasses="top-12 right-12 space-y-2"
      messageClasses="dark:text-white font-extrabold"
    >
      <App />
    </ToastProvider>
  </StrictMode>
);
