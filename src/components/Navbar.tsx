import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Customermain from "../pages/customer/Customermain";

// import Login from "../pages/driver/Login";
// import Register from "../pages/driver/Register";

import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Request from "../pages/customer/Request";
import Register2 from "../pages/driver/Register";
import Home from "./Home";


const Navbar = () => {
  return (
    <div className="cont2">
      <BrowserRouter>
        <h2 className="logo">Itravel</h2>
        <div className="links">

          <Link className="linkhome" to={"/"}>
            HOME
          </Link>
          <Link className="link" to={"/request"}>
            PRODUCT
          </Link>
          <Link className="link" to={"/register"}>
            ABOUT US
          </Link>

          <Link className="link2" to={"/login"}>
            <span className="span1">Log in</span>
          </Link>
          <Link className="link1" to={"/register"}>
            <span className="span1">Sign up</span>
          </Link>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />{" "}

          <Route path="/register" element={<Register/>} />{" "}
          <Route path="/driver" element={<Register2 />} />{" "}
          <Route path="/request" element={<Request />} />{" "}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/customermain" element={<Customermain/>} />{" "}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
