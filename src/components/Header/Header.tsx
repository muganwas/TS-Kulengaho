import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setUserLogInStatus } from '../../redux/actions'
import './Header.scss'
import { RootState } from '../../sharedTypes'
import logo from '../../images/logo.svg'
import { Button } from '../Form'

interface headerProps {
	title: String
}

const Header: React.FC<headerProps> = ({ title }) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const subTitle = useSelector(
		(store: RootState) => store.genInfo.site_subtitle
	)
	const userInfo = useSelector((store: RootState) => store.userInfo)
	const logout: () => void = () => {
		dispatch(setUserLogInStatus(false))
		history.push('/')
	}
	return (
		<div data-testid='header-container' className='header-container'>
			<div className='logo-title-container'>
				<img
					data-testid='logo'
					alt='logo'
					className='logo'
					src={logo}
				/>
				<div className='header-text'>{title}</div>
			</div>
			<div className='sub-title'>{subTitle}</div>
			{userInfo.is_logged_in && (
				<div id='logout-container'>
					<Button
						id={'logout-button'}
						testid='logout-button'
						containerClass='logout-button-container'
						buttonClass='logout-button'
						title='Logout'
						onClick={logout}
					/>
				</div>
			)}
		</div>
	)
}

export default Header
