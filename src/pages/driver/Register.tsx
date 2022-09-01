import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="cont">
      <Form className="form4">
        <h3 className="sign">Signup</h3>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Username"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Enter Contact Number"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Location"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter license number"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter password"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Confirm password"
            style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
          />
        </Form.Group>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
        <p className="forgot-password text-right">
          Already Registered <Link to={"/login"}>login</Link>
        </p>
      </Form>
      <img src="/Assets/Images/signupimg.svg" className="image123" alt="" />
    </div>
  );
};

export default Register;
