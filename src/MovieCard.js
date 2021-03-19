import React, { Component } from 'react';
import UserList from './UserList';

class MovieCard extends Component {
 
  render() {
    


    
    
   // console.log(test);
    return (
      <div key={this.props.movieInfo.id}>
     	<h2>{this.props.movieInfo.name}</h2>
      	
        <UserList usersWhoLikedMovie={this.props.usersByMovie} users={this.props.users}/>
      </div>
    )
    
  }
  
}

//for each movie, pass in the profiles that favorited that movie



export default MovieCard