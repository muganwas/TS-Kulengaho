import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { updateSiteName } from '../../redux/actions'
import { RootState } from '../../sharedTypes'
import Header from '../Header'
import Login from '../Login'
import './Home.scss'

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const genInfo = useSelector((store: RootState) => store.genInfo)
  useEffect(() => {
    dispatch(updateSiteName('Kulengaho hati'))
  }, [dispatch])
  return (
    <div data-testid='home-container' className='home-container'>
      <Header title='Welcome to TSX' genInfo={genInfo} />
      <div>
        <Login />
      </div>
    </div>
  )
}

export default Home
