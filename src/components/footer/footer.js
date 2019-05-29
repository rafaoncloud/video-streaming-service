import React, { Component } from 'react';

class Footer extends Component {
    render (){
        return(
          <footer className = "footer" >
            <div>
              <span className="text-muted footer-span">Master Degree in Informatics Engineering</span>
              <span className="text-muted footer-span">Services Engineering Course 2018/2019</span>
              <span className="text-muted footer-span">University of Coimbra</span>
              <img className="logo-footer" src="images/ucoimbra-logo.png" alt="UC Logo 2019" width="80"></img>
            </div>
          </footer>
        )
    }
}

export default Footer;
