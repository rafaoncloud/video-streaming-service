import React, { Component } from 'react';
//import { Link } from 'react-router-dom'; // Works with Router

import './header.css'

import{
  Navbar,
  Nav,
} from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.handleLogout = this.handleLogout.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout(event){
    localStorage.clear()
  }

  render (){
    const isLoggedIn = localStorage.getItem('token');
    const isEmployee = localStorage.getItem('employee');
    const isActivated = localStorage.getItem('isActivated');
    
    return(  
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="logo">Streaming App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {isActivated === null &&
                <Nav.Link href="/users">Users</Nav.Link>
              }
              <Nav.Link href="/about-us">About Us</Nav.Link>
            </Nav>
            <Nav pullRight>
            {isLoggedIn === null && localStorage.getItem('employee') === null &&
              <Nav.Link href="/login" className="text-info" >Login</Nav.Link>
            }
            {isLoggedIn !== null && isEmployee === null && isActivated === "0" &&
              <Nav.Link href="/login" className="text-primary" >Activate Account</Nav.Link>
            }
            {isLoggedIn !== null && isEmployee === null && isActivated === "1" &&
              <Nav.Link href="/" className="text-success" >Account Activated</Nav.Link>
            }
            {isLoggedIn === null &&
              <Nav.Link href="/sign-up" className="text-info">Sign up</Nav.Link>
            }
            {isLoggedIn !== null && 
              <Nav.Link href="/login" className="text-danger" onClick={this.handleLogout}>Logout</Nav.Link>
            }
            { localStorage.getItem('employee') !== null &&
              <Nav.Link href="/login" className="text-danger" onClick={this.handleLogout}>Logout</Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
/*
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="logo">Streaming App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/users"><NavLink>Users</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about-us"><NavLink>About us</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/login"><NavLink className="text-info">Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/sign-up" ><NavLink className="text-info">Sign up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/logout"><NavLink className="text-danger">Logout</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        */
export default Header;
