import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { config } from "./config/firebase";

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
