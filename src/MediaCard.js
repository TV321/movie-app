import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom"

import './styles/MediaCard.sass';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 620,
    width: 300,
    border: '1px solid #2E86AB',
    padding: '10px',
    margin: '10px',
    transition: 'all .3s linear',
    backgroundColor: '#37323E',
    '&:hover': {
        backgroundColor: '#211e25'
    }
  },
  media: {
    height: 400,
  },
  firstSection: {
      height: 132,
      padding: 5
  },
  secondSection: {
      height: 50,
      padding: 5
  }
});

const MediaCard = ({ name, lan, poster, date, rating, cardClick, index}) => {
  const classes = useStyles();
  const year = date.slice(0,4);

  return (
    <Link to="moviedetails">
    <Card className={classes.card} onClick={ ()=> cardClick(index) }>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${ poster }`}
          title=""
        />
        <CardContent className={classes.firstSection}>
          <Typography gutterBottom variant="h5" component="h2">
            { name } ({ year })
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Language: { lan }
          </Typography>
        </CardContent>
        <CardContent className={classes.secondSection} >
            <Avatar aria-label="rating" className={classes.avatar}>
              { rating }
            </Avatar>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default MediaCard
