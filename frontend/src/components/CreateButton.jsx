import React, { useState } from 'react';
import { use } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


// Komponen fungsional untuk tombol 'Create'
const CreateButton = ({ onClick }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // Gunakan komponen Button dari React-Bootstrap
        <div className="d-flex justify-content-start">
            <Button
                variant="primary" // Menetapkan warna primer (biru default Bootstrap)
                onClick={handleShow} // Meneruskan fungsi klik dari parent komponen
                className="m-3" // Menambahkan margin atas dan bawah menggunakan class utilitas Bootstrap
            >
                Create
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Masukkan title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formContent"
                        >
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default CreateButton;