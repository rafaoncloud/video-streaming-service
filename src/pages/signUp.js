import React, { Component } from 'react';

import { Form, Button, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      frontPicture: '/images/example.jpg',
      backPicture: '/images/example.jpg'
    }

    this.handleFrontPicture = this.handleFrontPicture.bind(this)
    this.handleBackPicture = this.handleBackPicture.bind(this)
  }

  handleFrontPicture(event){
    let picture = event.target.files[0]

    this.setState({
      frontPicture: URL.createObjectURL(picture),
      backPicture: this.state.backPicture
    })
  }

  handleBackPicture(event){
    const picture = event.target.files[0] 

    this.setState({
      frontPicture: this.state.frontPicture,
      backPicture: URL.createObjectURL(picture)
    })
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
