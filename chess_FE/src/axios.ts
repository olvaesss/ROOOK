import axios from "axios";
import { getToken } from "./assets/scripts/Token";

export const API = axios.create({
    baseURL:'http://localhost:3001',
    headers:{}
})

API.interceptors.request.use(
    config => {
        const token = getToken(); // Замените эту строку со своей логикой получения токена
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

