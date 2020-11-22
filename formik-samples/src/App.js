import React from "react";

import { useFormik } from "formik";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

const EMAIL_REG = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const validate = (values) => {
  const errors = {};

  if (!values.firstName.length) {
    errors.firstName = "name is required!";
  } else if (values.firstName.length < 3) {
    errors.firstName = "name is too short";
  } else if (values.firstName.length > 12) {
    errors.firstName = "name is too long. Max 11 charts";
  }

  if (!values.email.length) {
    errors.email = "email is required";
  }else if (!values.email.match(EMAIL_REG)){
    errors.email = "email is not correct"
  }
 
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const firstNameError = formik.errors.firstName ? (
    <div>
      <p>{formik.errors.firstName}</p>
    </div>
  ) : null;

  const emailError = formik.errors.email ? (
    <div>
      <p>{formik.errors.email}</p>
    </div>
  ) : null;

  return (
    <Card className="text-center">
      <Card.Header>Sample Form</Card.Header>
      <Card.Body>
        <Card.Title>formik as a main guest</Card.Title>
        <Card.Text></Card.Text>

        <form onSubmit={formik.handleSubmit}>
          <label>
            Imię:
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="name"
              // className={formik.errors.firstName ? 'red' : null}
            />
          </label>
        
        {firstNameError}

        <label>
          Email:
          <input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            placeholder="email"
            type="email"
            required
          />
        </label>
        <button type="submit">Send</button>
        {emailError}
        </form>

        {/* <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </Card.Body>
      <Card.Footer className="text-muted">lukassso</Card.Footer>
    </Card>
  );
}

export default App;
