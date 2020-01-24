import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    select: {
        '&:before': {
            borderColor: '#9edb1b',
        },
        '&:after': {
            borderColor: '#9edb1b',
        }
    },
    icon: {
        fill: '#BFBDC1',
    },

  root: {
     width: 150,
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
  },
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: '#6D6A75'
    },
  },
};

const styles = theme => ({
    select: {
        '&:before': {
            borderColor: color,
        },
        '&:after': {
            borderColor: color,
        }
    },
    icon: {
        fill: '#ededed',
    },
});


export default function HeaderInput({ handleChange, def }) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl} className={classes.root}>
        <InputLabel style={{ color: '#BFBDC1'}} ref={inputLabel} id="demo-simple-select-outlined-label" color="secondary">
          Select
        </InputLabel>
        <Select
        style={{ color: '#2E86AB'}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={ def }
          onChange={ handleChange }
          labelWidth={labelWidth}
          MenuProps={ MenuProps }
          inputProps={{
                    classes: {
                        icon: classes.icon,
                    },
                }}
        >
            <MenuItem value={"popular"}>Popular</MenuItem>
            <MenuItem value={"now_playing"}>In Theatres</MenuItem>
            <MenuItem value={"top_rated"}>Top Rated</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
