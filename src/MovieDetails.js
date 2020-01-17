import React from 'react';
import ReactDOM from 'react-dom';
import './styles/MovieDetails.sass'
import { Link } from "react-router-dom"





const MovieDetails = ({ movies, index }) => {
    return (
        <div id="movie-details">
            <h1>{ movies[index].title }</h1>
            <img src={ `https://image.tmdb.org/t/p/original${movies[index].backdrop_path}` } alt="" />
            <p>{ movies[index].overview }</p>
            <p>Rating: { movies[index].vote_average }</p>
            <p>Language: { movies[index].original_language }</p>
            <p>Release Date: { movies[index].release_date }</p>
            <Link to="/">X</Link>
        </div>
    )
}

export default MovieDetails
