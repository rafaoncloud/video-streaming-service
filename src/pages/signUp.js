import React, { Component } from 'react';

import { Form, Button, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      frontPicture: '/images/example.jpg',
      backPicture: '/images/example.jpg',
      example: null
    }

    this.handleFrontPicture = this.handleFrontPicture.bind(this)
    this.handleBackPicture = this.handleBackPicture.bind(this)
    this.fetchExample = this.fetchExample.bind(this)
    this.postExample = this.postExample.bind(this)

    //setInterval(): executes a function, over and over again, at specified time intervals
    //setTimeout() : executes a function, once, after waiting a specified number of milliseconds

    /*setInterval(() => {
      this.fetchExample();
      //window.alert(JSON.stringify(this.state, null, "\t"))
    }, 3000);*/
  }

  handleFrontPicture(event){
    let picture = event.target.files[0]

    this.setState({
      frontPicture: URL.createObjectURL(picture),
      backPicture: this.state.backPicture
    })

    this.fetchExample()
  }

  handleBackPicture(event){
    const picture = event.target.files[0] 

    this.setState({
      frontPicture: this.state.frontPicture,
      backPicture: URL.createObjectURL(picture)
    })

    this.postExample()
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

  postExample(){
    const url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users';
    var data = this.state.example[0]
    data.id = 24
    data.name = "Rafa"
    console.log(JSON.stringify(data))
    fetch(url, { 
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          body: JSON.stringify(data), // data can be `string` or {object}!
      })
    .then(response => console.log("POST /users  Response Code: " + JSON.stringify(response.status)))
    .catch(error => console.error("Error:" + error));
  }

  render (){
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
  }
}

export default SignUp;
