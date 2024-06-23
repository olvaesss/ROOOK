import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../axios';

// Определение интерфейсов для типизации данных
interface IUSER {
    ID_PLAYER: number;
    USERNAME: string;
    EMAIL: string;
    CREATEDATE: Date;
}

interface INews {
    ID_NEWS: number;
    ID_PLAYER: number;
    IMG: string;
    TEXT: string;
    TITLE: string;
    APPROVE: boolean;
    HREF: string;
}

const Admin = () => {
    // Состояния для хранения данных игроков и новостей
    const [players, setPlayers] = useState<IUSER[]>([]);
    const [news, setNews] = useState<INews[]>([]);

    // Функция для получения данных
    const fetchData = async () => {
        try {
            const playersResponse = await API.get('/admin/players');
            setPlayers(playersResponse.data);
            const newsResponse = await API.get('/admin/news');
            setNews(newsResponse.data);
            console.log(playersResponse)
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    // Получение данных при монтировании компонента
    useEffect(() => {
        fetchData();
    }, []);

    // Функция для удаления пользователя
    const deleteUser = (id: number) => {
        API.delete(`/admin/${id}`).then(() => {
            setPlayers(players.filter(player => player.ID_PLAYER !== id));
        });
    };

    // Функция для подтверждения новости
    const approveNews = (id: number) => {
        API.put(`/admin/approve/${id}`).then(() => {
            setNews(news.map(item => item.ID_NEWS === id ? { ...item, APPROVE: true } : item));
        });
    };

    // Функция для отклонения новости
    const rejectNews = (id: number) => {
        API.delete(`/admin/reject/${id}`).then(() => {
            setNews(news.filter(item => item.ID_NEWS !== id));
        });
    };

    return (
        <div className='Admin_Container'>
            <div className='Players_Table'>
                <h1>Игроки</h1>
                <table className='Players_Table'>
                    <thead>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Почта</th>
                        <th>Действие</th>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.ID_PLAYER}>
                                <td>{player.ID_PLAYER}</td>
                                <td>{player.USERNAME}</td>
                                <td>{player.EMAIL}</td>
                                <td>
                                    <button onClick={() => deleteUser(player.ID_PLAYER)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='NewsConfirm_Table'>
                <h2>Новости на ожидании</h2>
                <table className='NewsConfirm_Table'>
                    <thead>
                        <th>ID</th>
                        <th>Заголовок</th>
                        <th>Автор</th>
                        <th>Текст</th>
                        <th>Источник</th>
                        <th>Действие</th>
                    </thead>
                    <tbody>
                        {news.map(item => (
                            <tr key={item.ID_NEWS}>
                                <td>{item.ID_NEWS}</td>
                                <td>{item.TITLE}</td>
                                <td>{item.ID_PLAYER}</td>
                                <td>{item.TEXT}</td>
                                <td>{item.HREF}</td>
                                <td>
                                    <button onClick={() => approveNews(item.ID_NEWS)}>Подтвердить</button>
                                    <button onClick={() => rejectNews(item.ID_NEWS)}>Отклонить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
