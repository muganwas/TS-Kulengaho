import React from 'react'
import './Header.scss'
import { genInfoReducer } from '../../sharedTypes'
import logo from '../../images/logo.svg'

interface headerProps {
  title: String
  genInfo: genInfoReducer
}

const Header: React.FC<headerProps> = ({ title, genInfo }) => {
  return (
    <div className='header-container'>
      <div className='logo-title-container'>
        <img alt='logo' className='logo' src={logo} />
        <div className='header-text'>{title}</div>
      </div>
      <div className='sub-title'>{genInfo.site_subtitle}</div>
    </div>
  )
}

export default Header
