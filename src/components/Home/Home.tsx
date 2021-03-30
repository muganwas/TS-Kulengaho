import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { updateSiteName } from '../../redux/actions'
import { genInfoReducer } from '../../sharedTypes'
import Header from '../Header'
import './Home.scss'

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const genInfo = useSelector(
    (state: { genInfo: genInfoReducer }) => state.genInfo
  )
  useEffect(() => {
    dispatch(updateSiteName('Kulengaho Kika'))
  }, [dispatch])
  return (
    <div data-testid='home-container' className='home-container'>
      <Header title='Welcome to TSX' genInfo={genInfo} />
    </div>
  )
}

export default Home
