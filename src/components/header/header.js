import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Works with Router

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
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render (){
    return(  
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="logo">Streaming App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
            </Nav>
            <Nav pullRight>
              <Nav.Link href="/login" className="text-info">Login</Nav.Link>
              <Nav.Link href="/sign-up" className="text-info">Sign up</Nav.Link>
              <Nav.Link href="/logout" className="text-danger">Logout</Nav.Link>
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
