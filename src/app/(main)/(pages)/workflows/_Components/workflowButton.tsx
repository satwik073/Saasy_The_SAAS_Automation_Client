'use client'
import { Button } from '@/Components/Images/External/UI/button'
import { useModal } from '@/providers/ModalValueProvider'
// import Workflowform from '@/components/forms/workflow-form'
// import CustomModal from '@/components/global/custom-modal'
// import { Button } from '@/components/ui/button'
// import { useBilling } from '@/providers/billing-provider'
// import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'
import CustomModal from './custom_modal'

type Props = {}

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal()


  const handleClick = () => {
    setOpen(
      <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks." children={undefined}      >
        {/* <Workflowform /> */}
      </CustomModal>
    )
  }

  return (
    <Button
      size={'icon'}
    
    >
      <Plus />
    </Button>
  )
}

export default WorkflowButton

