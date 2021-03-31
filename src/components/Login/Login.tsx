import React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { TextInput, Form, Button } from '../Form'
import { updateUsername, updateUserPassword } from '../../redux/actions'
import {
  generic_input_func,
  RootState,
  generic_form_func,
} from '../../sharedTypes'
import './Login.scss'

const Login: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const userInfo = useSelector((store: RootState) => store.userInfo)

  const usernameChange: generic_input_func = (e) => {
    e.preventDefault()
    const id = e.target.id
    const value = e.target.value
    if (id === 'user-name') dispatch(updateUsername(value))
    if (id === 'password') dispatch(updateUserPassword(value))
  }
  const onFormSubmit: generic_form_func = (e) => {
    e.preventDefault()
    console.log('user name', userInfo.user_name)
    console.log('user password', userInfo.user_password)
  }
  return (
    <div
      data-testid='login-component-container'
      className='login-component-container'
    >
      <Form id='login-form' testid='login-form' onSubmit={onFormSubmit}>
        <TextInput
          id='user-name'
          value={userInfo.user_name}
          label='Username'
          testid='username-login'
          placeholder='Username'
          onChange={usernameChange}
        />
        <TextInput
          id='password'
          value={userInfo.user_password}
          label='Password'
          inputType='password'
          testid='password-login'
          placeholder='Password'
          onChange={usernameChange}
        />
        <Button
          id='submit-button'
          disabled={!userInfo.user_name || !userInfo.user_password}
          title={'Submit'}
          testid={'login-submit'}
          type='submit'
        />
      </Form>
    </div>
  )
}

export default Login
