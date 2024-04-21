import axios from "axios";

export const API = axios.create({
    baseURL:'http://server:3001/',
    headers:{}
})