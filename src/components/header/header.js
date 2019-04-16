import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Works with Router

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem
 } from 'reactstrap'; 

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
      </header>
    )
  }
}

export default Header;
