'use client'
import React from 'react'
import WorkflowButton from './_Components/workflowButton'
import Workflowform from './_Components/workflow-forms'

type Props = {}

const Workflows = (props: Props) => {
  return (
     <div className="w-full flex flex-col md:p-12 p-3 relative ">
    <h1 className="md:text-3xl text-xl  sticky top-0 z-10 bg-background/50 backdrop-blur-lg flex ">
    Workflows</h1>
    <WorkflowButton/>
    
</div>
  )
}

export default Workflows