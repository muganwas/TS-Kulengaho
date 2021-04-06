import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserLogInStatus } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../sharedTypes'
import Header from '../Header'

const Dashboard: React.FC = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const userInfo = useSelector((store: RootState) => store.userInfo)

	useEffect(() => {
		window.addEventListener('popstate', () => {
			history.push('/Dashboard')
		})
	}, [history])

	useEffect(() => {
		if (history) {
			const state: any = history.location.state
			if (state && state.token) {
				dispatch(setUserLogInStatus(true))
				return
			}
			if (!userInfo.is_logged_in && state && !state.token) {
				history.push('/')
				return
			}
		}
	}, [history, userInfo.is_logged_in, dispatch])

	return (
		<div id='dashboard-container' data-testid='dashboard-container'>
			<Header title={'Kulengaho Dash'} />
			<h1>Dash</h1>
		</div>
	)
}
export default Dashboard
