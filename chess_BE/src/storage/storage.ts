

// Import the functions you need from the SDKs you need
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn4wL3G2GbeEYpqydCGUNVM2lOcmF8PAA",
  authDomain: "rooook-39f9b.firebaseapp.com",
  projectId: "rooook-39f9b",
  storageBucket: "rooook-39f9b.appspot.com",
  messagingSenderId: "377699163294",
  appId: "1:377699163294:web:2f538c8036f8cd82b2af8f",
  measurementId: "G-PM9CQMKPCX",
};

// Initialize Firebase
import {uploadBytes, getDownloadURL } from "firebase/storage";

// Получение ссылки на хранилище Firebase
const storage = getStorage();

// Функция загрузки изображения
export const uploadImage = async (file, imageName) => {
    try {
        const storageRef = ref(storage, `images/${imageName}`);
        await uploadBytes(storageRef, file);
        console.log("Изображение успешно загружено!");
    } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
    }
};

// Функция скачивания изображения
export const downloadImage = async (imageName) => {
    try {
        const storageRef = ref(storage, `images/${imageName}`);
        const imageUrl = await getDownloadURL(storageRef);
        console.log("URL изображения:", imageUrl);
        return imageUrl;
    } catch (error) {
        console.error("Ошибка при скачивании изображения:", error);
        return null;
    }
};
