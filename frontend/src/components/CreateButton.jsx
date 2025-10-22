import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useCreateBlog } from '../hooks/useCreateBlog';


const CreateButton = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createBlog, loading, error } = useCreateBlog();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreate = async (e) => {
    e.preventDefault(); // jangan lupa ini agar form tidak reload

    try {
      const data = await createBlog(title, content);
      console.log('Response:', data);
      alert('Blog berhasil dibuat!');
      setTitle('');
      setContent('');
      handleClose();
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat membuat blog.');
    }
  };

  return (
    <div className="m-3 d-flex justify-content-end">
      <Button variant="primary" onClick={handleShow} className="m-3">
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateButton;