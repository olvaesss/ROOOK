import React from "react";
import { API } from "../axios";

export default function Register(){
    function RegisterPost(){
        let user={
            UserName:'',
            Email:'',
            Passwrod:''
        }
        console.log(user)
        API.post('users/register',user)
    }
    return (
            <div className="Register_Component">
            <form method="POST" className="RegisterForm">
                <input name="Name" type="text"></input>
                <input name="Email" type="email"></input>
                <input name="Password" type="password"></input>
                <button name="Confirm_Reg" onClick={RegisterPost}>Подтвердить</button>
            </form>
        </div>

    )
}