import MenuOptions from '@/Globals/GlobalSidebarMenu/SideMenuWrapper/Sidebar'
import InfoBar from '@/Globals/InfoBar/InputController'
import React from 'react'

type Props = {children: React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-y-auto bg-background/50 backdrop-blur-lg ">
      <MenuOptions />
      <div className="w-full flex flex-col">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
