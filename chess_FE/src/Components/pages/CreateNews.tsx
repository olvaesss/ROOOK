import React, { ChangeEventHandler, useState } from 'react';
import { API } from '../../axios';
import { useNavigate } from 'react-router-dom';
import { randomUUID } from 'crypto';

const CreateNewsPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState<File | null>(null);

    interface News {
        ID_NEWS: number;
        TITLE: string;
        AUTHOR: string;
        TEXT: string;
        LINK: string;
        IMAGE: string;
        CREATEDATE: Date;
    }

    const handleTitleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    }

    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setText(event.target.value);
    }

    const handleLinkChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLink(event.target.value);
    }

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.target.files;
        if (files) {
            setImage(files[0]);
        }
    }


    const handleCreateNews = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            console.log(image?.name)
            const formData = new FormData();
            formData.append('TITLE', title);
            formData.append('TEXT', text);
            formData.append('LINK', link);
            if (image) {
                formData.append('IMAGE', image);
            }
            console.log(formData)
            const response = await API.post<News | null>(`/news`,
                {
                    TITLE: title,
                    TEXT: text,
                    HREF: link,
                    IMAGE: image?.name,
                    CREATEDATE: new Date
                });
            if (!response) return console.error('Failed');
            console.log(response.data);
        } catch (error) {
            console.error('Failed to Create news:', error);
        }
    }

    return (
        <div className="News_Container">
            <div className='CreateNews_Component'>
                <h1>Создать новость</h1>
                <form onSubmit={handleCreateNews} className="CreateNewsForm">
                    <div className='TextForInput'>
                        <text>
                            Заголовок
                            Текст
                            Ссылка
                            Изображение
                        </text>
                    </div>
                    <div className='Inputs'>
                        <input name='Title' type="text" value={title} onChange={handleTitleChange} placeholder='Заголовок'></input>
                        <input name="Text" type='text' onChange={handleTextChange} placeholder="Текст"></input>
                        <input name="Link" type="text" value={link} onChange={handleLinkChange} placeholder="Ссылка"></input>
                        <input name="Image" type="file" onChange={handleImageChange} placeholder="Изображение"></input>
                    </div>
                    <button type="submit">Создать новость</button>
                </form>
            </div>
        </div>
    );
}

export default CreateNewsPage;
