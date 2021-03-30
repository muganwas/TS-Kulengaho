import { render } from '@testing-library/react'
import Header from './Header'

describe('Header component renders', () => {
  test('renders logo', () => {
    const { getByTestId } = render(
      <Header title='kulengaho' genInfo={{ site_subtitle: '' }} />
    )
    const logoElement = getByTestId('logo')
    expect(logoElement).toBeInTheDocument()
  })
})
