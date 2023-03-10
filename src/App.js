import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="alert">
        <Alert />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
