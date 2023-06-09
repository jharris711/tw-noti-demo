import React from 'react';
import './index.css';
import Content from './Content';
import { ToastProvider } from 'tw-noti';

export default function App() {
  return (
    <>
      <ToastProvider
        persist={true}
        reverseStackOrder={true}
        messageClasses="dark:text-white font-extrabold"
      >
        <Content />
      </ToastProvider>
    </>
  );
}
