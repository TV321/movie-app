import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Loader from './Loader';
import MovieDetails from './MovieDetails';
import DeckOfCards from './DeckOfCards';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    state = {
        key: 0,
        page: 2,
        movieList: []
    }

    onCardClick = (one) => {
        console.log(this.state.movieList[one])
        this.setState({
            key: one
        })
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
                                movies={ this.state.movieList }
                                index={ this.state.key }

                            />
                        </React.Fragment>
                    )}/>
                </React.Fragment>
            </Router>
        );
    }

}

export default App;
