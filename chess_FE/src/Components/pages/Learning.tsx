import React, { useEffect, useState } from "react";
import { API } from "../../axios";
import Footer from "../Footer";
import { Link } from "react-router-dom";

interface ApiResponse {
    id: string[];
    titles: string[];
    text: string[];
    images: string[]; // Изменено название свойства для хранения массива ссылок на изображения
}

const Learning = () => {
    const [data, setData] = useState<ApiResponse | null>(null); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get<ApiResponse>('/learn'); // Указание типа данных для ответа
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
                        <div className="LearningContainer">
                            {data.titles.map((title, index) => (
                                <div key={index} className='LearnComponent'>
                                    <div>
                                        <h2>{title}</h2>
                                        <div>
                                            <p>{data.text[index]}</p>
                                        </div>
                                        <Link to={`/learn/${data.id[index]}`}><button>Пордробнее</button></Link>
                                    </div>
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

export default Learning;
