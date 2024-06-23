import React, { useState, useEffect } from 'react';
import { API } from "../../../axios";
import { useParams } from "react-router-dom";

interface ILEARN {
    ID_LEARN: number,
    TITLE: string,
    TEXT: string,
    IMAGE: string
}

let images = [
    '/images/king_moves.jpg',
    '/images/queen_moves.jpg',
    '/images/rook_moves.jpg',
    '/images/bishop_moves.jpg',
    '/images/knight_moves.jpg',
    '/images/pawn_moves.jpg',
]

const Learn = () => {
    const { learnID } = useParams();
    const [data, setData] = useState<ILEARN | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get<ILEARN>(`/learn/${learnID}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [learnID]);

    return (
        <div className="Learn">
            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <div>
                    {data ? (
                        <div>
                            <img src={images[data.ID_LEARN - 1]} alt={`Изображение ${data.ID_LEARN - 1}`} className="text-image" /> {/* Добавлен вывод изображений */}
                            <div>
                                <h3>Глава: {data.TITLE}</h3>
                                <p>{data.TEXT}</p>
                            </div>
                        </div>
                    ) : (
                        <div>Данные не найдены</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Learn;
