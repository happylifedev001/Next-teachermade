import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { connect } from 'react-redux';
import { setCheckModal, setInsertItem } from '../actions/stageAction';
import Button from 'react-bootstrap/esm/Button';
import $ from 'jquery'

function CheckModal({showModal, setCheckModal, setInsertItem, insert}) {

    return (
        <Modal show={showModal} onHide={() => { setCheckModal(false)}} size="md">
            <Modal.Header closeButton>
                <Modal.Title>Setting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h6>Number of {insert.type}</h6>
                        </Col>
                        <Col md={1}>
                            <select id='numOfBox'>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                        </Col>
                        <Col md={4}>
                            <select id="direction">
                                <option value={'vertical'}>Vertical</option>
                                <option value={'horizontal'}>Horizontal</option>
                            </select>
                        </Col>
                        <Col md={3}>
                            <Button variant='outline-primary' onClick={() => {
                                setCheckModal(false);
                                setInsertItem({...insert, number: Number($('#numOfBox').val()), direction: $('#direction').val()})
                            }}>
                                <i className='fas fa-check' />
                                OK
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = state => ({
    showModal: state.stage.checkModal,
    insert: state.stage.insert
}
)
export default connect(mapStateToProps, {setCheckModal, setInsertItem})(CheckModal);
