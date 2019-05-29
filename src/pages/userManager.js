import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import {history} from '../App'

/*
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

	<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Birth Date</Form.Label>
						<br/>
					<DatePicker class="form-control"
							selected={Date.parse(user.birthDate)}
							//onSelect={this.handleSelect} //when day is clicked
							//onChange={this.handleChange} //only when value has changed
						/>
					</Form.Group>
*/


class UserManager extends Component {
	constructor(props) {
		super(props);

		const id = props.location.state.id;

		this.handleGetUserById(id)

		this.state = {
			id: id,
			user: null,
			picture: undefined
		}

	  this.handleFrontPicture = this.handleFrontPicture.bind(this)
		this.handleBackPicture = this.handleBackPicture.bind(this)
		
		this.handleUpdateUser = this.handleUpdateUser.bind(this)
  }

  handleFrontPicture(event){
    let picture = event.target.files[0]

    this.setState({
      frontPicture: URL.createObjectURL(picture),
			backPicture: this.state.backPicture,
			frontPictureObj: picture,
			backPictureObj: this.state.backPictureObj
    })
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

	handleGetUserById(id){
		var url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users/';
		url += id

		fetch(url, { 
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			mode: "cors" // no-cors, cors, *same-origin
		})  
		.then((resp) => {
			if(resp.status === 200){
				console.log("Success")
			}
			console.log("GET /users/ " + id + " Response Code: " + resp.status)
			return resp.json() 
		})
		.then(body => {
			const user = body

			this.setState({id: user.id, user: user, picture: "data:image/jpeg;base64," + user.value})

			console.log("Fetch User: " + JSON.stringify(user, null, "\t"))
		})
		.catch(function(err){
			console.log("Fetch Error: ",err);
		});
	}
	
	handleUpdateUser(event){
		event.preventDefault();

		var url = 'https://fvspqr8obi.execute-api.us-east-1.amazonaws.com/Production/users/';
		url += this.state.user.id

		var body = this.state.user
		body.FirstName = event.target.firstName.value
		body.LastName = event.target.lastName.value
		//body.email = event.target.email.value
		body.birthData = event.target.birthday.value
		body.address = event.target.address.value
		body.usersStatus = event.target.userStatus.value

		this.setState({user: body})

		console.log("Update User: " + JSON.stringify(body, null, "\t"))

		fetch(url, { 
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, cors, *same-origin
			body: JSON.stringify(body), // data can be `string` or {object}!
			//headers: {
			//	"Content-Type": "application/json",
			//	Authorization: 'Bearer ' + localStorage.getItem('token'),
			//},
    })
    .then(response => { 
      console.log("PUT /users/" + body.id + "  Response Code: " + JSON.stringify(response.status))
      if (response.status === 200) {
				console.log("Success")
				
				//window.alert(JSON.stringify(body, null, "\t"))
				alert('Successful Update')
				history.push('/users'); 	
			}
    }) 
    .catch(error => console.error("> Error:" + error));
	}


	render (){
		const isEmployee = localStorage.getItem('employee');
		if(isEmployee === null){
			return(
				<h3>Your are not authorized!</h3>
			)
		}
		else{
			if(this.state.user === null){
				return(
					<div>
						<h3>Fetching User...</h3>
					</div>
				)
			}else {
				return(
					<div>
						<h3 style={{marginBottom:'40px'}}>User: {this.state.user.FirstName} {this.state.user.LastName}</h3>
						<Form onSubmit={this.handleUpdateUser}>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput1">
										<Form.Label>Id</Form.Label>
										<Form.Control type="text" placeholder="empty" 
											value={this.state.user.id}
											name="id"
											readOnly
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput1">
										<Form.Label>First Name</Form.Label>
										<Form.Control type="text" placeholder="empty" 
											defaultValue={this.state.user.FirstName}
											name="firstName"
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput2">
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" placeholder="empty" 
										defaultValue={this.state.user.LastName}
										name="lastName"
									/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="empty" 
											defaultValue={this.state.user.email}
											name="email"
											readOnly
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput4">
										<Form.Label>Birth Date</Form.Label>
										<Form.Control type="text" placeholder="empty" 
											defaultValue={this.state.user.birthData}
											name="birthday"
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput5">
										<Form.Label>Address</Form.Label>
										<Form.Control type="text" placeholder="empty" 
											defaultValue={this.state.user.address}
											name="address"
											/>
										
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Has Activated the Box</Form.Label>
										<Form.Control as="select" 
											defaultValue={this.state.user.usersStatus}
											name="userStatus">
											<option value="1">True</option>
											<option value="0">False</option>
										</Form.Control>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput5">
										<Form.Label>Citizen Card </Form.Label>
										<br/>
										<Image src={this.state.picture}  height="150px"/>
									</Form.Group>
								</Col>
								<Col>
										<Form.Group controlId="exampleForm.ControlInput5">
											<Form.Label>Citizen Card </Form.Label>
											<br/>
											<Image src={this.state.backPicture}  height="150px"/>
										</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput5">
										<Form.Label>Upload Front </Form.Label>
										<Form.Control 
											onChange={ (event) => this.handleFrontPicture(event)}
											type="file" placeholder="empty"
											accept="image/png, image/jpeg" />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="exampleForm.ControlInput5">
										<Form.Label>Upload Back </Form.Label>
										<Form.Control 
											onChange={ (event) => this.handleBackPicture(event)}
											type="file" placeholder="empty"
											accept="image/png, image/jpeg"
											/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row>
								<Col>
									<Form.Group controlId="exampleForm.ControlTextarea1">
										<Form.Label>Observations</Form.Label>
										<Form.Control as="textarea" rows="3" name="observations"/>
									</Form.Group>
								</Col>
							</Form.Row>
							<div className="center-button">
								<Button variant="primary" type="submit">
									Apply Changes
								</Button>
							</div>
						</Form>
					</div>
				)
			}
		}
	}
}

export default UserManager;
