import React from 'react'
import { useSelector } from 'react-redux'
import './Header.scss'
import { RootState } from '../../sharedTypes'
import logo from '../../images/logo.svg'

interface headerProps {
  title: String
}

const Header: React.FC<headerProps> = ({ title }) => {
  const subTitle = useSelector(
    (store: RootState) => store.genInfo.site_subtitle
  )
  return (
    <div className='header-container'>
      <div className='logo-title-container'>
        <img data-testid='logo' alt='logo' className='logo' src={logo} />
        <div className='header-text'>{title}</div>
      </div>
      <div className='sub-title'>{subTitle}</div>
    </div>
  )
}

export default Header
