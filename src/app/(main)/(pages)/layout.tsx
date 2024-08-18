import React, { Children } from 'react'

type Props = {children : React.ReactNode}

const layout = (props: Props) => {
  return (
   <div className=" border-l-[1px] border-t-[1px] p-20  rounded-l-3xl border-muted-foreground/30 overflow-auto flex h-screen" >
        {props.children}
   
   </div>
  )
}

export default layout