import React from "react";
import Login from "../Components/pages/Login";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Lobby from "../Components/pages/Lobby";
import Register from "../Components/pages/Register";
import Navigate from "../Components/navigate";
import Main from "../Components/pages/Main";
import About from "../Components/pages/About";
import Account from "../Components/pages/Account";
import Learning from "../Components/pages/Learning";
import News from "../Components/pages/News";
import Path404 from '../Components/pages/path404'
import Footer from "./Footer";



export default function App() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/learning" element={<Learning />} />
            <Route path="/account" element={<Account />} />
            <Route path="/play" element={<Lobby />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Path404 />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/account/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  
  function Header() {
    return (
      <div className="Header">
        <Link className="Logo" to="/"><h1>ROOK Chess</h1></Link>
        <Navigate />
      </div>
    );
  }