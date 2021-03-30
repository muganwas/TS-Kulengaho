import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Landing page renders', () => {
  test('renders sub-title', () => {
    const { getByText } = render(<App />)
    const subtitle = getByText(/kulengaho/i)
    expect(subtitle).toBeInTheDocument()
  })
})
