import React from "react";

export default function Register(){
    return (
        <div className="Register_Component">
            <form method="POST">
                <input name="Name" type="text"></input>
                <input name="Email" type="email"></input>
                <input name="Password" type="password"></input>
                <input type="password"></input>
                <button name="Confirm_Reg">Подтвердить</button>
            </form>
        </div>
    )
}