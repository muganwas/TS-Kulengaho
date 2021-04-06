import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Dashboard from './Dashboard'

describe('Dashboard tests', () => {
	it('renders dash container correctly', () => {
		render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		)
		const container = screen.getAllByTestId('dashboard-container')
		expect(container).toBeDefined()
		expect(container).toMatchSnapshot()
	})
})
