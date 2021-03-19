import React, { Component } from 'react';

class UserList extends Component {
 
  render() {
   console.log(this.props)
    if(!this.props.usersWhoLikedMovie || this.props.usersWhoLikedMovie.length === 0) {
     	return <p>None of the current users liked this movie</p>
    }
    return (
      <div>
      <p>Liked By:</p>{
      this.props.usersWhoLikedMovie.map(id => (
        	<ul key={id}>
        		<li>{this.props.users[id].name}</li>
        	</ul>
        ))
      }</div>
    )
    
  }
  
}





export default UserList