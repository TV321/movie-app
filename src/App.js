import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import DeckOfCards from './DeckOfCards';

class App extends Component {
    state = {
        movieList: []
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
            <React.Fragment>
                <Header />
                <DeckOfCards movies={ this.state.movieList } />
            </React.Fragment>
        );
    }

}

export default App;
