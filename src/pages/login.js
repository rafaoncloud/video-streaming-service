import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import './login.css'

import {history} from '../App'


class Login extends Component {
  constructor(props){
    super(props)

    const id = localStorage.getItem('id');
    if(id !== null)
      this.state = {
        picture: '/images/example.jpg',
        pictureObj: undefined,
        id: id
      }
    else
      this.state = {
        picture: '/images/example.jpg',
        pictureObj: undefined,
        id: undefined
      }
    
      

    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.handleFaceRecognition = this.handleFaceRecognition.bind(this);
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

      }
      return response.json()
    }) 
    .then(body => {
      //window.alert(JSON.stringify(body, null, "\t"))
      this.setState({
        id: body.id,
        picture: this.state.picture,
        pictureObj: this.state.pictureObj,
      })

      console.log("Before Store in Local Storage, Token: " +  body.token)
      localStorage.setItem('token', body.token);
      localStorage.setItem('id',body.id);
      localStorage.setItem('isActivated',body.usersStatus); 
      console.log("After get from Local Storage, Token: " + localStorage.getItem('token'))
      console.log("is Activated",localStorage.getItem('isActivated'))

      if(localStorage.getItem('isActivated') === "0")
        history.push('/login')
      else 
        history.push('/')
    })
    .catch(error => console.error("Error:" + error));
  }

  handleChangePicture(event){
    const file = event.target.files[0]

    this.setState({
      picture: URL.createObjectURL(file),
      pictureObj: file,
    })
  }

  handleFaceRecognition(event){
    event.preventDefault();

    var url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users/';
    url += this.state.id
    const reader = new FileReader()

    var body = {
      id: this.state.id,
      value: undefined
    }

    reader.onload = function(upload) {
      let result = upload.target.result;
      body.value = result.replace(/^data:image\/[a-z]+;base64,/, "");
      //console.log(body.value)
    };
    reader.readAsDataURL(this.state.pictureObj)

    // BAD PRACTICE
    setTimeout(function(){
      //console.log(JSON.stringify(body))

      fetch(url, { 
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        body: JSON.stringify(body), // data can be `string` or {object}!
        //headers: {
          //Authorization: 'Bearer ' + localStorage.getItem('token'),
        //},
      })
      .then(response => { 
        console.log("POST /users  Response Code: " + JSON.stringify(response.status))
        if (response.status === 200) {
          console.log("Success")

          localStorage.setItem('isActivated',"1")
          history.push('/');
        }
      }) 
      .catch(error => console.error("Error:" + error));
    }, 2000);
  }

  render (){
    const id = this.state.id

    if(localStorage.getItem('token') !== null){
      console.log("User Id: " + id)
      return(
        <div>
          <h3 style={{marginBottom:'40px'}}>Face Recognition</h3>
          <Form onSubmit={this.handleFaceRecognition}>
            <Form.Group>
              <Form.Label>Upload a photo with your face. You should not wear glasses or any object that obstructs the recognition of your face.</Form.Label>
              <br/>
              <br/>
              <br/>
              <br/>
              <Image src={this.state.picture} height="300px"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput5">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control 
                onChange={this.handleChangePicture}
                required type="file" placeholder="empty"
                accept="image/png, image/jpeg"/>
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
    else
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
