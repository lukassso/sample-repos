import React from "react";

import { useFormik } from "formik";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.firstName.lenght) {
    errors.firstName = "name is required!";
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
  ) : (
    <div>
      <p>{formik.errors.firstName}</p>
    </div>
  );

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
            />
          </label>
          <button type="submit">Send</button>
        </form>
        {firstNameError}

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
