import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { updateSiteName } from '../../redux/actions'
import Header from '../Header'
import Login from '../Login'
import './Home.scss'

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(updateSiteName('Kulengaho hati'))
  }, [dispatch])
  return (
    <div data-testid='home-container' className='home-container'>
      <Header title='Welcome to TSX' />
      <div>
        <Login />
      </div>
    </div>
  )
}

export default Home
