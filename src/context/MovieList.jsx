import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';


class MovieList extends Component {
 static contextType=UserContext;

    componentDidMount(){
        console.log("the context is", this.context);
    }
    render() {
        return (
            <UserContext.Consumer>

                {userContext=><div>Movie List {userContext.CurrentUser ? userContext.CurrentUser.name : ""} <MovieRow/></div>}
            
            </UserContext.Consumer>
        );
    }
}

// MovieList.contextType=UserContext; //the second way to set the contextType static property!!
export default MovieList;