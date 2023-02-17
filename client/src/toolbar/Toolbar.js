import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Toolbar() {
  const [showInsertToolset, setShowInsertToolset] = useState(false);
  const closeInsertToolset = () => setShowInsertToolset(false);
  const openInsertToolset = () => setShowInsertToolset(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid={true}>
          <Navbar.Toggle aria-controls="insert-toolset" />
          <Navbar.Collapse id="insert-toolset">
            <Nav className="me-2">
              <Button variant="outline-success" size="sm" onClick={openInsertToolset}>
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

      <Modal show={showInsertToolset} onHide={closeInsertToolset} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Insert Toolset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <h6>QUESTION TOOLS</h6>
              </Col>
              <Col md={3}>
                <h6>MATH TOOLS</h6>
              </Col>
              <Col md={3}>
                <h6>CONTENT TOOLS</h6>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Checkbox / Multiselect</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Matching</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Algebra / Formula</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Audio</Button>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Dropdown</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Match Table Grid</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Fraction</Button>
              </Col>
              <Col md={3}>
                <Button variant='outline-success' size='sm'>Color Block</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Toolbar;