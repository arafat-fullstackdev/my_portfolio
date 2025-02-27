import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button, Container, NavbarBrand } from 'reactstrap';

import './Customnav.css';

const NavBar = () => {
  return (
    <Navbar expand="md" className="custom_navbar">
      <Container className="d-flex justify-content-between">
        {/* Logo Section */}
        <NavbarBrand href="/" className="logo">
          <span className="logo_icon">⭕</span>
          <span className="logo_text">Cod<span style={{ color: 'orange' }}>Me</span></span>
        </NavbarBrand>

        {/* Navigation Links */}
        <Nav className="navbar-nav">
          <NavItem>
            <NavLink href="/" className="active">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project">Project</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <Button outline color="danger" className="button_cv">Download CV</Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
