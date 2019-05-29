import React, { Component } from 'react';

class AboutUs extends Component {  
    render (){
        return(
          <div style={{margin:"0px auto",textAlign:"center"}}>
            <h3> About Us </h3>
            <br/>
            <br/>
            <div>
              <p>Master Degree in Informatics Engineering</p>
              <p>Services Engineering Course 2018/2019</p>
              <p>University of Coimbra</p>
              <img className="logo-footer" src="images/ucoimbra-logo.png" alt="UC Logo 2019" width="200"></img>
            </div>
          </div>
        )
    }
}

export default AboutUs;
