import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useRef, useContext, useEffect } from "react";
import Naslovna from "./Components/Naslovna";
import TwoD from "./Components/TwoD.js";
import Noodle from "./Components/Noodle";
import Murdoc from "./Components/Murdoc";
import Russel from "./Components/Russel";
import Class from "./Components/Class";
// import Rodendan from "./Components/Rodendan";
import { DarkModeProvider } from "./Components/DarkModeContext";

export default function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" className="Naslovna" element={<Naslovna />}></Route>
            <Route path="/TwoD" className="TwoD" element={<TwoD />}></Route>
            <Route
              path="/Noodle"
              className="Noodle"
              element={<Noodle />}
            ></Route>
            <Route
              path="/Murdoc"
              className="Murdoc"
              element={<Murdoc />}
            ></Route>
            <Route
              path="/Russel"
              className="Russel"
              element={<Russel />}
            ></Route>
            <Route path="/Class" element={<Class />}></Route>
            {/* <Route path="/Rodendan" element={<Rodendan />}></Route> */}
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}
