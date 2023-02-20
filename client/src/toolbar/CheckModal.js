import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default function CheckModal() {
  return (
    <Modal show={showModal} onHide={() => {
        setShowModal(false);
        setItem(null);
    }} size="lg">
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
                        <Button onClick={() => {
                            setInsertItem({type: 'checkbox'});
                            setShowModal(false);
                        }} variant='outline-success' size='sm'>Checkbox / Multiselect</Button>
                    </Col>
                    <Col md={3}>
                        <Button onClick={() => setInsertItem({type: 'matching'})} variant='outline-success' size='sm'>Matching</Button>
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
  )
}
