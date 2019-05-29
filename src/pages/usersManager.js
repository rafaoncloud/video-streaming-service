import React, { Component } from 'react';

import UserList from '../components/users/userList'



class UsersManager extends Component {
  constructor(props) {
    super(props);

		this.state = {
			users: null
    };

    this.handleUsers();
  }
  
  handleUsers(){
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users'

    fetch(url, { 
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors" // no-cors, cors, *same-origin
      })  
    .then((resp) => {
      console.log("GET /users Response Code: " + resp.status)
      return resp.json() 
    })
    .then(body => {
      let users = body


      this.setState({users: users})
      /*let users = data.results.map((user) => {
        return(
          <div>
            
          </div>
            <div>
              <p>{pic.name.first} {pic.name.last}</p>
              <img src={pic.picture.medium} alt="Random User - 100"/>
            </div> 
          
        );
        
      });
      let names = data.results.map((res, index) => {
        return(res.name.first + res.name.last)

        return(
          <li key={index}>
            {res.name.first + res.name.last}
          </li>
        )
        
      });*/

      console.log("Fetch Example: " + JSON.stringify(this.state, null, "\t"))
      //console.log("state",this.state.pictures);
    })
    .catch(function(err){
      console.log("Fetch Error: ",err);
    });
  }

  render (){
    if(this.state.users === null){
      return(
        <div>
          <h3>Fetching Users...</h3>
        </div>
      )
    }else {
      return(
        <div>
          <h3>Manage Users</h3>
          <UserList users={this.state.users}/>
        </div>
      )
    }
  }
}

export default UsersManager;
