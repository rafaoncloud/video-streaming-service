import React, { Component } from 'react';

import { Form, Button, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import {history} from '../App';


class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      frontPicture: '/images/example.jpg',
      backPicture: '/images/example.jpg',
      frontPictureObj: undefined,
      backPictureObj: undefined,
      responseCode: undefined
    }

    this.handleFrontPicture = this.handleFrontPicture.bind(this)
    this.handleBackPicture = this.handleBackPicture.bind(this)
    this.fetchExample = this.fetchExample.bind(this)

    this.handleSignUpForm = this.handleSignUpForm.bind(this)

    //setInterval(): executes a function, over and over again, at specified time intervals
    //setTimeout() : executes a function, once, after waiting a specified number of milliseconds

    /*setInterval(() => {
      this.fetchExample();
      //window.alert(JSON.stringify(this.state, null, "\t"))
    }, 3000);*/
  }

  handleFrontPicture(event){
    var picture = event.target.files[0]

    this.setState({
      frontPicture: URL.createObjectURL(picture),
      backPicture: this.state.backPicture,
      frontPictureObj: picture,
      backPictureObj: this.state.backPictureObj
    })

    console.log("Front picture: " + picture)
    console.log("Front picture: " + this.state.frontPicture)
    console.log("Front picture: " + this.state.frontPictureObj)
  }

  handleBackPicture(event){
    const picture = event.target.files[0] 

    this.setState({
      frontPicture: this.state.frontPicture,
      backPicture: URL.createObjectURL(picture),
      frontPictureObj: this.state.frontPictureObj,
      backPictureObj: picture
    })
  }

  handleSignUpForm(event){
    event.preventDefault();

    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users';
    const readerFrontPicture = new FileReader()
    const readerBackPicture = new FileReader()
    
    console.log("Object URL to front picture: " + this.state.frontPicture)
    console.log("Front picture object: " + URL.revokeObjectURL(this.state.frontPicture))
    console.log("Front picture object: " + this.state.frontPictureObj)
    console.log("Back picture object: " + this.state.backPictureObj)

    var body = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      birthDate: event.target.birthDate.value,
      address: event.target.address.value,
      value: undefined, // Front Picture
      value2: undefined // Back Picture
    }

    readerFrontPicture.onload = function(upload) {
      let result = upload.target.result;
      body.value = result.replace(/^data:image\/[a-z]+;base64,/, "");
      //console.log(body.value)
    };
    readerFrontPicture.readAsDataURL(this.state.frontPictureObj)

    readerBackPicture.onload = function(upload) {
      let result = upload.target.result;
      body.value2 = result.replace(/^data:image\/[a-z]+;base64,/, "");
      //console.log(body.value)
    };
    readerBackPicture.readAsDataURL(this.state.backPictureObj)

    // BAD PRACTICE
    setTimeout(function(){
      //console.log(JSON.stringify(body))

      fetch(url, { 
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        body: JSON.stringify(body), // data can be `string` or {object}!
      })
      .then(response => { 
        console.log("POST /users  Response Code: " + JSON.stringify(response.status))
        if (response.status === 200) {
          console.log("Success")

          history.push('/login');
          
        }
        /*this.setState({
          frontPicture: this.state.frontPicture,
          backPicture: this.state.backPicture,
          frontPictureObj: this.state.frontPictureObj,
          backPictureObj: this.state.backPictureObj,
          responseCode: JSON.stringify(response.status)
        })*/
      }) 
      .catch(error => console.error("Error:" + error));
    }, 2000);
  }  

  fetchExample(){
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users';
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
      this.setState({
        frontPicture: this.state.frontPicture,
        backPicture: this.state.backPicture,
        example: users
      
      });
      alert("Fetch Example: " + JSON.stringify(this.state, null, "\t"))
      //console.log("state",this.state.pictures);
    })
    .catch(function(err){
      console.log("Fetch Error: ",err);
    });
  }

  render(){
    return(
      <div>
        <h3 style={{marginBottom:'40px'}}>Create Account</h3>
        <Form onSubmit={this.handleSignUpForm}>
          <Form.Row> 
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="" name="firstName"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder="" name="lastName"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="" name="email"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="************" name="password"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control required type="text" placeholder="" name="birthDate"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address"/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Citizen Card</Form.Label>
                <br/>
                <Image src={this.state.frontPicture} height="150px"/>
              </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="exampleForm.ControlInput5">
                  <br/>
                  <Image src={this.state.backPicture} height="150px"/>
                </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Upload Front </Form.Label>
                <Form.Control 
                  onChange={ (event) => this.handleFrontPicture(event)}
                  required type="file" placeholder="empty"
                  accept="image/png, image/jpeg" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Upload Back </Form.Label>
                <Form.Control 
                  onChange={ (event) => this.handleBackPicture(event)}
                  required type="file" placeholder="empty"
                  accept="image/png, image/jpeg" />
              </Form.Group>
            </Col>
          </Form.Row>
          <div className="center-button">
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    );
  }

  /*render (){
    return(
      <div>
        <h3 style={{marginBottom:'40px'}}>Create Account</h3>
        <Form>
          <Form.Row> 
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder=""/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" placeholder=""/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder=""/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control required type="text" placeholder=""/>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="empty" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Has Activated the Box</Form.Label>
                <Form.Control as="select">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Citizen Card </Form.Label>
                <br/>
                <Image src={this.state.frontPicture} height="150px"/>
              </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="exampleForm.ControlInput5">
                  <Form.Label>Citizen Card </Form.Label>
                  <br/>
                  <Image src={this.state.backPicture} height="150px"/>
                </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Upload Front </Form.Label>
                <Form.Control 
                  onChange={ (event) => this.handleFrontPicture(event)}
                  required type="file" placeholder="empty"
                  accept="image/png, image/jpeg" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Upload Back </Form.Label>
                <Form.Control 
                  onChange={ (event) => this.handleBackPicture(event)}
                  required type="file" placeholder="empty"
                  accept="image/png, image/jpeg" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observations</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Form.Row> 
          <div className="center-button">
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    )
  }*/
}


export default SignUp;
