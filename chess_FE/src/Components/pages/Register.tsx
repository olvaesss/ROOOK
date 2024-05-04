import React, { useState } from 'react';
import { API } from '../../axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    }

    const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
        setName(event.target.value)
    }

    const handleRegister = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const response = await API.post('users/register', {
                email: email,
                password: password
            });
            console.log(response.data); // Обработка успешного ответа
        } catch (error) {
            console.error('Registration failed:', error); // Обработка ошибки
        }
    }

    return (
        <div className="Register_Component">
            <h1>Регистрация</h1>
            <form onSubmit={handleRegister} className="RegisterForm">
                <input name='Name'  type="text" value={name} onChange={handleNameChange} placeholder='Name'></input>
                <input name="Email" type="email" value={email} onChange={handleEmailChange} placeholder="Email"></input>
                <input name="Password" type="password" value={password} onChange={handlePasswordChange} placeholder="Password"></input>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Register;
