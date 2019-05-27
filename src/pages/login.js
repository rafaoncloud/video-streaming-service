import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'

import './login.css'



class Login extends Component {
  construct(props){
    //super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // If this method is called, the default action of the event will not be triggered.
    event.preventDefault(); 

    let body = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/auth';
    fetch(url, { 
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      body: JSON.stringify(body), // data can be `string` or {object}!
    })
    .then(response => { 
      console.log("POST /auth  Response Code: " + JSON.stringify(response.status))
      if (response.status === 200) {
        console.log("Success")
        
        //history.push('/login');
      }
      /*this.setState({
        frontPicture: this.state.frontPicture,
        backPicture: this.state.backPicture,
        frontPictureObj: this.state.frontPictureObj,
        backPictureObj: this.state.backPictureObj,
        responseCode: JSON.stringify(response.status)
      })*/
      return response.json()
    }) 
    .then(body => {
      window.alert(JSON.stringify(body, null, "\t"))
        console.log("Before Store in Local Storage, Token: " + body)
        localStorage.setItem('token', body);

        console.log("After get from Local Storage, Token: " + localStorage.getItem('token'))
    })
    .catch(error => console.error("Error:" + error));
  }

  render (){
    return(
      <div className="login">
        <h3 className="header-login">Login</h3>

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
    )
  }
}

export default Login;
