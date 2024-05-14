import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../axios';

interface UserResponse {
  USER: IUSER
  Matches: Matches[]
}

interface Matches {
  ID_GAME: number;
  PLAYER_1: string;
  PLAYER_2: string;
  WINNER: string;
  TURNS: string;
}
interface IUSER {
  ID_PLAYER: number;
  USERNAME: string;
  EMAIL: string;
  CREATEDATE: Date;
}
const Account = () => {
  const { accountID } = useParams();
  const [userData, setUserData] = useState<UserResponse | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await API.get<UserResponse | null>(`users/${accountID}`);
        if (!response.data) return console.error("error")
        console.log(response.data)
        setUserData(response.data)
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [accountID]);

  return (
    <div>
      {userData ? (
        <div className='Account_Container'>
          <div className='User_Data'>
            <h1>Данные игрока:</h1>
            <p>Имя: {userData.USER.USERNAME}</p>
            <p>Почта: {userData.USER.EMAIL}</p>
            <p>Матчей: {userData.Matches.length}</p>
          </div>
          <div className='Matches'>
            <h2>Последние 20 матчей</h2>
            <table className='Matches_Table'>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Игрок белых</th>
                  <th>Игрок черных</th>
                  <th>Победитель</th>
                </tr>
              </thead>
              <tbody>
                {userData.Matches.slice(0, 20).map((match, index) => (
                  <tr key={match.ID_GAME}>
                    <td>{index + 1}</td>
                    <td>{match.PLAYER_1}</td>
                    <td>{match.PLAYER_2}</td>
                    <td>{match.WINNER}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Загрузка данных игрока...</p>
      )}
    </div>
  );
};

export default Account;
