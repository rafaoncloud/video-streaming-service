import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Header extends Component {
  render (){
    return(
        <header>
          <div className="logo">
            LOGO
          </div>

          <nav>
            <ul>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="">Users</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
        </header>
      )
  }
}

export default Header;
