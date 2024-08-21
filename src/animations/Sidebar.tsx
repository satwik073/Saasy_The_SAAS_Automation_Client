'use client'

import Link from 'next/link'
import { AsyncLocalStorage } from 'async_hooks'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../Globals/ToolTips/TooltipContent"
import { menuOptions } from '@/constants'
import clsx from 'clsx'
import { Separator } from '@/Globals/ToolTips/Seperator/SeperatorContainer'
import { Cross, Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import DropdownMenuComponent from '@/Globals/GlobalSiteNavigation/Components/DropdownMenu'
import { TRANSLATING_NAVIGATION_TEXT } from '@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant'
import { FaBolt } from 'react-icons/fa'
import { useMediaQuery } from '@mui/material'

interface ImageContainerAttributes {
  width: number;
  height: number;
  alt: string;
  src: string;
  className?: string;
}

type Props = {
  isDrawerOpen?: boolean;
  onCloseDrawer?: () => void;
}
const MenuOptions: React.FC<Props> = ({ isDrawerOpen, onCloseDrawer }) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [fillTransitionColor, setTransitionFillColor] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      setTransitionFillColor(
        theme === TRANSLATING_NAVIGATION_TEXT.drop_down_light_connecting_content
          ? ''
          : TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color
      );
    }
  }, []);
  const pathName = usePathname()
  return (
    <nav
      className={clsx(
        "dark:bg-black bg-white sm:flex flex-col items-center gap-10 lg:py-5 py-4",
        {
          "w-14 md:w-16 h-full": !isSmallScreen,
          "fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center gap-10 p-5 w-64":
            isSmallScreen && isDrawerOpen,
          hidden: isSmallScreen && !isDrawerOpen,
        }
      )}
    >
      <div className="flex flex-col items-center gap-8">
        {isSmallScreen && isDrawerOpen && (
          <button onClick={onCloseDrawer} className="self-end text-white">
            <Cross />
          </button>
        )}
        <Link href="/" className="font-bold block text-center">
          <FaBolt size={24} className="dark:text-white text-black" />
        </Link>
        <TooltipProvider>
          <ul className="flex flex-col items-center gap-7">
            {menuOptions.map((menuItem) => (
              <Tooltip key={menuItem.name} delayDuration={0}>
                <TooltipTrigger>
                  <li className="block">
                    <Link
                      href={menuItem.href}
                      className={clsx("hover:text-primary transition-colors", {
                        "text-primary": pathName === menuItem.href,
                      })}
                    >
                      <div className="text-sm">
                        <menuItem.Component size={22} fontWeight={'bold'} />
                      </div>
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
        <Separator />
        <div className="flex flex-col items-center gap-4 dark:bg-[#ffffff6e] py-3 px-2 rounded-full h-full overflow-scroll border-[1px] w-12">
          {[LucideMousePointerClick, GitBranch, Database, GitBranch].map(
            (Icon, index) => (
              <div
                key={index}
                className="relative block dark:bg-black p-2 rounded-full border-[1px] dark:border-t-[#353346] dark:border-t-[2px]"
              >
                <Icon className="text-muted-foreground" size={10} />
                <div
                  className={`border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px] ${index % 2 === 0 ? 'block' : 'hidden'
                    }`}
                />
              </div>
            )
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          <DropdownMenuComponent />
        </div>
      </div>
    </nav>
  );
};

export default MenuOptions;

function setTransitionFillColor(arg0: string) {
  throw new Error('Function not implemented.')
}
