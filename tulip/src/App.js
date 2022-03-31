import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Reviews from "./components/pages/Reviews/Reviews";
import AddReview from "./components/pages/AddReview/AddReview";
import AddAirline from "./components/pages/AddAirline/AddAirline";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/AddReview" element={<AddReview />} />
      <Route path="/AddAirline" element={<AddAirline />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </div>
  );
}

export default App;