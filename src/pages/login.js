import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'

import './login.css'

class Login extends Component {
    render (){
        return(
          <div className="login">
            <h3 className="header-login">Login</h3>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
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
