import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Businesshub from "./components/BusinessHub/Businesshub";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/businesshub" element={<Businesshub />} />
      </Routes>
    </>
  );
};

export default App;
