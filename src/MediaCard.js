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

import './styles/MediaCard.sass';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 600,
    width: 300,
    '&:hover': { backgroundColor: "blue"}
  },
  media: {
    height: 400,
  },
});

const MediaCard = ({ name, lan, poster, date, rating }) => {
  const classes = useStyles();
  const year = date.slice(0,4);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${ poster }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name } ({ year })
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Language: { lan }
          </Typography>
        </CardContent>
        <CardContent style={{ height: "40px", padding: "5px"}}>
            <Avatar aria-label="rating" className={classes.avatar}>
              { rating }
            </Avatar>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard
