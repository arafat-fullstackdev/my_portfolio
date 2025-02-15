//import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button, Container,NavbarBrand } from 'reactstrap';

import './Customnav.css';

const NavBar=() =>{


  return (
    <Navbar expand="md" className="custom_navbar">
        <Container>
            {/*Lgo Section*/}
            <NavbarBrand href="/" className="logo">
              <span className='logo_icon'>⭕</span> <span className='logo_text'>Cod<span style={{color: 'orange'}}>Me</span></span>
            </NavbarBrand>
            {/*Navigation LInk*/}

             <Nav className='mx-auto'>
              <NavItem>
                <NavLink href='/' className='active'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about'>About</NavLink>
              </NavItem>
            </Nav>

            <Button outline color="danger" className='button_cv'>Download CV</Button>
        </Container>

    </Navbar>
  );
}

export default NavBar;