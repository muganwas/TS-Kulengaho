import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Login from './Login'

describe('Login component renders', () => {
  test('renders login container', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    const containerElement = screen.getByTestId('login-component-container')
    const usernameInputElement = screen.getByTestId('username-login')
    const passwordInputElement = screen.getByTestId('password-login')
    expect(usernameInputElement).toBeInTheDocument()
    expect(passwordInputElement).toBeInTheDocument()
    expect(containerElement).toBeInTheDocument()
  })
})
