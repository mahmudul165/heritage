import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CheckoutModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
// test
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={showModal} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutModal;
