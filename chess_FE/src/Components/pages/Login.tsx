import React, { useState } from 'react';
import { API } from '../../axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }

    function LoginPost(email:string, password:string){
        API.post('users/login',
            {
                Email : email,
                Password : password
            }
        )
    }
    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Здесь можно вызывать вашу функцию LoginPost
        // Например:
        LoginPost(email, password);
    }

    return (
        <div className="Login_Component">
            <h1>Вход</h1>
            <form onSubmit={handleLogin} className="LoginForm">
                <input name="Email" type="email" value={email} onChange={handleEmailChange}></input>
                <input name="Password" type="password" value={password} onChange={handlePasswordChange}></input>
                <button type="submit">Подтвердить</button>
            </form>
        </div>
    )
}

export default Login;
