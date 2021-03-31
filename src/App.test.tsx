import renderer from 'react-test-renderer'
import App from './App'

describe('Landing page renders', () => {
  it('renders sub-title', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
