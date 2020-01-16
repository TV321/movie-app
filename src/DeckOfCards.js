import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './MediaCard';
import './styles/DeckOfCards.sass';

import { Grid } from '@material-ui/core';

const DeckOfCards = ({ movies }) =>{
    const renderMovies = movies.map((movie, index) => {
        return <MediaCard
                    key={ index }
                    name={ movie.title }
                    lan={ movie.original_language }
                    poster={ movie.poster_path }
                    date={ movie.release_date }
                    rating={ movie.vote_average }
                />
    })

    return (
        <div id="main-section" style={{ padding: 50 }}>
            <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                { renderMovies }
            </Grid>
        </div>

    )
}

export default DeckOfCards
