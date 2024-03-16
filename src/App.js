import React from 'react';
import './index.css';
import { Content } from './content';
import { ToastProvider } from 'tw-noti';

export default function App() {
  return (
    <>
      <ToastProvider
        persist={true}
        reverseStackOrder={true}
        containerClasses="top-12 right-12 space-y-2"
        messageClasses="dark:text-white font-extrabold"
      >
        <Content />
      </ToastProvider>
    </>
  );
}
