import React from 'react'
import { generic_form_func } from '../../../sharedTypes'
import './FormContainer.scss'

interface FormContainerProps {
  onSubmit: generic_form_func
  containerClass?: string
  testid: string
  id: string
}

const FormContainer: React.FC<FormContainerProps> = ({
  onSubmit,
  testid,
  containerClass,
  id,
  children,
}) => {
  return (
    <div className={containerClass || 'form-container'}>
      <form id={id} data-testid={testid} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

export default FormContainer
