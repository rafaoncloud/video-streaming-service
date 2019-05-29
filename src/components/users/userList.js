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
		if(this.state.users !== null){
      var users = this.state.users.map(user =>(
          <Row style={{marginTop:24,fontSize:'70%'}} key={user.id}>
            <Col> {user.id} </Col>
            <Col> {user.FirstName} {user.LastName} </Col>
            <Col> {user.email} </Col>
            <Col> {user.usersStatus === 1 ? 
              <img src="images/icons/green-status.png" alt="1" height="15px"/>
              : 
              <img src="images/icons/red-status.png" alt="0" height="13px"/> 
            } 
            </Col>
            <Col> 
              <Button variant="outline-primary"> 
                <Link to={{
                  pathname:'/user',
                  state:{
                    id: user.id
                  }
                }}> 
                  Change 
                </Link> 
              </Button> 
            </Col>
          </Row>
      ))
    }

    return(
      <div>
        <br/>
        <Container>
          <Row style={{fontWeight:'bold',fontSize:'100%'}}>
            <Col> Id </Col>
            <Col> Name </Col>
            <Col> Email </Col>
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
