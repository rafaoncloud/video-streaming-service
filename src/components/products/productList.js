import React, { Component } from 'react';

import ProductCard from './productCard'

import { Container, Row, Col } from 'react-bootstrap';

class ProductsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: props.products, /*products.slice(0, 12)*/
		};
	}

	render (){

		var cards = this.state.products.map(product =>(
				<Col>
					<ProductCard product={product} />
				</Col>
		))

		return(
			<div>
				<Container>
					<Row>
						{cards}
					</Row>
				</Container>
			</div>
		)
	}
}

export default ProductsList;
