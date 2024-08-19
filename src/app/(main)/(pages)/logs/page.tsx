import React from 'react'

type Props = {}

const Logs = (props: Props) => {
  return (
    <div className="w-full flex flex-col md:p-12 p-3 relative ">
    <h1 className="md:text-3xl text-xl  sticky top-0 z-10 bg-background/50 backdrop-blur-lg flex ">
    Previous Logs</h1>
</div>
  )
}

export default Logs