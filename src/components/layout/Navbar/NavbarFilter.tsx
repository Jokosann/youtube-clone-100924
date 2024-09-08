import useSidebarStore from '@/store/useSidebarStore';
import { forwardRef } from 'react';
import { Button } from '../../ui/Button';
import { cn } from '@/utils/cn';
import Arrows from '@/components/ui/svg/Arrows';
import { navbarFilter } from '@/data/constants';

type IProps = {
  state: {
    navFilter: string;
    setNavFilter: React.Dispatch<React.SetStateAction<string>>;
    arrowFilterRight: boolean;
    arrowFilterLeft: boolean;
  };
};

const NavbarFilter = forwardRef<HTMLDivElement, IProps>(({ state }: IProps, ref) => {
  const { sidebarActive } = useSidebarStore();
  const { arrowFilterLeft, arrowFilterRight, navFilter, setNavFilter } = state;

  return (
    <div
      className={cn('relative flex items-center -mt-2 px-2 md:ml-[70px]', {
        'xl:ml-[254px]': sidebarActive,
      })}
    >
      {arrowFilterLeft && (
        <div className="absolute top-[10px] left-0 flex justify-center items-center w-8 h-[40px] bg-white z-30">
          <div className=" absolute top-1/2 -translate-y-1/2 -left-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
            <Arrows className="scale-125 rotate-180" />
          </div>
        </div>
      )}

      <div
        ref={ref}
        className={cn(
          'w-full scroll-fillter-container overflow-x-auto mt-3',
          { 'mask-left': arrowFilterLeft && !arrowFilterRight },
          { 'mask-right': arrowFilterRight && !arrowFilterLeft },
          { mask: arrowFilterRight && arrowFilterLeft }
        )}
      >
        <div className="flex gap-3">
          {navbarFilter.map((item: string, index: number) => (
            <Button
              variant={navFilter === item ? 'default' : 'secondary'}
              size="sm"
              key={index}
              onClick={() => setNavFilter(item)}
              className={cn('rounded-lg capitalize whitespace-nowrap snap-end')}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {arrowFilterRight && (
        <div className="absolute top-[10px] right-0 flex justify-center items-center w-8 h-[40px] bg-white z-30">
          <div className=" absolute top-1/2 -translate-y-1/2 -right-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
            <Arrows className="scale-125" />
          </div>
        </div>
      )}
    </div>
  );
});

export default NavbarFilter;