import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';

interface Props {
    title: String;
};

const Header: React.FC<Props> = ({title}) => {
    return (
        <div className='header-container'>
            <img className='logo' src={logo} />
            <div className='header-text'>{title}</div>
        </div>
    )
};

export default Header;