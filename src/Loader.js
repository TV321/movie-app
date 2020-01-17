import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Loader.sass'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Loader = ({ click }) => {
    const classes = useStyles();
    return(
        <div id="button-div">
            <div className={classes.root}>
                <Button onClick={ click } variant="contained" color="primary">
                    +
                </Button>
            </div>
        </div>
    )
}

export default Loader
