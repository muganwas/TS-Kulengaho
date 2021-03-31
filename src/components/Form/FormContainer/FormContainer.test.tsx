import renderer from 'react-test-renderer'
import Form from './FormContainer'

const onSubmit = jest.fn()
describe('Form component renders properly', () => {
  it('snapshot checks out', async () => {
    const tree = renderer
      .create(<Form id='test-form' testid='test-form' onSubmit={onSubmit} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
