import React from 'react';
import ReactDOM from 'react-dom';
import './styles/MovieDetails.sass'
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  card: {
    maxWidth: 900,
    margin: '0 auto',
    backgroundColor: '#231F20',
    border: '1px solid #2E86AB'
  },
  media: {
    height: 500,
    borderBottom: '1px solid #6D6A75',
  },
  title: {
      color: '#2E86AB',
  },
  text: {
      color: '#BFBDC1',
      marginBottom: '10px',
      fontSize: '1em'
  },
  button: {
      color: '#BFBDC1',
      backgroundColor: '#37323E',
      '&:hover': {
          backgroundColor: '#6D6A75'
      }
  }
});


const MovieDetails = ({ movies, index }) => {
    const classes = useStyles();
    return (
        <div id="movie-details">
            <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={ `https://image.tmdb.org/t/p/original${movies[index].backdrop_path}` }
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={ classes.title }>
                            { movies[index].title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                            { movies[index].overview }
                        </Typography>
                        <br></br>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                            Rating: { movies[index].vote_average }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                            Language: { movies[index].original_language }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                            Release Date: { movies[index].release_date }
                        </Typography>
                    </CardContent>
                <CardActions>
                    <Link to="/">
                        <Button className={classes.button} variant="contained" color="primary">
                            <ArrowBackIcon />
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>

    )
}



export default MovieDetails
