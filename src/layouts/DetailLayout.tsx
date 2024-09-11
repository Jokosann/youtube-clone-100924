import Navbar from '@/components/layout/Navbar/Navbar';
import SidebarUp from '@/components/layout/Sidebar/SidebarUp';
import useSidebarStore from '@/store/useSidebarStore';
import { cn } from '@/utils/cn';

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarActive, setSidebarActive } = useSidebarStore();

  const handleSidebarToggle = () => {
    if (typeof setSidebarActive === 'function') setSidebarActive();
  };

  return (
    <>
      {/* Backdrop saat sidebar aktif pada ukuran layar kecil */}
      <div onClick={handleSidebarToggle} className={cn('back-container', { active: sidebarActive })} />
      <Navbar />
      <SidebarUp />
      <div className="mt-20 px-6">{children}</div>
    </>
  );
};

export default DetailLayout;
