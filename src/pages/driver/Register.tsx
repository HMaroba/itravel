import React from "react";
import Form from "react-bootstrap/Form";
import Imag from "./signupImg.svg";
import { Link } from "react-router-dom";

import { drivers } from "../../models/driver";

const Register = () => {
  return (
    <div className="cont">
      <Form className="form1">
        <h3 className="sign">Signup</h3>
        <div className="mb-3">
          <input
            type="text"
            className="formcontrol"
            placeholder="Enter Username"
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="formcontrol"
            placeholder="Enter Contact Number"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="formcontrol"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="formcontrol"
            placeholder="Enter Location"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="formcontrol"
            placeholder="Enter license number"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="formcontrol"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
        <p className="forgot-password text-right">
          Already Registered <Link to={"/login"}>login</Link>
        </p>
      </Form>
      <img src={Imag} className="image1" />
    </div>
  );
};

export default Register;
