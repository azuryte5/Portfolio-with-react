import React, {useState} from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { validateEmail } from '../utils/helper.js';

const Contact = () =>{ 
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };
const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
    window.location.reload(false);
  };
  return(
  <Container>
    <Row className="justify-content-md-center">
    <div>
      <h2>Feel free to reach out to me!</h2>
    </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter your full name:</Form.Label>
        <Form.Control type="text" name="name" defaultValue={name} placeholder="Enter your full name" onBlur={handleChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter your email address:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your your email address"
          defaultValue={email}
          onBlur={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
        as="textarea" rows={3} 
        name="message"
        defaultValue={message}
        onBlur={handleChange}
        />
      </Form.Group>
      {errorMessage && (
          <Alert variant="warning">
            <p className="error-text">{errorMessage}</p>
          </Alert>
        )}
      <Button variant="primary" type="submit">
        Click here to submit request
      </Button>
    </Form>
    </Row>
  </Container>
)
}
export default Contact;
