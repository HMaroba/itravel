import React from "react";
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import Request from "./pages/customer/Request";
import Home from "./components/Home";
import RegisterDriver from "./pages/driver/Register";
import Drivermain from "./pages/driver/drivermain";
import Customermain from "./pages/customer/Customermain";
import { Route, Routes } from "react-router-dom";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/driver" element={<RegisterDriver />} />
      <Route path="/request" element={<Request />} />
      <Route path="/customermain" element={<Customermain />} />
      <Route path="/drivermain" element={<Drivermain />} />
    </Routes>
  );
};

export default Mainroutes;
