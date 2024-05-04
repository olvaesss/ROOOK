import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../axios';

interface IUserData{
    Username:string,
    Email:string,
    matches:string[]
}
const Account = () => {
  const { accountID } = useParams();
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await API.get(`users/${accountID}`);
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('Failed to fetch user data');
        }
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
          <p>Имя: {userData.Username}</p>
          <p>Почта: {userData.Email}</p>
          {/* Additional user fields */}
        </div>
      ) : (
        <p>Загрузка данных игрока...</p>
      )}
    </div>
  );
};

export default Account;
