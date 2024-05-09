import React, { useState } from 'react';
import { API } from '../../axios';
import { Link } from 'react-router-dom';
import { saveToken } from '../../assets/scripts/Token';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    interface RegisterResponse {
        data: {},
        TOKENS: TOKENS
    }

    interface TOKENS {
        access: string,
        refresh: string
    }

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }

    const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value)
    }

    const handleRegister = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const response = await API.post<RegisterResponse | null>('users/register', {
                USERNAME: name,
                EMAIL: email,
                PASSWORD: password,
                CREATEDATE: new Date,
                CONFIRMED: false,
                PERMISSIONS: "player",
            });
            saveToken(response.data?.TOKENS)
            console.log(response.data); // Обработка успешного ответа

        } catch (error) {
            console.error('Registration failed:', error); // Обработка ошибки
        }
    }

    return (
        <div className="Register_Container">
            <div className='Register_Component'>
                <h1>Регистрация</h1>
                <form onSubmit={handleRegister} className="RegisterForm">
                    <div className='TextForInput'>
                        <text>
                            Имя
                            Почта
                            Пароль
                        </text>
                    </div>
                    <div className='Inputs'>
                        <input name='Name' type="text" value={name} onChange={handleNameChange} placeholder='Имя'></input>
                        <input name="Email" type="email" value={email} onChange={handleEmailChange} placeholder="Почта"></input>
                        <input name="Password" type="password" value={password} onChange={handlePasswordChange} placeholder="Пароль"></input>
                    </div>
                    <button type="submit">Продолжить</button>
                </form>
                <div className='login_link'>
                    <text>Есть аккаунт? <Link to='/account/login'>Войдите!</Link></text>
                </div>
            </div>
        </div>
    )
}

export default Register;
