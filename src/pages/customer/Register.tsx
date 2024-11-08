import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

  return (
    <>
      <Navbar />
      <div className="cont">
        <Form className="form1">
          <h3 className="sign">Signup</h3>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              className="formcontrol"
              placeholder="Enter Username"
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="number"
              className="formcontrol"
              placeholder="Enter Contact Number"
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              className="formcontrol"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email Address"
              value={email}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="date"
              className="formcontrol"
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select
              aria-label="Default select example"
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            >
              <option className="formcontrol">Choose Gender</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="3">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="number"
              className="formcontrol"
              placeholder="Enter Location"
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              className="formcontrol"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: " #1340DE", border: "1px solid #2B67F6" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              className="formcontrol"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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
          <p className="forgot-password text-right">
            Register as <Link to={"/driver"}>Driver</Link>
          </p>
        </Form>
        <img src="/Assets/Images/signupimg.svg" className="image123" alt="" />
      </div>
    </>
  );
};

export default Register;
