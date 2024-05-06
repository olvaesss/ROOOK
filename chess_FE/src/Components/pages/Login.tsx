import React, { useState } from 'react';
import { API } from '../../axios';
import { Link } from 'react-router-dom';

const Login = () => {
    interface LoginResponse {

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }

    async function LoginPost(email: string, password: string) {
        API.post<LoginResponse | null>('users/login',
            {
                Email: email,
                Password: password
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
        <div className="Login_Container">
            <div className='Login_Component'>
                <h1>Вход</h1>
                <form onSubmit={handleLogin} className="LoginForm">
                    <div className='TextForInput'>
                        <text>
                            Почта
                            Пароль
                        </text>
                    </div>
                    <div className='Inputs'>
                        <input name="Email" type="email" value={email} onChange={handleEmailChange} placeholder='Почта'></input>
                        <input name="Password" type="password" value={password} onChange={handlePasswordChange} placeholder='Пароль'></input>
                    </div>
                    <button type="submit">Продолжить</button>
                </form>
                <div className='register_link'>
                    <text>Нет аккаунта? <Link to='/account/register'>Зарегестрируйтесь!</Link></text>
                </div>
            </div>
        </div>
    )
}

export default Login;
