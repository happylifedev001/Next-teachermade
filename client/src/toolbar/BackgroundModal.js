import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/esm/Container'
import React, { useState, useRef } from 'react'
import { connect } from 'react-redux';
import { setBackground } from '../actions/stageAction';

function BackgroundModal({show, onHide, setBackground}) {

    const [uploadedImage, setUploadedImage] = useState(null);

    const setBackgroundImage = () => {
        setBackground(uploadedImage);
    }

    const UploadButton = () => {
        const handleUpload = (e) => {
            let img = e.target.files[0];
            setUploadedImage(URL.createObjectURL(img));
        };
        return (
            <span className='mr-2'>
                <label
                    htmlFor="contained-button-upload"
                    className="uploadImageButton btn btn-primary"
                    onChange={(e) => handleUpload(e)}
                    variant="outline-primary"
                >
                    <input
                        type="file"
                        accept="image/*"
                        id="contained-button-upload"
                        hidden
                    />
                    <i className='fas fa-upload' />
                    <span className="uploadImageText">Upload</span>
                </label>
            </span>
        );
    };

    return (
        <Modal id="backModal" show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Background</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <div className='center'>
                        <img
                            src={uploadedImage}
                            // alt="Select Image File"
                            width={300}
                            height={300}
                        />
                        <UploadButton />
                        <button className='btn btn-success' onClick={setBackgroundImage}>
                            <i className='fas fa-check me-1' />
                            Set To Background Image
                        </button>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default connect(null, {setBackground})(BackgroundModal);