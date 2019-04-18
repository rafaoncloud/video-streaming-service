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
    let form = event.target

    let formJson = {
      email: form.elements.email.value,
      password: form.elements.password.value
    }

    window.alert(JSON.stringify(formJson, null, "\t"))
    /*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/
  }

  render (){
    return(
      <div className="login">
        <h3 className="header-login">Login</h3>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
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
