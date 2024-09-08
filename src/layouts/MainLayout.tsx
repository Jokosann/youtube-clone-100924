import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import SidebarUp from '../components/layout/Sidebar/SidebarUp';
import SidebarDown from '../components/layout/Sidebar/SidebarDown';
import { cn } from '@/utils/cn';
import useMediaQuery from '@/hooks/useMediaQuery';
import useSidebarStore from '@/store/useSidebarStore';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarActive, setSidebarActive } = useSidebarStore();
  const isDesktopLarge = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    const body = document.body;

    if (sidebarActive && !isDesktopLarge) {
      body.style.overflow = 'hidden';
    } else {
      body.removeAttribute('style');
    }

    // Cleanup on unmount
    return () => body.removeAttribute('style');
  }, [isDesktopLarge, sidebarActive]);

  const handleSidebarToggle = () => {
    if (typeof setSidebarActive === 'function') setSidebarActive();
  };

  return (
    <>
      {/* Backdrop saat sidebar aktif pada ukuran layar kecil */}
      <div
        onClick={handleSidebarToggle}
        className={cn('back-container xl:hidden', { active: sidebarActive })}
      />
      <Navbar />
      <SidebarDown />
      <SidebarUp />
      <div
        className={cn('mt-[135px] md:ml-14 px-4 md:px-6', {
          'xl:ml-[240px]': sidebarActive,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default MainLayout;