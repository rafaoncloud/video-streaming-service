import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Works with Router

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign up</Link>
              </li>
            </ul>
          </nav>
        </header>
      )
  }
}

export default Header;
