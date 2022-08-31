import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  function handleSubmit() {}
  return (
    <div className="cont">
      <Form className="form1" onSubmit={handleSubmit}>
        <h3 className="sign2">Signin</h3>
        <div className="mb-3">
          <input
            type="text"
            className="formcontrol"
            placeholder="Enter Username"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="formcontrol"
            placeholder="Enter password"
            required
          />
        </div>

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
