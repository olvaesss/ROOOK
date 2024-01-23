import React, { useEffect, useState } from "react";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from "./Components/pages/Lobby";
import Register from "./Components/pages/Register";
import Navigate from "./Components/navigate";
import Main from "./Components/pages/Main";


const App = () => {
    return(
        <div>
      <Router>
        <Navigate/>
        <Routes>
          <Route path="/Lobby" element={<Lobby />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
        </div>
    )
}
export default App  