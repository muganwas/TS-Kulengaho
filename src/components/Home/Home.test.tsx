import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Home from './Home'

describe('Home component renders', () => {
  test('renders container', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const containerElement = screen.getByTestId('home-container')
    expect(containerElement).toBeInTheDocument()
  })
})
