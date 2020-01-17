import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Header.sass';

const Header = ({name}) => {
    return(
        <header>
            <h1>{ name }</h1>
        </header>
    )
}

export default Header
