import React, { useState } from 'react'
import { generic_input_func } from '../../../sharedTypes'
import './TextInput.scss'

interface inputProps {
  id: string
  label?: string
  value?: string
  error?: string
  onChange?: generic_input_func
  onBlur?: generic_input_func
  placeholder?: string
  inputType?: string
  testid: string
  containerClass?: string
  inputClass?: string
}

const TextInput: React.FC<inputProps> = ({
  id,
  label,
  value,
  placeholder,
  containerClass,
  error,
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
        className={`${inputClass || 'text-input'} ${error ? 'error' : ''}`}
        placeholder={placeholder}
        type={inputType || 'string'}
        onChange={onChange || localOnChange}
        onBlur={onBlur}
      />
      {error && <span className='error-container'>{error}</span>}
    </div>
  )
}

export default TextInput
