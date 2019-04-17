import React, { Component } from 'react';

import HomepageCarousel from '../components/carousel/homepageCarousel'
import ProductList from '../components/products/productList'



const distanceToCarousel = {
  paddingTop: '32px'
}

var productsExample = [
  {
    id: 1,
    title: 'American Sniper',
    subTitle: 'Drama',
    picture: 'images/titles/american-sniper.jpg'
  },
  {
    id: 2,
    title: 'Save Private Ryan',
    subTitle: 'Drama',
    picture: 'images/titles/save-private-ryan.jpg'
  },
  {
    id: 3,
    title: 'Gladiator',
    subTitle: 'Action',
    picture: 'images/titles/gladiator.jpg'
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: productsExample /*products.slice(0, 12)*/
    };
  }

  render (){
    return(
      <div >
        <HomepageCarousel/>
        <div style={distanceToCarousel}>
          <ProductList products={this.state.products}/>
        </div>
      </div>
    )
  }
}

export default HomePage;
