import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Airlines from "./components/pages/Airlines/Airlines";
import Reviews from "./components/pages/Reviews/Reviews";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Airlines" element={<Airlines />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
