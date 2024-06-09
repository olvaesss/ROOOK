import React, { useEffect, useState } from 'react';
import { API } from '../../axios';
import { useNavigate } from 'react-router-dom';

interface GameResponse {
    MOD_ID: number;
    MODE_NAME: string;
    TIME: number;
    PLUS: number;
}

const Play = () => {
    const navigate = useNavigate();
    const [gameModes, setGameModes] = useState<GameResponse[]>([]);
    const [selectedMode, setSelectedMode] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchGameModes = async () => {
            try {
                const response = await API.get<GameResponse[]>('/game');
                setGameModes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении режимов игры:', error);
                setLoading(false);
            }
        };
        fetchGameModes();
    }, []);

    useEffect(() => {
        // Обновление информации о выбранном режиме игры
        const selectedGameMode = gameModes.find(mode => mode.MOD_ID === selectedMode);
        console.log(selectedGameMode, selectedMode);
        // Дополнительная логика для обновления состояния, если это необходимо
    }, [selectedMode, gameModes]);

    const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMode(Number(event.target.value));
    };

    const createRoom = async () => {
        try {
            setShowModal(true);
            const response = await API.post("/game");
            const roomId = response.data;
            navigate(`${roomId}`);
        } catch (error) {
            console.error("Ошибка при создании комнаты", error);
        }
    };

    return (
        <div className="Play">
            {loading ? (
                <div className='loading'>
                    <img src="/images/load.gif" alt="Загрузка" />
                </div>
            ) : (
                <div className="PlayContainer">
                    <img src={`/images/${gameModes[selectedMode]?.MODE_NAME}.png`} alt="Изображение режима игры" className="GameModeImage" />
                    <div className="GameDetails">
                        <h2>Выберите режим игры:</h2>
                        <select value={selectedMode} onChange={handleModeChange} className="GameModeSelect">
                            {gameModes.map((mode) => (
                                <option key={mode.MOD_ID - 1} value={mode.MOD_ID - 1}>{mode.MODE_NAME}</option>
                            ))}
                        </select>
                        <button onClick={createRoom} className="PlayButton">Играть</button>
                        {gameModes[selectedMode]?.TIME !== 0 && (
                            <div className="TimePlusDetails">
                                <p>Время: {gameModes[selectedMode]?.TIME / 60} минут</p>
                                <p>PLUS: {gameModes[selectedMode]?.PLUS} секунд за ход</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Модальное окно для поиска комнаты */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <p>Поиск комнаты...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Play;