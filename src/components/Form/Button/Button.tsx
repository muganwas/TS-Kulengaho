import React from 'react'
import { submit_button_func } from '../../../sharedTypes'
import './Button.scss'

interface ButtonProps {
  onClick?: submit_button_func
  id: string
  testid: string
  title: string
  disabled?: boolean
  containerClass?: string
  buttonClass?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  id,
  testid,
  type,
  title,
  disabled,
  containerClass,
  buttonClass,
}) => {
  return (
    <div className={containerClass || 'button-container'}>
      <button
        id={id}
        disabled={disabled}
        className={buttonClass || 'button'}
        data-testid={testid}
        type={type || 'submit'}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
