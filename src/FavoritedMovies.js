import React, { Component } from 'react';
import MovieCard from './MovieCard';


class FavoritedMovies extends Component {
 
  render() {
 
    return (
      <div>
      {Object.keys(this.props.movies).map(movieID => (
       <MovieCard users={this.props.users} usersByMovie={this.props.usersByMovie[movieID]} movieInfo={this.props.movies[movieID]}/> 
       
       ))
      }
      
      	
      	
      </div>
    )
    
  }
  
}

{/* list each movie with users that favorited it... this.props.usersByMovie[movieID] => Array [ "1", "2" ], lists each user by movie*/}



export default FavoritedMovies