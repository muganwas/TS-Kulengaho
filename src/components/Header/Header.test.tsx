import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Header from './Header'

describe('Header component renders', () => {
  it('renders logo', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header title='Kulengaho' />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
