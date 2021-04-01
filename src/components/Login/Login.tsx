import React from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { TextInput, Form, Button } from '../Form'
import {
  updateUsername,
  updateUserPassword,
  setUserNameError,
  setUserPasswordError,
} from '../../redux/actions'
import {
  generic_input_func,
  RootState,
  generic_form_func,
} from '../../sharedTypes'
import { AuthControllers } from '../../controllers'
import './Login.scss'

const Login: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const userInfo = useSelector((store: RootState) => store.userInfo)

  const valueChange: generic_input_func = (e) => {
    e.preventDefault()
    const id = e.target.id
    const value = e.target.value
    if (id === 'user-name') dispatch(updateUsername(value))
    if (id === 'password') dispatch(updateUserPassword(value))
  }
  const onFormSubmit: generic_form_func = (e) => {
    e.preventDefault()
    const usernameCheck = AuthControllers.username_check(userInfo.user_name)
    const passwordCheck = AuthControllers.password_check(userInfo.user_password)
    if (!usernameCheck.passed) {
      dispatch(setUserNameError(usernameCheck.msg))
      return
    }
    if (!passwordCheck.passed) {
      dispatch(setUserPasswordError(passwordCheck.msg))
      return
    }
    console.log('all checks passed...')
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
          error={userInfo.user_name_error}
          label='Username'
          testid='username-login'
          placeholder='Username'
          onChange={valueChange}
        />
        <TextInput
          id='password'
          value={userInfo.user_password}
          error={userInfo.user_password_error}
          label='Password'
          inputType='password'
          testid='password-login'
          placeholder='Password'
          onChange={valueChange}
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
