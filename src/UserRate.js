import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
      color: '#BFBDC1',
      marginBottom: '10px',
      fontSize: '1em'
  },
  item: {
      color: '#2E86AB'
  }
});

const UserRate = ({ userRate }) => {
    const classes = useStyles();
    return(
        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            <span className={classes.item}>Your Rating:</span> { userRate }
        </Typography>
    )
}

export default UserRate
