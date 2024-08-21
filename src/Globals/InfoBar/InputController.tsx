'use client'

import React, { useState } from 'react'
import { Book, Headphones, Search, Menu } from 'lucide-react'
import MenuSmallOptions from '../GlobalSidebarMenu/SideMenuWrapper/SmallScreenBar'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../GlobalToolTips/TooltipContent"
import { PlaceholdersAndVanishInputDemo } from './Animations/input_placeholder'
import { useMediaQuery } from '@mui/material'
import DropdownMenuComponent from '../GlobalSiteNavigation/Components/DropdownMenu'


type Props = {}
const InfoBar = (props: Props) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-row static top-0 justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
      {isSmallScreen && (
        <button onClick={toggleDrawer} className="mr-auto">
          <Menu />
        </button>
      )}
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300 md:block hidden">
          Credits
        </p>
      </span>
      <span className="flex items-center rounded-full bg-muted px-2">
        <Search />
        <PlaceholdersAndVanishInputDemo />
      </span>
      <TooltipProvider>
      <div className="flex items-center gap-4 py-3">
            <DropdownMenuComponent />
          </div>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <MenuSmallOptions isDrawerOpen={isDrawerOpen} onCloseDrawer={toggleDrawer} />
        </div>
      )}
    </div>
  );
};

export default InfoBar;
