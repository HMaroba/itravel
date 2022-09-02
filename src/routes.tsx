import React from "react";
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import Request from "./pages/customer/Register";
import Home from "./components/Home";
import Drivermain from "./pages/driver/drivermain";
import Customermain from "./pages/customer/Customermain";
import { Route, Routes } from "react-router-dom";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="driver" element={<Register />} />
      <Route path="/request" element={<Request />} />
      <Route path="/customermain" element={<Customermain />} />
      <Route path="/drivermain" element={<Drivermain />} />
    </Routes>
  );
};

export default Mainroutes;
