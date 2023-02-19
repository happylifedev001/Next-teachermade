import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'

import { setItem } from '../actions/stageAction';

function ToolNavbar({ openInsertToolset, setItem, selectedItem }) {
    useEffect(() => {
        setItem(selectedItem);
    }, [selectedItem, setItem])

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid={true}>
                <Navbar.Toggle aria-controls="insert-toolset" />
                <Navbar.Collapse id="insert-toolset">
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem === 'insert' ? true : false} onClick={() => { openInsertToolset(); setItem('insert') }}>
                            <i className="fas fa-plus me-1"></i>
                            Insert
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem === 'draw' ? true : false} onClick={() => setItem('draw')}>
                            <i className="fas fa-pen me-1"></i>
                            Draw
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem === 'highlighter' ? true : false} onClick={() => setItem('highlighter')}>
                            <i className="fas fa-marker me-1"></i>
                            Highlighter
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem === 'eraser' ? true : false} onClick={() => setItem('eraser')}>
                            <i className="fas fa-eraser me-1"></i>
                            Eraser
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <div variant="outline-success" size="sm" active={selectedItem === 'background' ? true : false} onClick={() => setItem('background')}>

                            <label
                                htmlFor="contained-button-upload"
                                className="uploadImageButton"
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="contained-button-upload"
                                    hidden
                                />
                                <i className="fas fa-image me-1" />
                                <span className="uploadImageText">Upload</span>
                            </label>
                            Background
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => ({
    selectedItem: state.stage.selectedItem
})

export default connect(mapStateToProps, { setItem })(ToolNavbar);
