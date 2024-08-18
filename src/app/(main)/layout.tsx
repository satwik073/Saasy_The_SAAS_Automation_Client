
import MenuOptions from '@/animations/Sidebar'
import React, { Children } from 'react'

type Props = {children : React.ReactNode}

const layout = (props: Props) => {
  return (
   <div className="flex overflow-hidden h-screen" >
    <MenuOptions/>
    <div className="w-full">
        {props.children}
    </div>
   </div>
  )
}

export default layout