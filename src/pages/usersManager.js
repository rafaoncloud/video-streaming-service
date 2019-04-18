import React, { Component } from 'react';

import UserList from '../components/users/userList'

const usersExample = [
  {
    id: 1,
    name: 'Eric',
    lastName: 'Clapton',
    birthDate: '30/03/1945',
    boxActive: false
  },
  {
    id: 2,
    name: 'Rafael',
    lastName: 'Henriques',
    birthDate: '14/11/1995',
    boxActive: true
  },
]

class UsersManager extends Component {
  constructor(props) {
		super(props);

		this.state = {
			users: usersExample
		};
	}

  render (){
      return(
        <div>
          <h3>Manage Users</h3>
          <UserList users={this.state.users}/>
        </div>
      )
  }
}

export default UsersManager;
