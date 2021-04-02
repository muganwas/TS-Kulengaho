import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Login from './Login'

describe('Login component renders', () => {
  it('renders login components', () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    const containerElement = getByTestId('login-component-container')
    const usernameInputElement = getByTestId('username-login')
    const passwordInputElement = getByTestId('password-login')
    expect(passwordInputElement).toBeInTheDocument()
    expect(usernameInputElement).toBeInTheDocument()
    expect(containerElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
