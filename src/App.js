import React from 'react';
import './index.css';
import Content from './Content';
import { ToastProvider } from 'tw-noti';

export default function App() {
  return (
    <>
      <ToastProvider >
        <Content />
      </ToastProvider>
    </>
  );
}
