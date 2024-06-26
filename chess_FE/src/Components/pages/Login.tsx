import React, { useState } from 'react';
import { API } from '../../axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    interface LoginResponse {
        ID_PLAYER: number;
        USERNAME: string;
        EMAIL: string;
        PASSWORD: string;
        CREATEDATE: Date;
        CONFIRMED: boolean;
        PERMISSIONS: string;
    }
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }

    async function LoginPost(email: string, password: string) {
        if (email == 'admin' && password == 'admin') return navigate('/admin')
        const response = await API.post<LoginResponse | null>('users/login',
            {
                EMAIL: email,
                PASSWORD: password
            }
        )
        console.log(response)
        if (!response) return console.error("Повторите попытку")
        navigate(`/account/${response.data?.ID_PLAYER}`)
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
                        <input name="Email" type="text" value={email} onChange={handleEmailChange} placeholder='Почта'></input>
                        <input name="Password" type="password" value={password} onChange={handlePasswordChange} placeholder='Пароль'></input>
                    </div>
                    <button type="submit">Продолжить</button>
                </form>
                <div className='register_link'>
                    <text>Нет аккаунта? <Link to='/account/register'>Зарегистрируйтесь!</Link></text>
                </div>
            </div>
        </div>
    )
}

export default Login;
