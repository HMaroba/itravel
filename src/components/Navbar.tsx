import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// import Login from "../pages/driver/Login";
// import Register from "../pages/driver/Register";

import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Request from "../pages/customer/Request";
import Register2 from "../pages/driver/Register";
import Payment from "../pages/payments/payment";

const Navbar = () => {
  return (
    <div className="cont2">
      <BrowserRouter>
        <h2 className="logo">Itravel</h2>
        <div className="links">
          <Link className="link" to={"/driver"}>
            Driver Registration
          </Link>
          <Link className="link" to={"/driver-login"}>
            Driver Login
          </Link>
          <Link className="link" to={"/request"}>
            About
          </Link>

          <Link className="link" to={"/login"}>
            Login Here
          </Link>
          <Link className="link" to={"/register"}>
            Register
          </Link>
          <Link className="link" to={"/payment"}>
            Payments
          </Link>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/driver" element={<Register2 />} />{" "}
          <Route path="/request" element={<Request />} />{" "}
          <Route path="/payment" element={<Payment />} />{" "}
          <Route path="/driver-login" element={<Login />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
