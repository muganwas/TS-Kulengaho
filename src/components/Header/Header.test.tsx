import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Header from './Header'

describe('Header component renders', () => {
	it('snapshot checks out', () => {
		render(
			<Provider store={store}>
				<Header title='Kulengaho' />
			</Provider>
		)
		const container = screen.getAllByTestId('header-container')
		expect(container).toMatchSnapshot()
	})
})
