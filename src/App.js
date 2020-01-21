import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './MainHeader';
import Header from './Header';
import Loader from './Loader';
import MovieDetails from './MovieDetails';
import DeckOfCards from './DeckOfCards';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    state = {
        guestUserRate: "",
        guestSessionId: "",
        display: "popular",
        page: 2,
        movieList: [],
        movie: "",
        ratedMovies: [],
        userRate: "-",
    }

    onRateSubmitClick = () => {
        console.log('clicked');
        const id = this.state.movie.id;
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        const guest = this.state.guestSessionId;
        const sendData = {
            "value": this.state.guestUserRate
        }

        fetch(`https://api.themoviedb.org/3/movie/${ id }/rating?api_key=${ key }&guest_session_id=${ guest }`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(sendData)
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if(res.status_code === 1){
                    console.log('Status code is 1')

                }
            })
    }



    onRateInputChange = (event) => {
        this.setState({
            guestUserRate: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.display !== prevState.display){
            const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
            fetch(`https://api.themoviedb.org/3/movie/${ this.state.display }?api_key=${ key }&language=en-US&page=1`)
                .then(response => response.json())
                .then(res => {
                    this.setState({
                        movieList: res.results
                    })
                })
        }
    }

    onInputChange = (event) => {
        this.setState({
            display: event.target.value
        })
    }

    onCardClick = (one) => {
        const guest = this.state.guestSessionId;
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        const id = this.state.movieList[one].id;
        fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ key }`)
        .then(response => response.json())
        .then(res => {
            this.setState({
                movie: res
            })
        })
        fetch(`https://api.themoviedb.org/3/guest_session/${ guest }/rated/movies?api_key=${ key }&language=en-US&sort_by=created_at.asc`)
        .then(response => response.json())
        .then(res => {
            this.setState({
                ratedMovies: res.results
            })
        })
        if(this.state.ratedMovies.length > 0 && id) {
            const ratedMovie = this.state.ratedMovies.filter(movie => movie.id === id)
            if(ratedMovie.length > 0) {
                console.log(ratedMovie)
                console.log(ratedMovie[0])
                console.log(ratedMovie[0].rating)
                this.setState({
                    userRate: ratedMovie[0].rating
                })
            } else {
                this.setState({
                    userRate: "-"
                })
            }
        }
    }

    onLoaderClick = () => {
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        this.setState(state => ({
            page: state.page + 1
        }))
        fetch(`https://api.themoviedb.org/3/movie/${ this.state.display }?api_key=${ key }&language=en-US&page=${ this.state.page }`)
        .then(response => response.json())
        .then(res => {
            this.setState(prevState => ({
                movieList: [
                    ...prevState.movieList,
                    ...res.results
                ]
            }))
        })
    }

    componentDidMount () {
        const key = "dbc9fd3cb8c02c485593e9bf8ba731d7";
        fetch(`https://api.themoviedb.org/3/movie/${ this.state.display }?api_key=${ key }&language=en-US&page=1`)
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
        fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${ key }`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    guestSessionId: res.guest_session_id
                })
            })
    }


    render() {
        return(
            <Router>
                <React.Fragment>
                    <Route exact path="/" render={ props => (
                        <React.Fragment>
                            <MainHeader
                                handleChange={ this.onInputChange }
                                name="Movie App"
                                def={ this.state.display }
                            />
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
                                onRateClick={ this.onRateSubmitClick }
                                onRateChange={ this.onRateInputChange }
                                movie={ this.state.movie }
                                userRate={ this.state.userRate }
                            />
                        </React.Fragment>
                    )}/>
                </React.Fragment>
            </Router>
        );
    }

}

export default App;
