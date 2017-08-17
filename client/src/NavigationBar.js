import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                Company Logo Here
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem>Login</NavItem>
                <NavItem>Sign Out</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;