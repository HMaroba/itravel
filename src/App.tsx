import React from "react";
import "./App.css";
import { config } from "./config/firebase";

import Customermain from "./pages/customer/Customermain";
import Navbar from "./components/Navbar";

const { initializeApp } = require("firebase/app");
const cors = require("cors");
initializeApp(config.firebaseConfig);


function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
