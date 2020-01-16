import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Loader.sass'


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const Loader = ({ click }) => {
    return(
        <div id="button-div">
            <button onClick={ click }>+</button>

        </div>
    )
}

export default Loader
