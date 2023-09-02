import React from "react";
import { API } from "../axios";

export default function Register(){
    function RegisterPost(){
        API.post('users/register',{
            UserName:String,
            Email:String,
            Passwrod:String
        })
    }
    return (
        <div className="Register_Component">
            <form method="POST" className="RegisterForm">
                <input name="Name" type="text"></input>
                <input name="Email" type="email"></input>
                <input name="Password" type="password"></input>
                <button name="Confirm_Reg">Подтвердить</button>
            </form>
        </div>
    )
}