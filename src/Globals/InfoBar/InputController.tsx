'use client'
import React, { useEffect } from 'react'
import DropdownMenuComponent from '../GlobalSiteNavigation/Components/DropdownMenu'
import { Book, Headphones, Search } from 'lucide-react'


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ToolTips/TooltipContent"
import Input from '@mui/material/Input/Input'
import { PlaceholdersAndVanishInputDemo } from './Animations/input_placeholder'


type Props = {}

const InfoBar = (props: Props) => {
//   const { credits, tier, setCredits, setTier } = useBilling()

//   const onGetPayment = async () => {
//     const response = await onPaymentDetails()
//     if (response) {
//       setTier(response.tier!)
//       setCredits(response.credits!)
//     }
//   }

//   useEffect(() => {
//     onGetPayment()
//   }, [])

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">Credits</p>
      </span>
      <span className="flex items-center rounded-full bg-muted px-2">
        <Search />
        <PlaceholdersAndVanishInputDemo/>
      </span>
      <TooltipProvider>
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
      {/* <UserButton /> */}
    </div>
  )
}

export default InfoBar