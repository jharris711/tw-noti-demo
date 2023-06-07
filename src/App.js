import React from 'react';
import './index.css';
import Content from './Content';
import { ToastProvider } from 'tw-noti';

export default function App() {
  return (
    <>
      <ToastProvider containerClasses="top-12" messageClasses="font-extrabold">
        <Content />
      </ToastProvider>
    </>
  );
}
