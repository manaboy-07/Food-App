/** @format */

import React from "react";
import "../styles/Nav.css";

import logo from "../images/Logo.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand='lg' className='nav'>
      <Container className='nav'>
        <Navbar.Brand href='#home'>
          <div className='logo'>
            <img src={logo} alt='logo' className='logo-img' />
            <h1 className='white'> Lilies</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='nav-list'>
            <Nav.Link href='#home' className='nav-item white '>
              <span className='home'> Home</span>
            </Nav.Link>
            <Nav.Link href='#link' className='nav-item white'>
              Login
            </Nav.Link>
            <Nav.Link href='#link' className='nav-item white'>
              <button className='sign__up'>Sign Up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
