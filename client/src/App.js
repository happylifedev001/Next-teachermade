import logo from './logo.svg';
import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Toolbar from './toolbar/Toolbar';

function App() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Teacher Made" height="45" />
            Teacher Made
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
            <Nav className="w-auto">
              <NavDropdown title={<span><i className='fas fa-user me-2'></i> User</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/logout">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Toolbar />
    </React.Fragment>
  );
}

export default App;
