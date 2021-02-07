import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

// const EMAIL_REG = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName.length) {
//     errors.firstName = "name is required!";
//   } else if (values.firstName.length < 3) {
//     errors.firstName = "name is too short";
//   } else if (values.firstName.length > 12) {
//     errors.firstName = "name is too long. Max 11 charts";
//   }

//   if (!values.email.length) {
//     errors.email = "email is required";
//   }else if (!values.email.match(EMAIL_REG)){
//     errors.email = "email is not correct"
//   }

//   return errors;
// };

const validationSchema = () =>
  yup.object().shape({
    email: yup
      .string('write email')
      .required("email is required")
      .email("email is not correct"),
    firstName: yup
      .string('name is empty')
      .required("name is required!")
      .min(4, "name is too short")
      .max(19, "name is too long. Max 11 charts"),
    lastName: yup
    .string('write surname')
    .required('surname is required'),
    age: yup
      .number('write your age')
      .min(18, "you have to be of age")
      .max(60, "...")
      .required("Write your age"),
  });

function App() {
  
const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];


  // const [person, setPerson] = React.useState({
  //   firstName: '',
  //   email: '',
  //   lastName: '',
  //   age: ''
  // })

  // const [people, setPeople] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  
  const handleChange = e => {
    setSearchTerm(e.target.value);
    console.log(e)
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  const handleSubmited = (e) => {
    e.preventDefault();
    e.target.name = 'tetwerwrwerw'
    console.log(e);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    // validate,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const errorsElements = Object.entries(formik.errors).map(([key, value]) => (
    <p key={key}>{value}</p>
  ));

  // const firstNameError = formik.errors.firstName ? (
  //   <div>
  //     <p>{formik.errors.firstName}</p>
  //   </div>
  // ) : null;

  // const emailError = formik.errors.email ? (
  //   <div>
  //     <p>{formik.errors.email}</p>
  //   </div>
  // ) : null;

  return (
    <Card className="text-center">
      <Card.Header>Sample Form</Card.Header>
      <Card.Body>
        <Card.Title>formik as a main guest</Card.Title>
        <Card.Text></Card.Text>

        <form onSubmit={formik.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formik.values.searchTerm}
              placeholder="name"
            // className={formik.errors.firstName ? 'red' : null}
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="last name"
            // className={formik.errors.firstName ? 'red' : null}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              placeholder="age"
            // className={formik.errors.firstName ? 'red' : null}
            />
          </label>

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
          {/* <button >Send</button> */}
        </form>
         <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
        {/* {emailError} */}
        {/* {firstNameError} */}
        {errorsElements}
        <Button type="submit" name='ddfsaf' onClick={handleSubmited}>Add Person</Button>
      </Card.Body>
      <Card.Footer className="text-muted">lukassso</Card.Footer>
    </Card>
  );
}

export default App;
