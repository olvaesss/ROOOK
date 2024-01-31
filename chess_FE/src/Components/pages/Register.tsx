import React from "react";
import { API } from "../../axios";

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
            <text>Sign Up</text>
            <form method="POST" className="Register_Form">
                <p>Username</p>
                <input name="Name" type="text"></input>
                <p>Email</p>
                <input name="Email" type="email"></input>
                <p>Password</p>
                <input name="Password" type="password"></input>
                <p>Repeat password</p>
                <input name="Repeat_Password" type="password"></input>
                <button name="Confirm" onClick={RegisterPost}>Подтвердить</button>
            </form>
        </div>

    )
}