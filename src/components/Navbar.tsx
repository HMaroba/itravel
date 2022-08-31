import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Request from "../pages/customer/Request";
import Register2 from "../pages/driver/Register";

const Navbar = () => {
  return (
    <div className="cont2">
      <BrowserRouter>
        <h2 className="logo">Itravel</h2>
        <div className="links">
          <Link className="link" to={"/driver"}>
            Home
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
        </div>
      
        <Routes>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/driver" element={<Register2/>} />{" "}
          <Route path="/request" element={<Request/>} />{" "}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
