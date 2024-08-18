'use client'

import Link from 'next/link'
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
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import DropdownMenuComponent from '@/Globals/GlobalSiteNavigation/Components/DropdownMenu'
import { TRANSLATING_NAVIGATION_TEXT } from '@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant'

interface ImageContainerAttributes {
  width: number;
  height: number;
  alt: string;
  src: string;
  className?: string;
}
type Props = {}

const MenuOptions: React.FC<Props> = () => {
  const [fillTransitionColor, setTransitionFillColor] = useState<string>(TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color);
  useEffect(() => {
      const theme = localStorage.getItem('theme');
      setTransitionFillColor(theme === TRANSLATING_NAVIGATION_TEXT.drop_down_light_connecting_content ? '' : TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color);
  }, []);
  const pathName = usePathname()
  const imageContainerProps: ImageContainerAttributes = {
    src: fillTransitionColor ? "/fuzzieLogo.png" : "/image.png",
    width: 15,
    height: 15,
    alt: "SaaSy Logo",
    className: "shadow-sm",
};
  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col items-center gap-10 py-4 px-9  w-16">
      <div className="flex flex-col items-center gap-8">
        <Link href="/" className="font-bold block text-center">
        <TRANSLATING_NAVIGATION_TEXT.toggle_switching_image_containers {...imageContainerProps} />
        </Link>
        <TooltipProvider>
          <ul className="flex flex-col items-center gap-7">
            {menuOptions.map((menuItem) => (
              <Tooltip key={menuItem.name} delayDuration={0}>
                <TooltipTrigger>
                  <li className="block">
                    <Link
                      href={menuItem.href}
                      
                    >
                      <div className='text-sm'>

                      <menuItem.Component size={24} />
                      </div>
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-black/10 backdrop-blur-xl">
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
        <Separator />
        <div className="flex flex-col items-center gap-4 dark:bg-[#ffffff6e] py-4 px-2 rounded-full h-56 overflow-scroll border-[1px] w-12">
          {[LucideMousePointerClick, GitBranch, Database, GitBranch].map((Icon, index) => (
            <div
              key={index}
              className="relative block dark:bg-black p-2 rounded-full border-[1px] dark:border-t-[#353346] dark:border-t-[2px]"
            >
              <Icon className="text-muted-foreground" size={16} />
              <div
                className={`border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px] ${index % 2 === 0 ? 'block' : 'hidden'}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <DropdownMenuComponent />
      </div>
    </nav>
  )
}

export default MenuOptions
