import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logosilver from '../images/logosilver.png'

function TopNav() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logosilver} className="logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#" className='logo-name'>Store locatore </Nav.Link>
            <Nav.Link className='logo-name'> - </Nav.Link>
            <Nav.Link href="#" className='logo-name'> Download Brochure </Nav.Link>
            <Nav.Link className='logo-name'> - </Nav.Link>
            <Nav.Link href="#" className='logo-name'> Product Enquiry</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default TopNav
