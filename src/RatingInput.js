import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 100,
     '& .MuiInputBase-input': {
         color: '#BFBDC1',
     } ,
     '& label.Mui-focused': {
       color: '#2E86AB',
     },
     '& .MuiInput-underline:after': {
       borderBottomColor: '#2E86AB',
     },
     '& .MuiOutlinedInput-root': {
       '& fieldset': {
         borderColor: '#2E86AB',
       },
       '&:hover fieldset': {
         borderColor: '#BFBDC1',
       },
       '&.Mui-focused fieldset': {
         borderColor: '#2E86AB',
       },
     },
   }
    },
    button: {
        color: '#BFBDC1',
        padding: '15px',
        backgroundColor: '#37323E',
        '&:hover': {
            backgroundColor: '#6D6A75'
        }
    }
}));

const inputLabel = {
    color: '#2E86AB'
}
const preventDef = (e) => {
    e.key === 'Enter' && e.preventDefault();
}

const RatingInput = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" onKeyPress={ preventDef }>
                <TextField className={ classes.textField } id="outlined-basic" label="Rate" variant="outlined" type="number"
                    InputLabelProps={{
                        style: inputLabel
                    }}
                    inputProps={{

                        min: 1,
                        max: 10,
                        onKeyPress: preventDef
                }}

                 />
                <Button className={classes.button} variant="contained">
                    Submit
                </Button>
        </form>
    )
}


export default RatingInput
