import { render } from '@testing-library/react'
import TextInput from './TextInput'

describe('Form components tests', () => {
  test('text input renders', async () => {
    const { getByTestId } = render(
      <TextInput id='test-input' testid='test-input' />
    )
    const inputElement = getByTestId('test-input')
    expect(inputElement).toBeInTheDocument()
  })
})