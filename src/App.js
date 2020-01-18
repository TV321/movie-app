import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Loader from './Loader';
import MovieDetails from './MovieDetails';
import DeckOfCards from './DeckOfCards';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    state = {
        page: 2,
        movieList: [],
        movie: ""
    }

    onCardClick = (one) => {
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        const id = this.state.movieList[one].id;
        console.log(id)

        fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ key }`)
        .then(response => response.json())
        .then(res => {
            this.setState({
                movie: res
            })
        })
        .then(() => {
            console.log(this.state.movie)
        });
    }

    onLoaderClick = () => {
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        this.setState(state => ({
            page: state.page + 1
        }))
        console.log(this.state.page)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ key }&language=en-US&page=${ this.state.page }`)
        .then(response => response.json())
        .then(res => {
            this.setState(prevState => ({
                movieList: [
                    ...prevState.movieList,
                    ...res.results
                ]
            }))
        })
        .then(console.log(this.state.movieList))

    }

    componentDidMount () {
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ key }&language=en-US&page=1`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    movieList: res.results
                })
            })
            .then(() => {
                if (this.state.movieList.length > 0) {
                    console.log(this.state.movieList)
                    } else {
                        null
                    }
                }
            )
    }


    render() {
        return(
            <Router>
                <React.Fragment>
                    <Route exact path="/" render={ props => (
                        <React.Fragment>
                            <Header name="Movie App"/>
                            <DeckOfCards
                                movies={ this.state.movieList }
                                cardClick={ this.onCardClick }
                            />
                            <Loader click={ this.onLoaderClick }/>
                        </React.Fragment>
                    )} />
                    <Route exact path="/moviedetails" render={ props => (
                        <React.Fragment>
                            <Header name="Movie Details"/>
                            <MovieDetails
                                movie={ this.state.movie }
                            />
                        </React.Fragment>
                    )}/>
                </React.Fragment>
            </Router>
        );
    }

}

export default App;
