import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product /*products.slice(0, 12)*/
    };
  }

  render (){
    

    return(
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.product.picture}/>
          <Card.Body>
            <Card.Title>{this.state.product.title}</Card.Title>
            <Card.Text> {this.state.product.subTitle} </Card.Text>
            <Button variant="primary"> More </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ProductCard;
