import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";


export default function Header(){
    return (
        <div className="Header">
            <div className="Logo"></div>
            <div className="Title">{}Chess Web Game "ROOK CHESS"</div>
            <div className="UserInfo">
                <span className="Avatar">Avatar</span>
                <span className="UserName">Name</span>
            </div>
        </div>
    )
}