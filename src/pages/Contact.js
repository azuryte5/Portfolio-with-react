import React from "react";
import { Form, Button } from "react-bootstrap";
const Contact = () => (
  <div>
    <div>
      <h2>Feel free to reach out to me!</h2>
    </div>
    <Form>
      <Form.Group>
        <Form.Label>Enter your full name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter your email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your your email address"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Click here to submit request
      </Button>
    </Form>
  </div>
);

export default Contact;
