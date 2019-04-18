import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

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
		// Debug
		window.alert(JSON.stringify(this.state, null, "\t"))

		return(
			<div>
				<h3 style={{marginBottom:'40px'}}>User: {this.state.user.name} {this.state.user.lastName}</h3>
				<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" placeholder="empty" 
							value={this.state.user.name}
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput2">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" placeholder="empty" 
							value={this.state.user.lastName}
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput3">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="empty" 
							value={this.state.user.email}
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput4">
						<Form.Label>Birth Date</Form.Label>
						<Form.Control type="text" placeholder="empty" 
							value={this.state.user.birthDate}
						/>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput5">
						<Form.Label>Address</Form.Label>
						<Form.Control type="text" placeholder="empty" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Has Activated the Box</Form.Label>
						<Form.Control as="select" 
							value={this.state.user.boxActive}>
							<option value="true">True</option>
							<option value="false">False</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect2">
						<Form.Label>Example multiple select</Form.Label>
						<Form.Control as="select" multiple>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
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
