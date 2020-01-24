import React from 'react';
import './styles/MainHeader.sass';
import HeaderInput from './HeaderInput';

const MainHeader = ({name, handleChange, def }) => {
    return (
        <header>
            <h1>{ name }</h1>
            <HeaderInput
                handleChange={ handleChange }
                def={ def }
            />
        </header>
    )
}

export default MainHeader
