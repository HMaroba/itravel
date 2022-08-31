import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  function handleSubmit() {}
  return (
    <div className="cont">
      <Form className="form1" onSubmit={handleSubmit}>
        <h3 className="sign2">Signin</h3>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Enter password" />
        </Form.Group>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Not Registered <Link to={"/register"}>Sign up</Link>
        </p>
      </Form>
      <img src="/Assets/Images/signupimg.svg" className="image1" alt="" />
    </div>
  );
};

export default Login;
