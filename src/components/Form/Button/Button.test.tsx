import { screen, render, fireEvent } from '@testing-library/react'
import Button from './Button'

const onClick = jest.fn()

describe('Home component renders', () => {
  it('renders button', () => {
    render(
      <Button
        id='test-button'
        title={'test'}
        testid={'test-button'}
        onClick={onClick}
      />
    )
    const buttonElement = screen.getByTestId('test-button')
    expect(buttonElement).toBeInTheDocument()
  })
  it('button clicks', () => {
    render(
      <Button
        id='test-button'
        title={'test'}
        testid={'test-button'}
        onClick={onClick}
      />
    )
    const buttonElement = screen.getByTestId('test-button')
    fireEvent.click(buttonElement)
    expect(onClick).toBeCalled()
  })
})
