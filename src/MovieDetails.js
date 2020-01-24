import React from 'react';
import './styles/MovieDetails.sass';
import RatingInput from './RatingInput';
import UserRate from './UserRate';
import { Link } from "react-router-dom";
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
  },
  item: {
      color: '#2E86AB'
  }
});


const MovieDetails = ({ movie, onRateChange, onRateClick, userRate}) => {
    const classes = useStyles();
    let displayInput = "";

        { if (userRate === "-") {
            displayInput = <RatingInput onRateChange={ onRateChange } onRateClick={ onRateClick } />
        } else {
            displayInput = <UserRate userRate={ userRate } />
            }
        }

        { if (movie !== ""){
            const lan = movie.spoken_languages.map(lan => {
                return lan.name
            })
            const countries = movie.production_countries.map(count => {
                return count.name
            })
            const companies = movie.production_companies.map(comp => {
                return comp.name
            })

            return (
                <div id="movie-details">
                    <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={ `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={ classes.title }>
                                    { movie.title }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    { movie.overview }
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Rating:</span> { movie.vote_average }
                                </Typography>

                                { displayInput }

                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Popularity:</span> { movie.popularity }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Language:</span> { lan.join(", ") }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Release Date:</span> { movie.release_date.replace(/-/g, ".") }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Countries:</span> { countries.join(", ") }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                                    <span className={classes.item}>Production Companies:</span> { companies.join(", ") }
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
        } else {
            return(
                null
            )
        }}

    }

export default MovieDetails
