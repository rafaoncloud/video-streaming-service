import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

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

class UserManager extends Component {
	constructor(props) {
		super(props);

		const userId = props.location.state.userId
		var user;
		

		if(userId === 1){
			user = usersExample[0]
		}else if(userId === 2) {
			user = usersExample[1]
		}

		this.state = {
			id: userId,
			user: user
		};
	}

	render (){
		let user = this.state.user
		// Debug
		window.alert(JSON.stringify(this.state, null, "\t"))

		return(
			<div>
				<h3 style={{marginBottom:'40px'}}>User: {this.state.user.name} {this.state.user.lastName}</h3>
				<Form>
					<Form.Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="empty" 
									value={user.name}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput2">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="empty" 
								value={user.lastName}
							/>
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput3">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="empty" 
									value={user.email}
								/>
							</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput4">
								<Form.Label>Birth Date</Form.Label>
								<Form.Control type="text" placeholder="empty" 
									value={user.birthDate}
								/>
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
								<Form.Control as="select" 
									value={user.boxActive}>
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
								<Image src="/images/example.jpg" height="150px"/>
							</Form.Group>
						</Col>
						<Col>
								<Form.Group controlId="exampleForm.ControlInput5">
									<Form.Label>Citizen Card </Form.Label>
									<br/>
									<Image src="/images/example.jpg" height="150px"/>
								</Form.Group>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput5">
								<Form.Label>Upload Front </Form.Label>
								<Form.Control type="file" placeholder="empty" />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput5">
								<Form.Label>Upload Back </Form.Label>
								<Form.Control type="file" placeholder="empty" />
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
				</Form>
				<div className="center-button">
          <Button variant="primary" type="submit">
            Apply Changes
          </Button>
        </div>
			</div>
		)
	}
}

export default UserManager;
