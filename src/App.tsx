import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Home'
import Dash from './components/Dashboard'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter basename='/'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/Dashboard' component={Dash} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App
