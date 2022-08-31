// import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Payment = () => {
  return (
    <div className="cont">
      <Form className="form3">
        <h3 className="sign">Payments</h3>

        <ToggleButtonGroup type="checkbox" className="pay">
          <ToggleButton id="tbg-btn-1" value={1}>
            Balance
          </ToggleButton>
          <ToggleButton id="tbg-btn-1" value={1}></ToggleButton>
          <ToggleButton id="tbg-btn-2" value={2}>
            M300
          </ToggleButton>
        </ToggleButtonGroup>

        <Form.Group className="pay" controlId="exampleForm.ControlInput1">
          <Form.Label className="label-pay">Email</Form.Label>
          <Form.Control type="text" placeholder="tlotlisomokati@gmail.com" />
        </Form.Group>

        <Form.Group className="pay" controlId="exampleForm.ControlInput1">
          <Form.Label className="label-pay">Phone number</Form.Label>
          <Form.Control type="number" placeholder="+266 63281988" />
        </Form.Group>
        <br />

        <ButtonGroup className="pay" size="lg">
          <Button>Payment Method</Button>
          <Button></Button>

          <DropdownButton as={ButtonGroup} title="" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">VISA</Dropdown.Item>
            <Dropdown.Item eventKey="2">Paypal</Dropdown.Item>
            <Dropdown.Item eventKey="2">Mpesa</Dropdown.Item>
            <Dropdown.Item eventKey="2">Ecocash</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup className="pay" size="sm">
          <Button>Pay M300.00</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Payment;
