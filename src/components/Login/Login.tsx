import React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { TextInput } from '../Form'
import { updateUsername, updateUserPassowrd } from '../../redux/actions'
import { generic_input_func, RootState } from '../../sharedTypes'
import './Login.scss'

const Login: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const userInfo = useSelector((store: RootState) => store.userInfo)
  const usernameChange: generic_input_func = (e) => {
    e.preventDefault()
    const id = e.target.id
    const value = e.target.value
    if (id === 'user-name' && userInfo.user_name !== value)
      dispatch(updateUsername(value))
    else if (id === 'password' && userInfo.user_password !== value)
      dispatch(updateUserPassowrd(value))
  }
  return (
    <div
      data-testid='login-component-container'
      className='login-component-container'
    >
      <TextInput
        id='user-name'
        label='Username'
        testid='username-login'
        placeholder='Username'
        onBlur={usernameChange}
      />
      <TextInput
        id='password'
        label='Password'
        inputType='password'
        testid='password-login'
        placeholder='Password'
        onBlur={usernameChange}
      />
    </div>
  )
}

export default Login
