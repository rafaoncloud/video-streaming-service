import React, { Component } from 'react';

import HomepageCarousel from '../components/carousel/homepageCarousel'

const distanceToCarousel = {
  paddingTop: '32px'
}

class HomePage extends Component {
    render (){
        return(
          <div >
            <HomepageCarousel/>
            <div style={distanceToCarousel}>
              Home Page
            </div>

            
          </div>
        )
    }
}

export default HomePage;
