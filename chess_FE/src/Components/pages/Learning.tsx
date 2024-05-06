import React, { useEffect, useState } from "react";
import Learn from "./PageComponents/Learn";
import { API } from "../../axios";
import Footer from "../Footer";

interface ApiResponse {
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
                                    <img src={data.images[index]} alt={`Изображение ${index}`} className="text-image" /> {/* Добавлен вывод изображений */}
                                    <div>
                                        <h2>{title}</h2>
                                        <p>{data.text[index]}</p>
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
