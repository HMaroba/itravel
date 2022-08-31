import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Request = () => {
  return (
    <div>
      <div className="cont">
        <Form className="form2">
          <p className="send">Send Request Bus</p>

          <InputGroup className="mb-3">
            <Form.Control
              className="formc"
              type="text"
              aria-label="First name"
              placeholder="Location"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
            <Form.Control
              aria-label="Last name"
              placeholder="Number of Seats"
              type="number"
              className="formc"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              className="formc"
              aria-label="First name"
              type="text"
              placeholder="Passenger Name"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
            <Form.Control
              className="formc"
              aria-label="Last name"
              type="text"
              placeholder="Home pick time"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              className="formc"
              aria-label="First name"
              type="text"
              placeholder="School Pick Time"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
            <Form.Control
              aria-label="Last name"
              className="formc"
              type="text"
              placeholder="Passenger Grade"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
          </InputGroup>

          <Form.Group className="mb-31" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" className="formc" placeholder="Enter School Name" 
             style={{color: " #1340DE",border: "1px solid #2B67F6"}}
            />
          </Form.Group>
          <Form.Group className="mb-31" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" className="formc" placeholder="Enter Parent Number"
              style={{color: " #1340DE",border: "1px solid #2B67F6"}}
              
            />
          </Form.Group>

          <div className="btn1">
            <Button type="submit" className="btn btn-primary">
              Send Request
            </Button>
          </div>
        </Form>
        <img src="/Assets/Images/request.svg" className="image12" alt="" />
      </div>
    </div>
  );
};

export default Request;
