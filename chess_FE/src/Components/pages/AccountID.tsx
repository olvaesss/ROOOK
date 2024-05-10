import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../axios';
import { error } from 'console';

interface IUSER {
  ID_PLAYER: number;
  USERNAME: string;
  EMAIL: string;
  CREATEDATE: Date;
}
const Account = () => {
  const { accountID } = useParams();
  const [userData, setUserData] = useState<IUSER | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await API.get<IUSER | null>(`users/${accountID}`);
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
        <div>
          <h1>Данные игрока:</h1>
          <p>Имя: {userData.USERNAME}</p>
          <p>Почта: {userData.EMAIL}</p>
          {/* Additional user fields */}
        </div>
      ) : (
        <p>Загрузка данных игрока...</p>
      )}
    </div>
  );
};

export default Account;
