
import MenuOptions from '@/animations/Sidebar'
import InfoBar from '@/Globals/InfoBar/InputController'
import React, { Children } from 'react'

type Props = {children : React.ReactNode}

const layout = (props: Props) => {
  return (
   <div className="flex overflow-y-hidden h-[100dvh]" >
    <MenuOptions/>
    <div className="w-full">
      <InfoBar/>
        {props.children}
    </div>
   </div>
  )
}

export default layout