import { useState } from 'react';
import { listSidebarFixed } from '../../../data/list-sidebar-fixed';
import { cn } from '../../../utils/cn';

import Home from '../svg/Home';
import Shorts from '../svg/Shorts';
import Subscriptions from '../svg/Subscriptions';
import You from '../svg/You';

const SidebarDown = () => {
  const [sideActive, setSideActive] = useState('home');

  return (
    <aside
      className="hidden fixed top-16 left-0 w-[70px] h-custom-sidebar-fixed md:flex flex-col gap-2 px-1"
      role="complementary"
      aria-label="Sidebar"
    >
      {listSidebarFixed.map((item: string, index: number) => (
        <div
          key={index}
          onClick={() => setSideActive(item)}
          className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-lg"
        >
          {item === 'home' && <Home active={sideActive === item} className={cn('w-6 aspect-square')} />}
          {item === 'shorts' && (
            <Shorts active={sideActive === item} className={cn('w-6 aspect-square')} />
          )}
          {item === 'subscriptions' && (
            <Subscriptions active={sideActive === item} className={cn('w-6 aspect-square')} />
          )}
          {item === 'you' && <You active={sideActive === item} className={cn('w-6 aspect-square')} />}

          <p className="text-[10px] capitalize">{item}</p>
        </div>
      ))}
    </aside>
  );
};

export default SidebarDown;
