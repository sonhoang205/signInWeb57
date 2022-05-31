import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import React from "react";
import './SignUp.css'

function SignUp() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    < >
      <Button onClick={handleShow} variant='primary' className='btn-signUp'>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className='hello'>Hello!</Modal.Title>
          <p className="note">Use your Username and password to continue with Coolors.  </p>
          
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="25">
              
              <Form.Control type="text" placeholder="Username" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="25">

              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="25">

              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <Button variant="primary" onClick={handleClose} className='btn-submit'>
           Register
          </Button>

        </Modal.Body>
        <Modal.Footer>
          <Form.Text className='footer'>By continuing, you agree to our Terms of Service.</Form.Text>
          <Form.Text className='footer'>Read our Privacy Policy</Form.Text>
          {/* <Button variant="secondary" onClick={handleClose} >
            Close
          </Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUp;