import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function MyNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid={true}>
                <Navbar.Toggle aria-controls="insert-toolset" />
                <Navbar.Collapse id="insert-toolset">
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" onClick={props.openInsertToolset}>
                            <i className="fas fa-plus me-1"></i>
                            Insert
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm">
                            <i className="fas fa-pen me-1"></i>
                            Draw
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm">
                            <i className="fas fa-marker me-1"></i>
                            Highlighter
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm">
                            <i className="fas fa-eraser me-1"></i>
                            Eraser
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
