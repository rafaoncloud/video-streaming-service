import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { 
	Container,
	Row,
	Col,
	Button
} from 'react-bootstrap';

class ProductsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: props.users, /*products.slice(0, 12)*/
		};
	}

	render (){

		var users = this.state.users.map(user =>(
				<Row style={{marginTop:24}} key={user.id}>
					<Col> {user.name} {user.lastName} </Col>
					<Col> {user.birthDate} </Col>
					<Col> {user.boxActive ? 
						<img src="images/icons/green-status.png" alt="True" height="15px"/>
						: 
						<img src="images/icons/red-status.png" alt="False" height="13px"/> 
					 } 
					</Col>
					<Col> 
						<Button variant="outline-primary"> 
							<Link to={{
								pathname:'/user',
								state:{
									userId: user.id
								}
							}} > 
								Change 
							</Link> 
						</Button> 
					</Col>
				</Row>
		))

		return(
			<div>
				<br/>
				<Container>
					<Row style={{fontWeight:'bold',fontSize:'120%'}}>
						<Col> Name </Col>
						<Col> Birth Date </Col>
						<Col> Box Active </Col>
						<Col> </Col>
					</Row>
					{users}
				</Container>
			</div>
		)
	}
}

export default ProductsList;
