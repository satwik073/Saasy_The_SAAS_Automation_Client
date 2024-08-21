'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../ToolTips/TooltipContent"
import { menuOptions } from '@/constants'
import clsx from 'clsx'
import { Separator } from '@/Globals/ToolTips/Seperator/SeperatorContainer'
import { Cross, Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import DropdownMenuComponent from '@/Globals/GlobalSiteNavigation/Components/DropdownMenu'
import { TRANSLATING_NAVIGATION_TEXT } from '@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant'
import { FaBolt } from 'react-icons/fa'
import { useMediaQuery } from '@mui/material'
import { ClearOutlined } from '@mui/icons-material'

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
const MenuSmallOptions: React.FC<Props> = ({ isDrawerOpen, onCloseDrawer }) => {
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
  
    const pathName = usePathname();
  
    return (
      <nav
        className={clsx(
          "dark:bg-black bg-white sm:flex flex-col lg:py-5 py-4",
          {
            "w-14 md:w-16 h-full": !isSmallScreen,
            "fixed inset-0 z-50 bg-black   flex flex-col items-start gap-10 p-5 w-64":
              isSmallScreen && isDrawerOpen,
            hidden: isSmallScreen && !isDrawerOpen,
          }
        )}
      >
        <div className="flex w-full flex-col text-left">
          {isSmallScreen && isDrawerOpen && (
            <button onClick={onCloseDrawer} className="flex justify-end">
                <ClearOutlined/>
            </button>
          )}
          <TooltipProvider>
            <ul className="flex flex-col items-start w-full">
              {menuOptions.map((menuItem) => (
                <Tooltip key={menuItem.name} delayDuration={0}>
                  <TooltipTrigger>
                    <li className="">
                      <Link
                        href={menuItem.href}
                        className={clsx("hover:text-primary transition-colors", {
                          "text-primary": pathName === menuItem.href,
                        })}
                      >
                        <div className='flex items-center gap-4 py-3'>

                        <menuItem.Component size={22}/>
                        <p className='font-bold text-md'>{menuItem.name}</p>
                        </div>
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-black/10 backdrop-blur-xl"
                  >
                  </TooltipContent>
                </Tooltip>
              ))}
            </ul>
          </TooltipProvider>
          
        </div>
      </nav>
    );
  };
  
  export default MenuSmallOptions;
  