import React, { useState, useEffect } from "react";
import { API } from "../../axios";
import Footer from "../Footer";

// Определение интерфейса для данных от API
interface ApiResponse {
    titles: string[];
    text: string[];
}

const Main = () => {
    const [data, setData] = useState<ApiResponse | null>(null); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get<ApiResponse>('/'); // Указание типа данных для ответа
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
                        <div className="MainContainer">
                            <div>
                                <div className="MainTitles">
                                <h3>{data.titles[0]}</h3>
                                {data.text[0]}
                                </div>
                                <div className="MainTitles">
                                <h3>{data.titles[1]}</h3>
                                {data.text[1]}
                                </div>
                                <div className="MainTitles">
                                <h3>{data.titles[2]}</h3>
                                {data.text[2]}
                                </div>
                            </div>
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

export default Main;
