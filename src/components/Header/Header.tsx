import React from 'react';
import './Header.scss';

interface Props {
    title: String;
};

const Header: React.FC<Props> = () => {
    return (
        <div className='header-container'>
            <div className='header-text'>Welcome to TSX</div>
        </div>
    )
};

export default Header;