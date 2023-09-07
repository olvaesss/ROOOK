import React, { useEffect, useState } from "react";
import './App.css';
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { API } from "./axios";

const App = () => {
    API.get('/users/')
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>

    )
}
export default App  