import React, { useEffect, useState } from "react";
import { API } from "../../axios";
import Footer from "../Footer";
import { Link } from "react-router-dom";

interface News {
    ID_NEWS: number,
    ID_PLAYER: number,
    IMG: string,
    TEXT: string,
    TITLE: string,
    HREF: string
}

const News = () => {
    const [data, setData] = useState<News[] | null>(null); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get<News[]>('/news'); // Указание типа данных для ответа
                setData(response.data); // Сохранение данных в состоянии
                setLoading(false); // Установка состояния загрузки в false
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                setLoading(false); // Установка состояния загрузки в false в случае ошибки
            }
        };

        fetchData(); // Вызов функции для получения данных при монтировании компонента
    }, []);

    return (
        <div className="Main">
            {loading ? ( // Проверка состояния загрузки
                <div>Загрузка...</div>
            ) : (
                <div>
                    {data ? ( // Проверка наличия данных    
                        <div className="NewsContainer">
                            {data.map((TITLE, index) => (
                                <div className='NewsComponent'>
                                    <img className="NewsImg" src={data[index].IMG} alt="Фото новости" />
                                    <div className="NewsTitle">{data[index].TITLE}</div>
                                    <div className="NewsText">{data[index].TEXT}</div>
                                    <div><Link to={data[index].HREF}><button>Пордробнее</button></Link></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>Данные не найдены</div> // Отображение сообщения, если данных нет
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default News;
