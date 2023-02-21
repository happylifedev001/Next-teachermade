import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';

import { setInsertItem, setItem } from '../actions/stageAction';

function MyModal({setItem, setInsertItem, selectedItem}) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(selectedItem === 'insert') setShowModal(true);
    }, [selectedItem])

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
                                setInsertItem({type: 'checkbox', number: 1});
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

const mapStateToProps = state => ({
    selectedItem : state.stage.selectedItem
})

export default connect(mapStateToProps, {setInsertItem, setItem})(MyModal);