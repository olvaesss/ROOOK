import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { API } from "../../axios";

const Account = ()=>{
    if(!document.cookie.match('accessToken'))
    {
        return(
            <div>
                <Link to="/account/login">Вход</Link>
                <Link to="/account/register">Регистрация</Link>
            </div>
        )
    }
    const access = document.cookie.match('ACCESS_TOKEN')
    const refresh = document.cookie.match('REFRESH_TOKEN')    
    API.post('/auth',{access,refresh})
    return(
        <div>
            <h2>Account</h2>
        </div>
    )
}

export default Account