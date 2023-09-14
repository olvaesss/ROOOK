import React from "react";
import { API } from "../axios";

const Login = ()=>{
    function LoginPost(){
        API.post('users/login',{
            Email:String,
            Passwrod:String
        })
    }
    return (
        <div className="Login_Component">
            <text>Вход</text>
            <form method="POST" className="LoginForm">
                <input name="Email" type="email"></input>
                <input name="Password" type="password"></input>
                <button name="Confirm_Log"onClick={LoginPost}>Подтвердить</button>
            </form>
        </div>
    )
}

export default Login