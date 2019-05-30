import React, { Component } from 'react';

import UserList from '../components/users/userList'

import { Form, Button } from 'react-bootstrap'

import {history} from '../App';

class UsersManager extends Component {
  constructor(props) {
    super(props);

    if(localStorage.getItem('employee') !== null){
      this.handleUsers();
    }

		this.state = {
			users: null
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleUsers(){
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users'

    fetch(url, { 
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
          "authorizationToken": localStorage.getItem('employeeToken')
        },
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

  handleSubmit(event) {
    // If this method is called, the default action of the event will not be triggered.
    event.preventDefault(); 

    let body = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/employee/auth';
    fetch(url, { 
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      body: JSON.stringify(body), // data can be `string` or {object}!
    })
    .then(response => { 
      console.log("POST employee/auth  Response Code: " + JSON.stringify(response.status))
      if (response.status === 200) {
        console.log("Success")

      }
      return response.json()
    }) 
    .then(body => {
      //window.alert(JSON.stringify(body, null, "\t"))
      console.log("Before Store in Local Storage, Employee: " +  body.id)
      console.log("Before Store in Local Storage, Token: " +  body.token)
      localStorage.setItem('employee',body.id)
      localStorage.setItem('employeeToken',body.token)
      localStorage.setItem('isActivated',"2")

      console.log("After get from Local Storage, Employee: " + localStorage.getItem('employee'))
      console.log("After get from Local Storage, Token: " + localStorage.getItem('employeeToken'))


      history.push('/users')
    })
    .catch(error => console.error(">Error: " + error));
  }

  render (){
    const isEmployee = localStorage.getItem('employee');
    const isActivated = localStorage.getItem('isActivated');
		if(isActivated === null && isEmployee === null){
      return(
        <div style={{backgroundColor:'rgb(245,245,245)'}}>
          <div className="login">
            <h3 className="header-login">Login As Employee</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep Logged in" />
              </Form.Group>
              <div className="center-button">
              <Button style={{width:'100px'}} variant="primary" type="submit">
                Login
              </Button>
              </div>
            </Form>
          </div>
        </div>
      )
    }
    else if(isEmployee != null){
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
}

export default UsersManager;
