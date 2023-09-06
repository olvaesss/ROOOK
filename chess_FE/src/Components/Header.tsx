import React from "react";

export default function Header(){
    return (
        <div className="Header">
            <div className="Logo"></div>
            <div className="Title">{}Chess Web Game "ROOK CHESS"</div>
            <div className="UserInfo">
                <span className="Avatar">Avatar</span>
                <span className="UserName">Name</span>
            </div>
            <div className="Buttons">
            <div className="users_btn">
            <button className="LoginButton">Войти</button>
            </div>
            <div className="users_btn">
            <button className="RegisterButton">Регистрация</button>
            </div>
            </div>
        </div>
    )
}