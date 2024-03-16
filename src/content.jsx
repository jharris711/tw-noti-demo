import React from 'react';
import { useToast } from 'tw-noti';

import { BellIcon } from './components/bell-icon';
import { Button } from './components/button';
import { Card } from './components/card';

export function Content() {
  const { enqueueToast } = useToast();

  const handleClick = () => {
    enqueueToast({
      content: 'tw-noti: Tailwind Toast Notifications',
      type: 'info',
    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <BellIcon />
          tw-noti
        </a>
        <Card>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Test the notifications by clicking the button
            </h1>
            <Button handleClick={handleClick} />
          </div>
        </Card>
      </div>
    </section>
  );
}
