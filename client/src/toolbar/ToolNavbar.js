import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {connect} from 'react-redux'

import { setItem } from '../actions/stageAction';

function ToolNavbar({openInsertToolset, setItem}) {

    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setItem(selectedItem);
    }, [selectedItem])

    return (
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
                        <Button variant="outline-success" size="sm" active={selectedItem == 'draw' ? true : false} onClick={() => setSelectedItem('draw')}>
                            <i className="fas fa-pen me-1"></i>
                            Draw
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem == 'highlighter' ? true : false} onClick={() => setSelectedItem('highlighter')}>
                            <i className="fas fa-marker me-1"></i>
                            Highlighter
                        </Button>
                    </Nav>
                    <Nav className="me-2">
                        <Button variant="outline-success" size="sm" active={selectedItem == 'eraser' ? true : false} onClick={() => setSelectedItem('eraser')}>
                            <i className="fas fa-eraser me-1"></i>
                            Eraser
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default connect(null, {setItem})(ToolNavbar);
