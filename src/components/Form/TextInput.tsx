import React, { useState } from 'react'
import { generic_input_func } from '../../sharedTypes'
import './Form.scss'

interface loginProps {
  id: string
  label?: string
  value?: string
  onChange?: generic_input_func
  onBlur?: generic_input_func
  placeholder?: string
  inputType?: string
  testid: string
  containerClass?: string
  inputClass?: string
}

const TextInput: React.FC<loginProps> = ({
  id,
  label,
  value,
  placeholder,
  containerClass,
  inputType,
  testid,
  inputClass,
  onChange,
  onBlur,
}) => {
  const [localValue, updateLocalValue] = useState('')
  const localOnChange: generic_input_func = (e) => {
    e.preventDefault()
    updateLocalValue(e.target.value)
  }
  return (
    <div className={containerClass || 'text-input-container'}>
      {label && <label>{label}</label>}
      <input
        id={id}
        data-testid={testid}
        value={value || localValue}
        className={inputClass || 'text-input'}
        placeholder={placeholder}
        type={inputType || 'string'}
        onChange={onChange || localOnChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default TextInput
