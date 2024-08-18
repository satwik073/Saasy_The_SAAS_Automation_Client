import React, { Children } from 'react'

type Props = {children : React.ReactNode}

const layout = (props: Props) => {
  return (
   <div className=" border-l-[1px] border-t-[1px]   rounded-l-xl border-muted-foreground/30  flex overflow-hidden h-screen" >
        {props.children}
   
   </div>
  )
}

export default layout